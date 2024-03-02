import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';

export const useAuth = () => {
  const router = useRouter();

  const { toast } = useToast();

  const signOut = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`,
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (!res.ok) throw new Error();

      toast({
        description: 'Berhasil keluar! Sampai jumpa!',
      });

      router.push('/login');
      router.refresh();
    } catch (err) {
      toast({
        description: 'Oops! Tidak dapat keluar, silahkan coba lagi.',
        variant: 'destructive',
      });
    }
  };

  return { signOut };
};
