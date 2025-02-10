import { NAV_OPTIONS } from '../constants/navOptions';
import NavOption from './NavOption';

const Navigation = () => {
  return (
    <div className="flex justify-between px-50">
      {NAV_OPTIONS.map((option) => (
        <NavOption {...option} key={option.id} />
      ))}
    </div>
  );
};

export default Navigation;
