import { NAV_OPTIONS } from '../constants/navOptions';
import NavOption from './NavOption';

const Navigation = () => {
  return (
    <footer className="fixed bottom-0 flex w-full items-end justify-between bg-[#333236] px-50 py-12">
      {NAV_OPTIONS.map((option) => (
        <NavOption {...option} key={option.id} />
      ))}
    </footer>
  );
};

export default Navigation;
