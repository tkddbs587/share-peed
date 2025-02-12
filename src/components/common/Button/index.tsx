type ButtonProps = {
  text: string;
  buttonStyle?: string;
  onClick?: () => void;
};

const Button = ({ text, buttonStyle, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${buttonStyle} w-full rounded-4 p-13 text-14-400 text-white`}
    >
      {text}
    </button>
  );
};

export default Button;
