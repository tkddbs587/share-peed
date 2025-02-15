import PostForm from '@/components/PostForm';
import TimeLine from '@/components/TimeLine';

const Home = () => {
  return (
    <div className="mx-16 pb-120 pt-16 md:mx-auto">
      <PostForm />
      <TimeLine />
    </div>
  );
};

export default Home;
