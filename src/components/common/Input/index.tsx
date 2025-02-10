import { UseFormRegisterReturn } from 'react-hook-form';

type InputProps = {
  type: string;
  name: string;
  label: string;
  errorMessage?: string | boolean;
  register?: UseFormRegisterReturn;
  placeholder: string;
};

const Input = ({
  type,
  name,
  label,
  errorMessage,
  register,
  placeholder,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-4">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        {...register}
        placeholder={placeholder}
        className="h-42 w-full rounded-4 border border-gray-30 p-8 pl-12 text-16-400"
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default Input;
