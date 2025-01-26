import { NAV_OPTIONS } from '../constants/navOptions';
import NavOption from './NavOption';

const Navigation = () => {
  return (
    <div className="px-50 flex justify-between">
      {NAV_OPTIONS.map((option) => (
        <NavOption {...option} key={option.id} />
      ))}
    </div>
  );
};

export default Navigation;
