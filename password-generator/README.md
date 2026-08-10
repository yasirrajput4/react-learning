# Password Generator (React)

A simple React app that creates a random password. You can choose the length, and turn numbers and symbols on or off.

---

## Features

- **Length control** — use a slider to set password length between 6 and 100 characters
- **Numbers toggle** — turn on/off digits (0-9) in the password
- **Symbols toggle** — turn on/off special characters (`!@#$%^&*` etc.)
- **Auto update** — password regenerates automatically whenever length or toggles change
- **Copy button** — copies the password to clipboard with one click, and shows "Copied" as confirmation

---

## What I Learned

### 1. useState

Used to store values that change over time (length, password text, checkbox states). When state changes, the component re-renders.

### 2. useCallback

Used to wrap the `passwordGenerator` and `copyPasswordToClipboard` functions so they are not recreated on every render. They only get recreated when their dependencies (`length`, `numberAllowed`, `charAllowed`) change. This matters because these functions are also used inside `useEffect`.

### 3. useEffect

Runs the password generator automatically whenever `length`, `numberAllowed`, or `charAllowed` changes. This is called a "side effect" — code that runs after the component renders, not during it.

### 4. useRef

Used to get direct access to the password input element in the DOM, so it can be selected (`select()`, `setSelectionRange()`) when copying. Unlike state, changing a ref does not cause a re-render.

### 5. A Common Bug — Wrong Random Index

The original code had this line:

```js
let char = Math.floor(Math.random() * str.length + 1);
```

**Problem:** The `+1` was in the wrong place. It made the index sometimes equal to `str.length`, which is not a valid position in the string. `charAt()` then returned an empty string, so the final password was sometimes shorter than expected.

**Fix:**

```js
let char = Math.floor(Math.random() * str.length);
```

**Lesson:** When picking a random index from a string or array, the valid range is always `0` to `length - 1`. Since `Math.random()` already returns a value between 0 and 1 (never reaching 1), multiplying by `length` is enough — adding `+1` pushes the index out of range.

### 6. Clipboard API

```js
window.navigator.clipboard.writeText(password);
```

This is a built-in browser API used to copy text to the clipboard. The `select()` call before it only highlights the text visually — the actual copying is done by `writeText()`.

### 7. Controlled vs Uncontrolled Inputs

An input is "controlled" when its value comes from React state (like the password field, which uses `value={password}`). It is "uncontrolled" when the browser manages its own state internally (like using `defaultChecked` on a checkbox instead of `checked`). Controlled inputs keep state and UI always in sync.

---

_Built with React. No external libraries used._
