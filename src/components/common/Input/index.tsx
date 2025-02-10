type InputProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
};

const Input = ({ name, label, type, placeholder }: InputProps) => {
  return (
    <div className="flex flex-col gap-4">
      <label>{label}</label>
      <input
        name={name}
        className="h-42 w-full rounded-4 border border-gray-30 p-8 pl-12 text-16-400"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
