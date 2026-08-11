# Currency Converter (React)

A simple currency converter built with React + Tailwind CSS. Enter an amount,
pick a "From" and "To" currency, and convert using live exchange rates.

## Features

- Convert between any two currencies using live rates
- Swap "From" and "To" currencies with one click
- Left-side illustrative photo + glassmorphism converter card on the right
- Gradient background (no broken/missing image)

## How It Works

1. `useCurrencyInfo(from)` fetches the latest exchange rates for the
   selected "From" currency from the currency API and returns an object like
   `{ inr: 83.1, eur: 0.91, ... }`.
2. `options` is derived from the keys of that object, and passed to both
   `InputBox` dropdowns as the list of selectable currencies.
3. On submit, `convert()` computes `amount * currencyInfo[to]` and updates
   `convertedAmount`.
4. `swap()` swaps `from`/`to` and `amount`/`convertedAmount` so you can
   quickly reverse the conversion.

## Bugs Fixed (for reference)

1. **Both dropdowns showed the same currency (USD twice).**
   The "To" `InputBox` was passed `selectCurrency={from}` instead of
   `selectCurrency={to}` in `App.jsx`.
2. **`InputBox`'s `<select>` wasn't actually controlled.**
   The `value`, `onChange`, and `disabled` props were mistakenly attached to
   the `<p>` label instead of the `<select>` element, so picking a currency
   from the dropdown did nothing.
3. **Wrong type conversion on currency change.**
   `onCurrencyChange` was doing `Number(e.target.value)`, but a currency code
   (e.g. `"usd"`) is a string, not a number.
4. **"From" currency dropdown didn't update state.**
   `onCurrencyChange` on the first `InputBox` called `setAmount(amount)`
   instead of `setFrom(currency)`.
5. **`useCurrencyInfo` used `.then()` chains with no error handling** —
   rewritten with `async/await` inside a `try/catch`, plus a `res.ok` check,
   so a failed request logs an error instead of silently breaking.
