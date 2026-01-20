import { createAsComponent } from '../../utils/react';
import { tclsx } from '../../utils/tailwind';
import { tv } from 'tailwind-variants';
import { Box } from '../box';
import Image from 'next/image';
import Flamingo from '~/public/images/flamingo.png';

/*-- Styles --*/

const logo = tv({
  base: 'text-base font-bold text-primary-text',
});

/*-- Main --*/

export type LogoProps = {};

export const Logo = createAsComponent<'div', LogoProps>(function Logo(
  { className, ...rest },
  ref,
) {
  const cn = tclsx(logo(), className);

  return (
    <Box ref={ref} className={cn} {...rest}>
      <Image
        src={Flamingo}
        alt="Flamingo logo"
        width={60}
        height={60}
        className="max-[480px]:h-8 max-[480px]:w-8"
      />
    </Box>
  );
});
