export function convertToCents(amount: number) {
  return Math.round(amount * 100);
}

export function convertToMYRUnit(amount: number) {
  return amount / 100;
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("ms-MY", {
    style: "currency",
    currency: "MYR",
  }).format(amount);
}