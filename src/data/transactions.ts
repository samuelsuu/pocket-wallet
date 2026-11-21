// Finished. Amounts are whole naira: positive is money in, negative is money spent.
export type Category = 'Income' | 'Food' | 'Transport' | 'Bills' | 'Fun';

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: Category;
  /** YYYY-MM-DD */
  date: string;
}

export const SPENDING_CATEGORIES: Category[] = ['Food', 'Transport', 'Bills', 'Fun'];

export const STARTING_TRANSACTIONS: Transaction[] = [
  { id: 't5', title: 'Lunch with Tolu', amount: -6200, category: 'Food', date: '2026-11-08' },
  { id: 't4', title: 'Data bundle', amount: -5000, category: 'Bills', date: '2026-11-06' },
  { id: 't3', title: 'Bus fare', amount: -2400, category: 'Transport', date: '2026-11-04' },
  { id: 't2', title: 'Groceries', amount: -18500, category: 'Food', date: '2026-11-03' },
  { id: 't1', title: 'Salary', amount: 150000, category: 'Income', date: '2026-11-01' },
];
