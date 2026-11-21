import { StyleSheet, Text, View } from 'react-native';

// Issue #2: Transaction list. Read the issue in README.md (or in DevQuest) before you start.
export function TransactionList() {
  // TODO: filter buttons (All, Money in, Money out) and a FlatList of the transactions.
  return (
    <View style={styles.list}>
      <Text>Transactions go here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  list: { flex: 1 },
});
