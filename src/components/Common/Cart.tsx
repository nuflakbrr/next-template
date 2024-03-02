'use client';
import { FC } from 'react';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { buttonVariants } from '@/components/ui/button';
import { formatCurrency } from '@/lib/formatCurrency';
import Image from 'next/image';

const Cart: FC = () => {
  const itemCount = 0;

  const fee = 10000;

  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart
          className="w-6 h-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden={true}
        />

        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Keranjang (0)</SheetTitle>
        </SheetHeader>

        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              {/* todo: Cart Login */}
              Item Keranjang
            </div>

            <div className="space-y-4 pr-6">
              <Separator />

              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Ongkos Kirim</span>
                  <span>Gratis</span>
                </div>

                <div className="flex">
                  <span className="flex-1">Biaya Transaksi</span>
                  <span>{formatCurrency(fee)}</span>
                </div>

                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>{formatCurrency(fee)}</span>
                </div>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href="/checkout"
                    className={buttonVariants({ className: 'w-full' })}
                  >
                    Lanjutkan Checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div
              className="relative mb-4 w-60 h-60 text-muted-foreground"
              aria-hidden={true}
            >
              <Image
                src="/assets/svg/undraw_empty_cart.svg"
                alt="empty_cart"
                fill
              />
            </div>

            <div className="text-xl font-semibold">
              Oops! Keranjang kamu masih kosong nih!
            </div>

            <SheetTrigger asChild>
              <Link
                href="/products"
                className={buttonVariants({
                  variant: 'link',
                  size: 'sm',
                  className: 'text-sm text-muted-foreground',
                })}
              >
                Lihat produk kami
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
