'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import pauseIcon from '~/public/images/icons/pause.svg';
import playIcon from '~/public/images/icons/play.svg';
import { Box } from '@/lib/ui';

export function Music() {
  const [isPlay, setIsPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const audioHandle = () => {
    if (audioRef.current) {
      isPlay ? audioRef.current.pause() : audioRef.current.play();
      setIsPlay(!isPlay);
    }
  };

  return (
    <Box>
      <Box onClick={audioHandle}>
        <audio ref={audioRef} autoPlay loop>
          <source src={`audio/ambient.mp3`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <Image
          src={isPlay ? pauseIcon : playIcon}
          alt={isPlay ? 'Pause icon' : 'Play icon'}
          width={18}
          height={18}
        />
      </Box>
    </Box>
  );
}
