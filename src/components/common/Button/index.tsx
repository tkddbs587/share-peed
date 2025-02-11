type ButtonProps = {
  text: string;
  buttonStyle?: string;
  onClick?: () => void;
  isLoading?: boolean;
};

const Button = ({ text, buttonStyle, onClick, isLoading }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${buttonStyle} rounded-4 p-13 text-14-400 text-white`}
    >
      {isLoading ? <span>Loding...</span> : text}
    </button>
  );
};

export default Button;
