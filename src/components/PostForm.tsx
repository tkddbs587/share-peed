import Button from '@/components/common/Button';
import { auth, db, storage } from '@/firebase';
import { addDoc, collection, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';

const PostForm = () => {
  const FILE_SIZE_MAX_LIMIT = 1024 * 1024; // 1MB

  const [postValue, setPostValue] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1) {
      if (files[0].size <= FILE_SIZE_MAX_LIMIT) {
        setFile(files[0]);
        console.log(files[0]);
      } else {
        alert('파일 크기는 1MB 이하여야 합니다.');
        return;
      }
    }
  };

  const onSubmit = async () => {
    const user = auth.currentUser;
    if (!user || isLoading || postValue === '' || postValue.length > 180)
      return;
    try {
      setLoading(true);
      const doc = await addDoc(collection(db, 'posts'), {
        content: postValue,
        createdAt: Date.now(),
        userId: user.uid,
        username: user.displayName || 'Anonymous',
      });

      if (file) {
        const locationRef = ref(storage, `posts/${user.uid}/${doc.id}`);
        const result = await uploadBytes(locationRef, file);
        const url = await getDownloadURL(result.ref);
        await updateDoc(doc, { photo: url });
        setPostValue('');
        setFile(null);
      }
    } catch (e) {
      console.log('Error adding document: ', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-8 border border-gray-30 p-24">
      <textarea
        value={postValue}
        onChange={(e) => setPostValue(e.target.value)}
        placeholder="무슨 생각을 하고 계신가요?"
        className="h-100 w-full resize-none rounded-8 border border-gray-30 p-12 text-14-400 text-gray-50"
      />
      <div className="mt-8 flex justify-between">
        <label
          htmlFor="postImage"
          className="flex cursor-pointer items-center gap-4 rounded-8 px-6 hover:bg-gray-20"
        >
          {file ? (
            <span className="text-14-400 text-gray-50">이미지 추가됨 ✅</span>
          ) : (
            <>
              <img src="src/assets/icons/image.svg" className="h-16 w-16" />
              <p className="text-14-400 text-gray-50">이미지 추가</p>
            </>
          )}
        </label>
        <input
          id="postImage"
          type="file"
          onChange={handleFileChange}
          className="hidden cursor-pointer"
        />
        <span>
          <Button text="게시하기" size="small" onClick={onSubmit} />
        </span>
      </div>
    </div>
  );
};

export default PostForm;
