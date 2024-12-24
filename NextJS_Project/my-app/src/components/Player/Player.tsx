import { FC } from 'react';
import ReactPlayer from 'react-player';

interface IPlayerProps {
  url: string;
  playingState: boolean;
}

import './Player.css';

export const Player: FC<IPlayerProps> = ({ url, playingState }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        playing={playingState}
        config={{
          youtube: {
            playerVars: {
              showinfo: 1,
              modestbranding: 1,
            },
          },
        }}
      />
    </div>
  );
};
