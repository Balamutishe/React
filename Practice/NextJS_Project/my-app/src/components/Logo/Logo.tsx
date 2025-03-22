import Image from 'next/image';

import './Logo.css';

export const Logo = () => {
  return (
    <div className="logo-container">
      <Image src={'../../assets/header-logo.svg'} alt="#" className="logo" />
    </div>
  );
};
