type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="rounded-4 bg-blue-500 p-13 text-14-400 text-white">
      {text}
    </button>
  );
};

export default Button;
