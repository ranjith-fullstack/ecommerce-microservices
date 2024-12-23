export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validateCardNumber = (cardNumber) => {
  const cleaned = cardNumber.replace(/\s+/g, '');
  return /^\d{16}$/.test(cleaned);
};

export const validateExpiryDate = (expiry) => {
  const [month, year] = expiry.split('/').map(num => parseInt(num, 10));
  const now = new Date();
  const currentYear = now.getFullYear() % 100;
  const currentMonth = now.getMonth() + 1;

  return (
    month >= 1 &&
    month <= 12 &&
    year >= currentYear &&
    (year > currentYear || month >= currentMonth)
  );
};

export const validateCVV = (cvv) => {
  return /^\d{3,4}$/.test(cvv);
};