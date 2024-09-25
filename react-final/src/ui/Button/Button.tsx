import { FC, ReactNode } from 'react';

interface IButtonProps {
  title: string | ReactNode;
  variant?: 'default' | 'primary' | 'menu';
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = ({ title, variant, onClick }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {title}
    </button>
  );
};
