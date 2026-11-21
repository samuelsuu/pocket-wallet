import { createContext, useContext, useState, type ReactNode } from 'react';
import { STARTING_TRANSACTIONS, type Transaction } from '../data/transactions';

// Finished. The one place the transactions live. Any screen or component can call useWallet().

interface Wallet {
  transactions: Transaction[];
  /** Adds a transaction at the top of the list. Amounts are in naira: negative for spending. */
  addTransaction: (t: Omit<Transaction, 'id' | 'date'>) => void;
}

const WalletContext = createContext<Wallet | null>(null);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>(STARTING_TRANSACTIONS);
  const addTransaction: Wallet['addTransaction'] = (t) =>
    setTransactions((list) => [{ ...t, id: String(Date.now()), date: new Date().toISOString().slice(0, 10) }, ...list]);
  return <WalletContext.Provider value={{ transactions, addTransaction }}>{children}</WalletContext.Provider>;
}

export function useWallet(): Wallet {
  const wallet = useContext(WalletContext);
  if (!wallet) throw new Error('useWallet() must be used inside <WalletProvider>.');
  return wallet;
}
