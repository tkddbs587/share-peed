import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex flex-col items-center py-200">
      <h1 className="mb-8 text-24-700">회원가입</h1>
      <h2 className="mb-32 text-16-400 text-gray-60">
        새로운 계정을 만들어보세요
      </h2>
      <form className="w-448 rounded-8 border border-gray-30">
        <div className="flex flex-col gap-24 p-24">
          <Input
            name="nickname"
            label="닉네임"
            type="text"
            placeholder="닉네임을 입력해주세요."
          />
          <Input
            name="email"
            label="이메일"
            type="email"
            placeholder="이메일을 입력해주세요."
          />

          <Input
            name="password"
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <Input
            name="password-check"
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <Button text="회원가입" />
        </div>
      </form>
      <footer className="mt-32 flex gap-8">
        <p className="text-14-400 text-gray-60">이미 계정이 있으신가요?</p>
        <Link to="/sign-in" className="text-14-500">
          로그인
        </Link>
      </footer>
    </div>
  );
};

export default SignUp;
