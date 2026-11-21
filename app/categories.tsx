import { StyleSheet, Text, View } from 'react-native';

// Issue #4: Spending by category. Read the issue in README.md (or in DevQuest) before you start.
export default function CategoriesScreen() {
  // TODO: total spent in each category, biggest first, with its share of all spending.
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Spending by category</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16, gap: 12 },
  title: { fontSize: 20, fontWeight: '600' },
});
