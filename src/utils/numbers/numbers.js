export const roundNumber = (num, places = 2) =>
  isNaN(num) ? num : +parseFloat(num).toFixed(places);

export const positiveInteger = (value, intParam) =>
  intParam ? parseInt(value < 0 ? value * -1 : value) : value < 0 ? value * -1 : value;

export const currencyFormatter = (param) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'code',
  })
    .format(param)
    .replace('USD', '')
    .trim();
