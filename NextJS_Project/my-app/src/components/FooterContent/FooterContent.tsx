import Image from 'next/image';

import './FooterContent.css';

export const FooterContent = () => {
  return (
    <div className="footer__content">
      <div className="company-description">
        <div className="company-name">LLC «Мультимедиа Визион»</div>
        <div className="company-copyright">
          <span className="container-logo">
            <Image src={'../../assets/copyright.svg'} alt="#" />
          </span>
          <span className="company-copyright__text">Все права защищены</span>
        </div>
      </div>
      <div className="socials-list">
        <span className="socials-list__item">
          <Image src={'../../assets/vk.svg'} alt="#" />
        </span>
        <span className="socials-list__item youtube-logo">
          <Image src={'../../assets/youtube.svg'} alt="#" />
        </span>
        <span className="socials-list__item ok-logo">
          <Image src={'../../assets/ok.svg'} alt="#" />
        </span>
        <span className="socials-list__item">
          <Image src={'../../assets/telegram.svg'} alt="#" />
        </span>
      </div>
    </div>
  );
};
