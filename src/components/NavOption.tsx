import { Link, useLocation } from 'react-router-dom';
import { NavOptionType } from '../constants/navOptions';
import { useEffect, useState } from 'react';

const NavOption = (option: NavOptionType) => {
  const { img, path, text } = option;
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // 현재 경로와 옵션의 경로가 일치하면 활성화
    setIsActive(location.pathname === path);
  }, [location.pathname, path]);

  return (
    <Link to={path} className="flex flex-col items-center gap-4">
      {img({ color: isActive ? '#3B82F6' : '#6B7280' })}
      <div
        className={`text-12-400 ${isActive ? 'text-blue-500' : 'text-gray-500'}`}
      >
        {text}
      </div>
    </Link>
  );
};

export default NavOption;
