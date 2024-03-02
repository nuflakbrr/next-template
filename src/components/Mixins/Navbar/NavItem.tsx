'use client';
import { FC } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { NavItemProps } from '@/interfaces/NavItemProps';
import { cn } from '@/lib/utils';

const NavItem: FC<NavItemProps> = ({
  category,
  handleOpen,
  isAnyOpen,
  isOpen,
}) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? 'secondary' : 'ghost'}
        >
          {category.label}
          <ChevronDown
            className={cn('h-4 w-4 transition-all text-muted-foreground', {
              '-rotate-180': isOpen,
            })}
          />
        </Button>
      </div>

      {isOpen ? (
        <div
          className={cn(
            'absolute inset-x-0 top-full text-sm text-muted-foreground',
            { 'animate-in fade-in-10 slide-in-from-top-5': !isAnyOpen },
          )}
        >
          <div
            className="absolute inset-0 top-1/2 bg-white shadow"
            aria-hidden={true}
          />

          <div className="relative bg-white">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                  {category.featured.map((_x, _i) => (
                    <div
                      className="group relative text-base sm:text-sm"
                      key={_i}
                    >
                      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                        <Image
                          src={_x.img_src}
                          alt={_x.name}
                          loading="lazy"
                          fill
                          className="object-cover object-center"
                        />
                      </div>

                      <Link
                        href={_x.href}
                        className="mt-6 block font-medium text-gray-900"
                      >
                        {_x.name}
                      </Link>
                      <p className="mt-1" aria-hidden={true}>
                        Belanja Sekarang
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
