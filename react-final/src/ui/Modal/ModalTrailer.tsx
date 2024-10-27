import { FC } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

import CloseSvg from '../../assets/close.svg?react';

import './Modal.css';

interface IModalProps {
  visible: boolean;
  handleSetVisibility: () => void;
  trailerId: string;
  poster: string;
}

function Example(id: string) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube videoId={id} opts={opts} onReady={onPlayerReady} />;
}

export const ModalTrailer: FC<IModalProps> = ({
  visible,
  handleSetVisibility,
  trailerId,
  poster,
}) => {
  return (
    <div className={visible ? 'overlay visible' : 'overlay invisible'}>
      <div className='modal modal_trailer'>
        <button className='button-modal-close' onClick={handleSetVisibility}>
          <CloseSvg width={22} height={22} />
        </button>
        <div className='modal__content'>{Example(trailerId)}</div>
      </div>
    </div>
  );
};
