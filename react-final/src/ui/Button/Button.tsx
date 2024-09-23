import { FC } from 'react';

interface IButtonProps {
  title: string;
  variant?: string;
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = ({ title, variant, onClick }) => {
  return (
    <button className={variant} onClick={onClick}>
      {title}
    </button>
  );
};
