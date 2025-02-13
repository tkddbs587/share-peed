import { db } from '@/firebase';
import { Unsubscribe } from 'firebase/auth';
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import UserPost from './UserPost';

export interface Post {
  id: string;
  userId: string;
  username: string;
  photo?: string;
  content: string;
  createdAt: number;
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
      unsubscribe = await onSnapshot(postQuery, (snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          const { content, createdAt, photo, userId, username } = doc.data();
          return {
            id: doc.id,
            userId,
            username,
            photo,
            content,
            createdAt,
          };
        });
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
    <div>
      {postsData.map((post) => (
        <UserPost key={post.id} {...post} />
      ))}
    </div>
  );
};

export default TimeLine;
