import { FC, ReactNode } from 'react';

interface IInputProps {
  placeholder: string;
  icon?: ReactNode;
}

export const Input: FC<IInputProps> = ({ icon, placeholder }) => {
  return (
    <div className='container-input'>
      {icon}
      <input type='text' placeholder={placeholder} className='input' />
    </div>
  );
};
