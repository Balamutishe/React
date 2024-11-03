import { FC } from 'react';
import ReactPlayer from 'react-player';
import PlayIcon from '../../assets/player-button.svg?react';

interface IPlayerProps {
  url: string;
  poster: string;
}

import './Player.css';

export const Player: FC<IPlayerProps> = ({ url, poster }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        light={poster}
        playIcon={<PlayIcon />}
        width="100%"
        height="100%"
      />
    </div>
  );
};
