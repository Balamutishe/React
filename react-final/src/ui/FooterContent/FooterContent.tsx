import CopyRightLogo from '../../assets/copyright.svg?react';
import VkLogo from '../../assets/vk.svg?react';
import OkLogo from '../../assets/ok.svg?react';
import YouTubeLogo from '../../assets/youtube.svg?react';
import TelegamLogo from '../../assets/telegram.svg?react';

import './FooterContent.css';

export const FooterContent = () => {
  return (
    <div className='footer__content'>
      <div className='company-description'>
        <div className='company-name'>LLC «Мультимедиа Визион»</div>
        <div className='company-copyright'>
          <span className='container-logo'>
            <CopyRightLogo />
          </span>
          <span className='company-copyright__text'>Все права защищены</span>
        </div>
      </div>
      <div className='socials-list'>
        <span className='socials-list__item'>
          <VkLogo />
        </span>
        <span className='socials-list__item youtube-logo'>
          <YouTubeLogo />
        </span>
        <span className='socials-list__item ok-logo'>
          <OkLogo />
        </span>
        <span className='socials-list__item'>
          <TelegamLogo />
        </span>
      </div>
    </div>
  );
};
