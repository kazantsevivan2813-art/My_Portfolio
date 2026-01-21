'use client';

import Image from 'next/image';

import { FlipTilt } from 'react-flip-tilt';

import profilePortrait from '~/public/images/profile-portrait.png';
import Flamingo from '~/public/images/flamingo.png';

import { tclsx } from '@/lib/ui';
import css from '../page.module.css';

export function FlipTiltImage() {
  return (
    <div
      className={tclsx(
        css.profileGridImage,
        'mx-auto aspect-square w-64 lg:w-72',
      )}
    >
      <FlipTilt
        front={
          <Image
            className="rounded-xl"
            src={profilePortrait}
            alt="Profile portrait"
            width={350}
            height={350}
            quality={90}
            placeholder="blur"
          />
        }
        back={
          <Image
            className="rounded-xl"
            src={Flamingo}
            alt="Profile portrait"
            width={350}
            height={350}
            quality={90}
            placeholder="blur"
          />
        }
      />
    </div>
  );
}
