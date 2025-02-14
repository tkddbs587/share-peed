import { db } from '@/firebase';
import { Unsubscribe } from 'firebase/auth';
import {
  collection,
  getDoc,
  limit,
  onSnapshot,
  orderBy,
  query,
  doc as firestoreDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import UserPost from './UserPost';

interface UserData {
  avatarUrl?: string;
  displayName: string;
}
export interface Post {
  id: string;
  userId: string;
  username: string;
  photo?: string;
  content: string;
  createdAt: number;
  avatarUrl?: string;
}

const TimeLine = () => {
  const [postsData, setPostsData] = useState<Post[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;
    const fetchPost = async () => {
      const postQuery = query(
        collection(db, 'posts'),
        orderBy('createdAt', 'desc'),
        limit(10),
      );

      unsubscribe = await onSnapshot(postQuery, async (snapshot) => {
        const postsPromises = snapshot.docs.map(async (document) => {
          const { content, createdAt, photo, userId, username } =
            document.data();

          // 유저의 프로필 정보 가져오기
          const userDocRef = firestoreDoc(db, 'users', userId);
          const userDocSnap = await getDoc(userDocRef);
          const userData = userDocSnap.data() as UserData | undefined;

          return {
            id: document.id,
            userId,
            username,
            photo,
            content,
            createdAt,
            avatarUrl: userData?.avatarUrl,
          };
        });
        const posts = await Promise.all(postsPromises);
        setPostsData(posts);
      });
    };

    fetchPost();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  return (
    <div className="mt-16">
      {postsData.map((post) => (
        <UserPost key={post.id} {...post} />
      ))}
    </div>
  );
};

export default TimeLine;
