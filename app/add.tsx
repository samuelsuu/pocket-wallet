import { StyleSheet, Text, View } from 'react-native';

// Issue #3: Add an expense. Read the issue in README.md (or in DevQuest) before you start.
export default function AddScreen() {
  // TODO: a form with Title, Amount and a category, that adds the expense and goes back to the Wallet tab.
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Add an expense</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16, gap: 12 },
  title: { fontSize: 20, fontWeight: '600' },
});
