import { errorMessages } from '@/constants/errorMessage';
import { auth } from '@/firebase';
import Button from '@components/common/Button';

import Input from '@components/common/Input';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

type SignInForm = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<SignInForm>({
    mode: 'onChange',
  });

  const onSubmit = async (data: SignInForm) => {
    const { email, password } = data;
    try {
      setError('');
      if (isLoading) return;
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (e) {
      if (e instanceof FirebaseError) {
        if (e.code in errorMessages) {
          setError(errorMessages[e.code]);
        }
        console.log(e.code, ':', e.message);
      }
    } finally {
      reset();
    }
  };

  return (
    <div className="flex flex-col items-center py-200">
      <h1 className="mb-8 text-24-700">로그인</h1>
      <h2 className="mb-32 text-16-400 text-gray-60">
        계정에 로그인하여 시작하세요
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-448 rounded-8 border border-gray-30"
      >
        <div className="flex flex-col gap-24 p-24">
          <Input
            type="email"
            name="email"
            label="이메일"
            errorMessage={errors.email?.message}
            register={register('email', {
              required: true,
              pattern: {
                value: /^\S+@\S+$/i,
                message: '이메일 형식에 맞게 입력해주세요.',
              },
            })}
            placeholder="이메일을 입력해주세요."
          />

          <Input
            type="password"
            name="password"
            label="비밀번호"
            errorMessage={errors.password?.message}
            register={register('password', {
              required: true,
              minLength: {
                value: 8,
                message: '비밀번호는 8자 이상 입력해주세요.',
              },
            })}
            placeholder="비밀번호를 입력해주세요."
          />
          {isLoading ? <span>Loding...</span> : <Button text="로그인" />}
          {error && <span className="text-red-500">{error}</span>}
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
