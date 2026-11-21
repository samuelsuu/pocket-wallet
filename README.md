# Pocket wallet

A money tracker phone app: your balance, every transaction, a screen to add what you spend, and where your money goes by category.

**When it's done:** You can see your balance and money in and out, filter your transactions, add an expense in a few taps, and see how much went on food, transport, bills and fun.

A DevQuest team project. Every issue below is built on its own branch, reviewed by a squadmate and merged on GitHub.

## How we work

1. Claim an issue in DevQuest (Squad → Team project) so nobody does the same one.
2. Get the latest code: `git switch main`, then `git pull`.
3. Make your branch: `git switch -c <the issue's branch>`.
4. Build it. Commit as you go: `git add .` then `git commit -m "Describe the change"`.
5. Push your branch: `git push -u origin <the issue's branch>`.
6. On GitHub, open a **pull request** from your branch into `main`. Ask a squadmate to review it.
7. The reviewer reads the changes, leaves a comment or two, and chooses **Approve**.
8. Merge the pull request on GitHub, then press **Check GitHub** in DevQuest.

## Issues

### #1 Balance card

Branch: `balance-card` · Files: `src/components/BalanceCard.tsx`

The card at the top of the Wallet tab shows the balance, the money in and the money out.

1. Open `src/components/BalanceCard.tsx`. Call `useWallet()` (from `../wallet/WalletContext`) to get the `transactions`.
2. Add up the amounts for the balance. Money in is the total of the positive amounts; money out is the total of the negative ones, shown without the minus sign (use `Math.abs`).
3. Show the balance in a big `<Text>` with `formatNaira` from `../lib/money` (it gives `₦117,900`). Under it, two lines in exactly this format: `Money in ₦150,000` and `Money out ₦32,100`.
4. The checker opens the Wallet tab and reads the card. Issue #3 adds expenses, so make sure everything is calculated from `transactions`, never typed in by hand.

### #2 Transaction list

Branch: `transaction-list` · Files: `src/components/TransactionList.tsx`

The Wallet tab lists every transaction with its category and signed amount, with All / Money in / Money out filters.

1. Open `src/components/TransactionList.tsx`. Get the `transactions` with `useWallet()` (from `../wallet/WalletContext`).
2. Show them in a `FlatList` (`keyExtractor={(t) => t.id}`). Each row shows the title, the category, and the amount with `formatSigned` from `../lib/money`, which gives `+₦150,000` or `-₦6,200`.
3. Above the list, add three filter buttons (`Pressable` with a `Text` inside): `All`, `Money in` and `Money out`. Keep the chosen filter in `useState` (starting at All) and only pass the matching transactions to the list: positive amounts for Money in, negative ones for Money out.
4. Show which filter is chosen: give the chosen button `accessibilityState={{ selected: true }}` and a different style.
5. The checker reads the list, then presses Money out and Money in.

### #3 Add an expense

Branch: `add-expense` · Files: `app/add.tsx`

The Add tab has a form for an expense (title, amount, category). Saving adds it to the wallet and goes back to the Wallet tab.

1. Open `app/add.tsx`. Make two `TextInput`s with labels people and the checker can find: `accessibilityLabel="Title"` and `accessibilityLabel="Amount"` (give Amount `keyboardType="numeric"`). Keep each value in `useState`.
2. Add a button for each spending category (`SPENDING_CATEGORIES` from `../src/data/transactions`: Food, Transport, Bills, Fun). Keep the chosen one in state, starting at `Food`, and mark it with `accessibilityState={{ selected: true }}`.
3. Add a `Save` button. When it is pressed, check the form: an empty title (after `.trim()`) shows `Give it a title.`; an amount that isn’t a number greater than 0 shows `Enter an amount greater than 0.` (`Number("abc")` is `NaN`, and `NaN > 0` is false).
4. When the form is fine, call `addTransaction({ title, amount: -Number(amount), category })` from `useWallet()`: spending is negative. Then empty the form and go back to the Wallet tab with `router.navigate("/")` (import `router` from `expo-router`).
5. The checker opens the Add tab, tries an empty title and the amount “abc”, then adds “Suya” for 1500 and checks the Wallet tab says “6 transactions”.

### #4 Spending by category

Branch: `spending-by-category` · Files: `app/categories.tsx`

The Categories tab shows how much was spent in each category, biggest first, with its share of all spending.

1. Open `app/categories.tsx`. Get the `transactions` with `useWallet()` (from `../src/wallet/WalletContext`) and keep only spending (negative amounts).
2. Add up the spending per category. An object works well: `totals[t.category] = (totals[t.category] ?? 0) + Math.abs(t.amount)`.
3. Turn it into a list sorted biggest first, and show one row per category: its name, the total with `formatNaira` (`₦24,700`), and its share of all spending as a whole percentage (`77%`, using `Math.round`). Categories with no spending don’t get a row.
4. With no spending at all, show `No spending yet.` instead of rows.
5. The checker opens the Categories tab and reads the rows: Food ₦24,700 (77%), Bills ₦5,000 (16%), Transport ₦2,400 (7%). Income is never spending, and Fun has nothing yet.
