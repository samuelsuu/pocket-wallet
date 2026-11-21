// Finished. formatNaira(117900) is "₦117,900"; formatNaira(-6200) is "-₦6,200".
export function formatNaira(amount: number): string {
  const digits = String(Math.round(Math.abs(amount))).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (amount < 0 ? '-₦' : '₦') + digits;
}

/** With a sign in front of money in too: "+₦150,000" or "-₦6,200". */
export function formatSigned(amount: number): string {
  return amount > 0 ? '+' + formatNaira(amount) : formatNaira(amount);
}
