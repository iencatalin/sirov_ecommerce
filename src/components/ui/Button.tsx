'use client';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className='bg-brand-accent text-slate-50 py-1 px-3 shadow rounded-md cursor-pointer hover:bg-brand-accent/90 disabled:opacity-50 disabled:cursor-not-allowed'
    >
      {children}
    </button>
  );
};

export default Button;
