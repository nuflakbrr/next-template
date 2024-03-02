'use client';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { ZodError } from 'zod';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';

import MaxWidthWrapper from '@/layouts/MaxWidthWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { cn } from '@/lib/utils';
import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from '@/lib/validators/account-credentials-validatior';
import { trpc } from '@/trpc/client';

const ContainerRegister: FC = () => {
  const router = useRouter();

  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const { mutate, isLoading } = trpc.auth.createPayloadUser.useMutation({
    onError: (err) => {
      if (err.data?.code === 'CONFLICT') {
        toast({
          description:
            'Alamat Email ini sudah digunakan. Silahkan masuk ke akun Anda!',
          variant: 'destructive',
        });
        return;
      }

      if (err instanceof ZodError) {
        toast({
          description: err.issues[0].message,
        });
        return;
      }

      toast({
        description: 'Oops! Terjadi kesalahan. Silakan coba lagi.',
        variant: 'destructive',
      });
    },
    onSuccess: ({ sentToEmail }) => {
      toast({
        title: 'Email verifikasi dikirim ke:',
        description: `${sentToEmail}.`,
        action: <ToastAction altText="Tutup">Tutup</ToastAction>,
      });
      router.push('/verify-email?to=' + sentToEmail);
    },
  });

  const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
    mutate({ email, password });
  };

  return (
    <MaxWidthWrapper className="mt-6">
      <section className="py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-10 lg:mb-0 w-full px-4 mx-5 lg:w-1/2">
            <img
              src="/assets/svg/undraw_register.svg"
              loading="lazy"
              alt="Hero Illustration"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="w-full px-4 mx-5 lg:w-1/2">
            <div className="flex items-center justify-center mb-5">
              <h1 className="font-blue-500 font-semibold text-2xl lg:text-3xl text-center">
                Daftar Akun Baru!
              </h1>
            </div>

            <form
              className="bg-white rounded-lg shadow-lg p-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-3">
                <Label htmlFor="email" className="block text-slate-600 mb-2">
                  Email
                </Label>

                <Input
                  {...register('email')}
                  type="email"
                  className={cn(
                    'w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500/70',
                    { 'focus-visible:ring-red-500': errors.email },
                  )}
                  placeholder="Masukkan email"
                  required
                />

                {errors?.email && (
                  <p className="text-sm text-red-500 mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="mb-3">
                <Label htmlFor="password" className="block text-slate-600 mb-2">
                  Kata Sandi
                </Label>

                <Input
                  {...register('password')}
                  type="password"
                  className={cn(
                    'w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500/70',
                    { 'focus-visible:ring-red-500': errors.password },
                  )}
                  placeholder="Masukkan kata sandi"
                  required
                />

                {errors?.password && (
                  <p className="text-sm text-red-500 mt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="mb-3">
                <Button
                  type="submit"
                  disabled={isLoading ? true : false}
                  className={cn(
                    'w-full transition duration-300 ease-in-out mt-3',
                    isLoading ? 'cursor-not-allowed' : 'cursor-pointer',
                  )}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin h-4 w-4 text-zinc-300 mr-1" />
                      Memuat...
                    </>
                  ) : (
                    'Daftar'
                  )}
                </Button>
              </div>
            </form>

            <div className="flex items-center justify-center mt-5">
              <p className="text-slate-600">
                Sudah mempunyai akun?
                <Link
                  href="/login"
                  className={buttonVariants({ variant: 'link' })}
                >
                  Masuk
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default ContainerRegister;
