import { Post } from './TimeLine';

const UserPost = ({
  id,
  userId,
  username,
  photo,
  content,
  avatarUrl,
}: Post) => {
  return (
    <div className="mt-16 flex flex-col gap-16 rounded-8 border border-gray-30 p-24">
      <div className="flex gap-12">
        <img src={avatarUrl} className="h-40 w-40 rounded-full" />
        <span className="text-16-400">{username}</span>
      </div>
      <p className="text-16-400">{content}</p>
      {photo ? <img src={photo} className="h-192 w-full rounded-8" /> : null}
      <div className="flex gap-16">
        {/** to do 좋아요 개수 DB 저장해서 불러오기 */}
        <img src="/src/assets/icons/heart.svg" />
        {/** to do 댓글 개수 DB 저장해서 불러오기, 클릭 시 댓글 목록 모달 띄우기*/}
        <img src="/src/assets/icons/comment.svg" />
        {/** to do 공유 기능 알아보기 */}
        <img src="/src/assets/icons/share.svg" />
      </div>
    </div>
  );
};

export default UserPost;
