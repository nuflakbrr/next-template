'use client';
import { FC, useEffect, useRef, useState } from 'react';

import { PRODUCT_CATEGORIES } from '@/config';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import NavItem from './NavItem';

const NavItems: FC = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
      }
    };

    document.addEventListener('keydown', handler);

    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((_x, _i) => {
        const handleOpen = () =>
          activeIndex === _i ? setActiveIndex(null) : setActiveIndex(_i);

        const isOpen = _i === activeIndex;

        return (
          <NavItem
            category={_x}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={_x.value}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
