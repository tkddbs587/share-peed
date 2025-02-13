import { Post } from './TimeLine';

const UserPost = ({ id, userId, username, photo, content }: Post) => {
  return (
    <div className="rounded-8 border border-gray-30 p-24">
      <img className="rounded-full" />
      <span>{username}</span>
      <p>{content}</p>
      {photo ? <img src={photo} className="h-192 w-260" /> : null}
    </div>
  );
};

export default UserPost;
