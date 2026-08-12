import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  label: string;
  id: string;
  type: string;
  disabled?: boolean;
  error?: string;
  registration: UseFormRegisterReturn;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  disabled,
  error,
  registration,
}) => {
  return (
    <div>
      <label htmlFor={id} className='block text-sm font-medium leading-6'>
        {label}
      </label>
      <div className='mt-2'>
        <input
          disabled={disabled}
          required
          id={id}
          autoComplete={id}
          type={type}
          {...registration}
          className={clsx(
            `block w-full rounded-md border border-brand-muted px-1 py-1.5 text-gray-900 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-2 focus:ring-gray-500`,
            disabled && 'opacity-50 cursor-default',
          )}
        />
      </div>
      {error && <p className='mt-1 text-sm text-red-600'>{error}</p>}
    </div>
  );
};

export default Input;
