export const isValidEmail = (email) => {
  if (!email || typeof email !== 'string') return false;
  // Basic RFC 5322-ish regex (safe for common validation)
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return re.test(email.trim());
};
