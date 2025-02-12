import clsx from 'clsx';

type ButtonProps = {
  size?: 'small' | 'default';
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

const Button = ({
  size = 'default',
  text,
  onClick,
  variant = 'primary',
}: ButtonProps) => {
  const buttonStyle = clsx(
    'rounded-4 text-14-400 text-white w-full',
    {
      'bg-blue-500': variant === 'primary',
      'bg-red-500': variant === 'secondary',
    },
    {
      'px-12 py-8 rounded-8': size === 'small',
      'p-13': size == 'default',
    },
  );

  return (
    <button onClick={onClick} className={buttonStyle}>
      {text}
    </button>
  );
};

export default Button;
