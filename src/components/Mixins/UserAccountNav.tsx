'use client';
import { FC } from 'react';
import { CircleUserRound } from 'lucide-react';

import { User } from '@/payload-types';
import { useAuth } from '@/hooks/useAuth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const UserAccountNav: FC<User> = ({ email }) => {
  const { signOut } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button variant="ghost" size="sm" className="relative">
          <CircleUserRound className="w-6 h-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white w-60" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5 leading-none">
            <p className="font-medium text-sm text-black">{email}</p>
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* <DropdownMenuItem asChild>
          <Link href='/sell'>Seller Dashboard</Link>
        </DropdownMenuItem> */}

        <DropdownMenuItem onClick={signOut} className="cursor-pointer">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
