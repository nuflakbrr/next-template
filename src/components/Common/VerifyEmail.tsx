'use client';
import { Loader2, XCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '../ui/button';
import { trpc } from '@/trpc/client';

interface VerifyEmailProps {
  token: string;
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const { data, isLoading, isError } = trpc.auth.verifyEmail.useQuery({
    token,
  });

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-2">
        <XCircle className="h-14 w-14 text-red-600" />
        <h3 className="font-semibold text-2xl">Oops! Terjadi kesalahan.</h3>
        <p className="text-muted-foreground text-sm">
          Token ini tidak valid atau mungkin sudah habis masa berlakunya.
          Silakan coba lagi.
        </p>
      </div>
    );
  }

  if (data?.success) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative mb-4 h-60 w-60 text-muted-foreground">
          <Image
            src="/assets/svg/undraw_email_opened.svg"
            fill
            alt="Email telah dikirim"
          />
        </div>

        <h3 className="font-semibold text-2xl">Sudah Selesai!</h3>
        <p className="text-muted-foreground text-center mt-1">
          Terima kasih telah memverifikasi Email Anda.
        </p>
        <Link className={buttonVariants({ className: 'mt-4' })} href="/login">
          Masuk
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="animate-spin h-14 w-14 text-zinc-300" />
        <h3 className="font-semibold text-2xl">Sedang Memverifikasi...</h3>
        <p className="text-muted-foreground text-sm">
          Ini tidak akan memakan waktu lama.
        </p>
      </div>
    );
  }
};

export default VerifyEmail;
