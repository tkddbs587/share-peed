import Home from '../../public/icons/home.svg?react';
import Message from '../../public/icons/message.svg?react';
import Setting from '../../public/icons/setting.svg?react';

export type NavOptionType = {
  id: string;
  text: string;
  path: string;
  img: ({ color }: { color: string }) => JSX.Element;
};

export const NAV_OPTIONS: NavOptionType[] = [
  {
    id: 'home',
    text: '홈',
    path: '/',
    img: ({ color }) => <Home color={color} />,
  },
  {
    id: 'message',
    text: '메시지',
    path: '/message',
    img: ({ color }) => <Message color={color} />,
  },
  {
    id: 'setting',
    text: '설정',
    path: '/setting',
    img: ({ color }) => <Setting color={color} />,
  },
];
