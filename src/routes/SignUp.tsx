import Button from '@components/common/Button';
import Input from '@components/common/Input';
import { auth } from '../firebase';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { useState } from 'react';
import { errorMessages } from '@/constants/errorMessage';

type SignUpForm = {
  nickname: string;
  email: string;
  password: string;
  passwordCheck: string;
};

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors, isLoading },
  } = useForm<SignUpForm>({
    mode: 'onChange',
  });

  const onSubmit = async (data: SignUpForm) => {
    const { email, password, nickname } = data;
    try {
      setError('');
      if (isLoading) return;
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(credentials.user, {
        displayName: nickname,
      });
      navigate('/');
    } catch (e) {
      if (e instanceof FirebaseError) {
        if (e.code in errorMessages) {
          setError(errorMessages[e.code]);
        }
        console.log(e.code, ':', error);
      }
    } finally {
      reset();
    }
  };

  return (
    <div className="flex flex-col items-center py-200">
      <h1 className="mb-8 text-24-700">회원가입</h1>
      <h2 className="mb-32 text-16-400 text-gray-60">
        새로운 계정을 만들어보세요
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-448 rounded-8 border border-gray-30"
      >
        <div className="flex flex-col gap-24 p-24">
          <Input
            type="text"
            name="nickname"
            label="닉네임"
            errorMessage={errors.nickname?.message}
            register={register('nickname', {
              required: true,
              minLength: {
                value: 2,
                message: '닉네임은 2글자 이상이어야 합니다.',
              },
            })}
            placeholder="닉네임을 입력해주세요."
          />
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
          <Input
            type="password"
            name="passwordCheck"
            label="비밀번호 확인"
            errorMessage={
              errors.passwordCheck?.message ||
              (watch('password') !== watch('passwordCheck') &&
                '비밀번호가 일치하지 않습니다.')
            }
            register={register('passwordCheck', {
              required: true,
              minLength: 8,
            })}
            placeholder="비밀번호를 입력해주세요."
          />
          {isLoading ? <span>Loding...</span> : <Button text="회원가입" />}
          {error && <span className="text-red-500">{error}</span>}
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
