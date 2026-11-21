import { StyleSheet, Text, View } from 'react-native';
import { BalanceCard } from '../src/components/BalanceCard';
import { TransactionList } from '../src/components/TransactionList';
import { useWallet } from '../src/wallet/WalletContext';

// Finished. The Wallet tab: issue #1 builds the balance card, issue #2 the list.
export default function WalletScreen() {
  const { transactions } = useWallet();
  return (
    <View style={styles.screen}>
      <BalanceCard />
      <Text style={styles.count}>{transactions.length + ' transactions'}</Text>
      <TransactionList />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16, gap: 12, backgroundColor: '#F8FAFC' },
  count: { color: '#64748B' },
});
