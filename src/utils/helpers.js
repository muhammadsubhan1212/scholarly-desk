export function formatPrice(amount) {
  const value = Number(amount) || 0;
  return `PKR ${value.toLocaleString('en-PK')}`;
}

export function getInitials(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function delay(ms = 600) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}
