import { FC } from 'react';
import { cookies } from 'next/headers';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/Common/Icons';
import MaxWidthWrapper from '@/layouts/MaxWidthWrapper';
import Cart from '@/components/Common/Cart';
import { getServerSideUser } from '@/lib/payload-utils';
import NavItems from './NavItems';
import UserAccountNav from '../UserAccountNav';

const Navbar: FC = async () => {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="border-b border-gray-200 relative bg-white">
        <MaxWidthWrapper>
          <div className="flex h-16 items-center">
            {/* todo: Mobile Nav */}

            <div className="ml-4 flex lg:ml-0">
              <Link href="/">
                <Icons.logo className="w-28 h-28 md:w-32 md:h-32" />
              </Link>
            </div>

            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
              <NavItems />
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                {user ? null : (
                  <Link
                    href="/login"
                    className={buttonVariants({ variant: 'ghost' })}
                  >
                    Masuk
                  </Link>
                )}

                {user ? null : (
                  <span className="h-6 w-px bg-gray-200" aria-hidden={true} />
                )}

                {user ? (
                  <UserAccountNav
                    email={user.email}
                    id={user.id}
                    updatedAt={user.updatedAt}
                    createdAt={user.createdAt}
                    password={null}
                  />
                ) : (
                  <Link
                    href="/register"
                    className={buttonVariants({ variant: 'ghost' })}
                  >
                    Daftar
                  </Link>
                )}

                {user ? (
                  <span className="h-6 w-px bg-gray-200" aria-hidden={true} />
                ) : null}

                {user ? null : (
                  <div className="flex lg:ml-6">
                    <span className="h-6 w-px bg-gray-200" aria-hidden={true} />
                  </div>
                )}

                <div className="ml-4 flow-root lg:ml-6">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
