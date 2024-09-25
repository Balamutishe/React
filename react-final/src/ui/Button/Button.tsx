import { FC } from 'react';

interface IButtonProps {
  title: string;
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
