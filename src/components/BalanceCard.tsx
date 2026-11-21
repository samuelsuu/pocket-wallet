import { StyleSheet, Text, View } from 'react-native';

// Issue #1: Balance card. Read the issue in README.md (or in DevQuest) before you start.
export function BalanceCard() {
  // TODO: read the transactions with useWallet() and show the balance, money in and money out.
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Balance</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#0F766E', borderRadius: 16, padding: 20, gap: 6 },
  label: { color: '#CCFBF1' },
});
