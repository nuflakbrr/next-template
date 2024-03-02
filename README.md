## Nextjs Typescript With Payload CMS Template (Include Tailwindcss, Customize ESLint Rules)

Ini adalah proyek [Next.js](https://nextjs.org/) di-bootstrap dengan [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Teknologi Yang Digunakan

- [Next.js (Typescript)](https://nextjs.org/)
- [MongoDB](https://mongodb.com/)
- [Payload CMS](https://payloadcms.com/)
- [TRPC](https://trpc.io/)
- [React Query](https://tanstack.com/query/v3/)
- [Express](https://expressjs.com/)
- [Resend](https://resend.com/)
- [React Email](https://react.email/)
- [React Hook Form](https://react-hook-form.com/)
- [Nodemailer](https://nodemailer.com/)
- [Zod](https://zod.dev/)
- [Tailwindcss](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)

## Fitur

Fitur yang terdapat pada templat proyek ini adalah:

- Proyek Arsitektur.
- Authentikasi.
- Kustomisasi `React Hooks`.
- Beberapa fungsi kustom yang sering [Saya](https://github.com/nuflakbrr) pakai.

### Proyek Arsitektur

Terdapat beberapa poin penting terkait bagaimana menjalankan proyek arsitektur yang benar. Untuk studi kasus kali ini, Saya telah membuatkan sebuah templat proyek kosong yang sudah Saya kustomisasi yang sekiranya sudah mengimplementasi bagaimana cara mengatur proyek arsitektur yang baik agar terlihat rapi.

```
/
├── public/
├── src/
│   └── app/
│   │   └── (auth)/
│   │   └── api/
│   │   │   └── trpc/
│   │   │   │   └── [trpc]/
│   │   │   │       └── route.ts
│   │   │   └── hello.ts/
│   │   └── favicon.ico
│   │   └── globals.css
│   │   └── layout.tsx
│   │   └── page.tsx
│   └── collections/
│   └── components/
│   │   └── Common/
│   │   │   └── emails/
│   │   │   └── Cart.tsx
│   │   │   └── CustomIcons.tsx
│   │   │   └── CustomLink.tsx
│   │   │   └── Icons.tsx
│   │   │   └── Providers.tsx
│   │   │   └── ScrollToTop.tsx
│   │   │   └── VerifyEmail.tsx
│   │   └── Containers/
│   │   │   └── Auth/
│   │   │   │   └── Login.tsx
│   │   │   │   └── Register.tsx
│   │   │   └── Home/
│   │   │       └── components/
│   │   │       └── Home.tsx
│   │   └── Mixins/
│   │   │   └── Navbar/
│   │   │   └── Footer.tsx
│   │   │   └── UserAccountNav.tsx
│   │   └── ui/
│   │   └── README.md
│   └── config/
│   └── data/
│   └── hooks/
│   │   └── useAuth.ts
│   │   └── useOnClickOutside.ts
│   └── interfaces/
│   └── layouts/
│   └── lib/
│   │   └── validators/
│   │   └── bindingState.ts
│   │   └── formatCurrency.ts
│   │   └── formatLocalTime.ts
│   │   └── payload-utils.ts
│   │   └── toastNotify.ts
│   │   └── utils.ts
│   └── trpc/
│   └── get-payload.ts
│   └── next-utils.ts
│   └── payload-types.ts
│   └── payload.config.ts
│   └── server.ts
└── .env.example
└── .eslintrc.json
└── .gitignore
└── components.json
└── next-env.d.ts
└── next.config.mjs
└── nodemon.json
└── package-lock.json
└── package.json
└── postcss.config.js
└── README.md
└── tailwind.config.ts
└── tsconfig.json
└── tsconfig.server.json
```

#### Folder Common

Folder `Common` terletak pada `/src/components/`. Lalu didalamnya berisikan apa saja? Folder `Common` Berisikan komponen-komponen kecil, seperti: tombol, dropdown, dll.

#### Folder Mixins

Folder `Mixins` terletak pada `/src/components/`. Lalu didalamnya berisikan apa saja? Folder `Mixins` Berisikan komponen-komponen yang merupakan gabungan dari komponen-komponen kecil dari folder `Common`. Seperti: navbar (yang berisi beberapa hal umum seperti tombol, dropdown, dll).

#### Folder Containers

Folder `Containers` terletak pada `/src/components/`. Lalu didalamnya berisikan apa saja? Folder `Containers` Berisikan kombinasi folder `Common` dan halaman itu sendiri yang membentuk 1 halaman. 1 halaman 1 folder `Containers` agar tetap rapi.

Jika pada 1 container memiliki beberapa section, maka Anda harus memisahkan dan menaruhnya di dalam folder `components` namun masih tetap dalam 1 folder `Containers`. Seperti: `/src/components/Containers/Home/components`.

### Authentikasi

Pada templat proyek ini sudah menggunakan authentikasi bawaan [Payload CMS](https://payloadcms.com/). Akses path url `/admin` untuk membuat akun pertama / akun admin. Lalu kembali ke halaman `/` dan akses halaman `/register` untuk mendaftarkan akun baru. Lalu untuk halaman `/login` adalah halaman untuk login akun yang baru saja dibuat setelah akun pertama kali dibuat (akun admin).

### Kustomisasi React Hooks

Anda dapat menggunakan, serta menambahkan kustom `React Hooks` Anda sendiri pada folder `/src/hooks` yang telah disediakan.

## Mulai Sekarang

Pertama, buka terminal lalu eksekusi perintah berikut:

```bash
npx degit https://github.com/nuflakbrr/next-template.git <nama_proyek>
```

atau jika Anda ingin menggunakan versi `Javascipt`, eksekusi perintah berikut:

```bash
npx degit nuflakbrr/next-template#javascript-version <nama_proyek>
```

Kedua, install `depedencies` didalam proyek yang sudah Anda klona:

```bash
npm install
# or
yarn install
```

Ketiga, jalankan server pengembangan:

```bash
npm run dev
# or
yarn dev
```

Keempat, buka [http://localhost:3000](http://localhost:3000) pada browser Anda dan lihat hasilnya.

Anda dapat mulai mengedit halaman dengan memodifikasi `/src/components/Containers/Home/Home.tsx`. Halaman diperbarui secara otomatis saat Anda mengedit file.

## Rute API

[Rute API](https://nextjs.org/docs/api-routes/introduction) dapat diakses di [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Titik akhir ini dapat diedit di `/src/pages/api/hello.ts`.

Folder `/src/pages/api` dipetakan ke `/api/*`. File dalam direktori ini diperlakukan sebagai [Rute API](https://nextjs.org/docs/api-routes/introduction) bukannya Bereaksi halaman.

## Pelajari Lebih

Untuk mempelajari lebih lanjut tentang Next.js, lihat referensi berikut:

- [Dokumentasi Next.js](https://nextjs.org/docs) - pelajari tentang fitur dan API Next.js.
- [Pelajari Next.js](https://nextjs.org/learn) - tutorial Next.js yang interaktif.

Anda dapat memeriksa [GitHub Repositori Next.js](https://github.com/vercel/next.js/) - umpan balik dan kontribusi Anda dipersilakan!

## Publikasi di Vercel

Jalur paling mudah untuk publikasi aplikasi Next.js Anda menggunakan [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dari pencipta Next.js.

Lihat [dokumentasi publikasi Next.js kami](https://nextjs.org/docs/deployment) untuk lebih lengkap.

## Author Templat Ini

Nama kontributor dan info kontak,

Naufal Akbar Nugroho  
[@nuflakbrr](https://github.com/nuflakbrr)
[@kbrnugroho](https://instagram.com/kbrnugroho)
