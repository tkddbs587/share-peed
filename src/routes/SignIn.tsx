import Button from '@components/common/Button';

import Input from '@components/common/Input';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="flex flex-col items-center py-200">
      <h1 className="mb-8 text-24-700">로그인</h1>
      <h2 className="mb-32 text-16-400 text-gray-60">
        계정에 로그인하여 시작하세요
      </h2>
      <form className="w-448 rounded-8 border border-gray-30">
        <div className="flex flex-col gap-24 p-24">
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
          <Button text="로그인" />
        </div>
      </form>
      <footer className="mt-32 flex gap-8">
        <p className="text-14-400 text-gray-60">아직 회원이 아니신가요?</p>
        <Link to="/sign-up" className="text-14-500">
          회원가입
        </Link>
      </footer>
    </div>
  );
};

export default SignIn;
