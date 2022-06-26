export const getFormattedDate = (
  date,
  locale = 'en-GB',
  localeDateOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  },
) => {
  if (!date) {
    return '-';
  }

  try {
    const dateUTC = new Date(date);
    const formattedDate = dateUTC.toLocaleDateString(locale, localeDateOptions);
    return formattedDate === 'Invalid Date' ? '-' : formattedDate;
  } catch (error) {
    return '-';
  }
};
