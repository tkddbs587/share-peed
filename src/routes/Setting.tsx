import Button from '@/components/common/Button';
import { auth, storage } from '@/firebase';
import { updateProfile } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Setting = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const [avatar, setAvatar] = useState(user?.photoURL);

  const onLogout = async () => {
    const confirmLogout = confirm('정말 로그아웃 하시겠습니까?');
    if (confirmLogout) {
      await auth.signOut();
      navigate('/sign-in');
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!user) return;
    if (files && files.length === 1) {
      const file = files[0];
      const locationRef = ref(storage, `avatars/${user.uid}`);
      const result = await uploadBytes(locationRef, file);
      const avatarUrl = await getDownloadURL(result.ref);
      setAvatar(avatarUrl);
      await updateProfile(user, { photoURL: avatarUrl });
    }
  };

  return (
    <>
      <div className="mx-16 flex flex-col items-center gap-24 py-200 md:mx-auto">
        <h1 className="text-24-700">프로필 설정</h1>
        <div className="flex h-200 w-full max-w-448 flex-col items-center gap-24 rounded-4 border border-gray-30 bg-white p-24 shadow-md">
          <label
            htmlFor="avatar"
            className="relative flex h-100 w-100 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-black hover:opacity-90"
          >
            {!avatar && (
              <img
                src="src/assets/icons/camera.svg"
                alt="카메라"
                className="absolute"
              />
            )}
            {avatar ? (
              <img src={avatar} className="w-full cursor-pointer" />
            ) : null}
          </label>
          <input
            onChange={handleFileChange}
            id="avatar"
            type="file"
            className="hidden cursor-pointer"
          />
          <span className="text-18-500 text-gray-70">{user?.displayName}</span>
        </div>

        <div className="w-full max-w-448">
          <Button onClick={onLogout} text="로그아웃" variant="secondary" />
        </div>
      </div>
    </>
  );
};

export default Setting;
