import { FC } from 'react';

import { MaxWidthWrapper } from '@/interfaces/MaxWidthWrapper';
import { cn } from '@/lib/utils';

const MaxWidthWrapper: FC<MaxWidthWrapper> = ({ className, children }) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
