'use client';
import { FC } from 'react';
import Link from 'next/link';

import MaxWidthWrapper from '@/layouts/MaxWidthWrapper';
import { Button, buttonVariants } from '@/components/ui/button';

const Hero: FC = () => {
  return (
    <MaxWidthWrapper className="mt-6">
      <section className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight capitalize text-gray-900 sm:text-6xl">
          Tempat belanja <span className="text-blue-600">aset digital</span>{' '}
          anti ribet dengan kualitas tinggi!
        </h1>

        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Selamat datang di Tiba Tiba Store. Setiap aset di platform kami
          diverifikasi oleh tim kami untuk memastikan standar kualitas terbaik
          kami.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()}>
            Lihat Produk Kami
          </Link>
          <Button variant="ghost">Standar Kualitas Kami &rarr;</Button>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default Hero;
