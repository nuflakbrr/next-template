export const PRODUCT_CATEGORIES = [
  {
    label: 'UI Kits',
    value: 'ui_kits' as const,
    featured: [
      {
        name: 'Editor Picks',
        href: '#',
        img_src: '/assets/img/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'New Arrivals',
        href: '#',
        img_src: '/assets/img/nav/ui-kits/blue.jpg',
      },
      {
        name: 'Best Sellers',
        href: '#',
        img_src: '/assets/img/nav/ui-kits/purple.jpg',
      },
    ],
  },
  {
    label: 'Icons',
    value: 'icons' as const,
    featured: [
      {
        name: 'Favorite Icon Picks',
        href: '#',
        img_src: '/assets/img/nav/icons/picks.jpg',
      },
      {
        name: 'New Arrivals',
        href: '#',
        img_src: '/assets/img/nav/icons/new.jpg',
      },
      {
        name: 'Best Sellers Icons',
        href: '#',
        img_src: '/assets/img/nav/icons/bestsellers.jpg',
      },
    ],
  },
];
