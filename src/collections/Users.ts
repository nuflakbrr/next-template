import { CollectionConfig } from 'payload/types';

import { PrimaryActionEmailHtml } from '../components/Common/emails/PrimaryActionEmail';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
        return PrimaryActionEmailHtml({
          actionLabel: 'verifikasi akun Anda',
          buttonText: 'Verifikasi Akun',
          href: `${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}`,
        });
      },
    },
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'role',
      defaultValue: 'user',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
    },
  ],
};
