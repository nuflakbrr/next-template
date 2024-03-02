export const formatCurrency = (
  price: number | string,
  option: {
    currency?: 'IDR' | 'USD';
    notation?: Intl.NumberFormatOptions['notation'];
  } = {},
) => {
  const { currency = 'IDR', notation = 'standard' } = option;

  const numericPrice = typeof price === 'string' ? parseFloat(price) : price;

  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency,
    notation,
  }).format(numericPrice);
};
