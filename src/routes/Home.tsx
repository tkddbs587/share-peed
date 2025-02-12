import Button from '@/components/common/Button';

const Home = () => {
  return (
    <div className="mx-16 py-16 md:mx-auto">
      <div className="rounded-8 border border-gray-30 p-24">
        <textarea
          placeholder="무슨 생각을 하고 계신가요?"
          className="h-100 w-full resize-none rounded-8 border border-gray-30 p-12 text-14-400 text-gray-50"
        />
        <div className="mt-8 flex justify-between">
          <div className="flex items-center gap-4">
            <img src="src/assets/icons/image.svg" className="h-16 w-16" />
            <p className="text-14-400 text-gray-50">이미지 추가</p>
          </div>
          <span className="">
            <Button text="게시하기" size="small" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
