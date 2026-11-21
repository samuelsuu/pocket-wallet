import { Tabs } from 'expo-router';
import { WalletProvider } from '../src/wallet/WalletContext';

// Finished. Every screen reads the same transactions through WalletProvider (see src/wallet/WalletContext.tsx).
export default function RootLayout() {
  return (
    <WalletProvider>
      <Tabs>
        <Tabs.Screen name="index" options={{ title: 'Wallet' }} />
        <Tabs.Screen name="add" options={{ title: 'Add' }} />
        <Tabs.Screen name="categories" options={{ title: 'Categories' }} />
      </Tabs>
    </WalletProvider>
  );
}
