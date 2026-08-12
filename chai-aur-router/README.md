## What I Learned in This Project

1. **React Router DOM (Page Navigation)**:
   - How to set up navigation between different pages (`BrowserRouter`, `Routes`, `Route`) in `main.jsx` and `App.jsx`.
   - How to pass dynamic values in URLs using `useParams` (e.g., `/user/:userid` in `User.jsx`).
   - How to highlight the active page link using `NavLink` and its `isActive` state.
   - How to close a mobile menu automatically when a link is clicked, using an `onClick` handler inside `NavLink`.
   - How `Link` should only be used for internal app routes, and a normal `<a>` tag should be used for real external URLs (like GitHub or social links).

2. **State Management with `useState`**:
   - How to store and update simple UI state, like `loading`, `error`, and `data` in `Github.jsx`.
   - How to toggle a boolean value (menu open/closed) using `useState` and an updater function like `setIsMenuOpen((prev) => !prev)`.

3. **Fetching Data with `useEffect` and `fetch`**:
   - How to call an external API (GitHub Users API) when a component first loads.
   - How to handle three states of a network request: loading, success, and error.
   - Why checking `res.ok` is important — a `fetch` call does not automatically throw an error for a bad response (like 404), so you must check it manually.

## Bug Fixes

- Fixed `Github.jsx` so it now shows a proper error message if the GitHub API call fails, instead of showing "undefined" or a broken image.
- Fixed the invalid `type="name"` on the name input in `Contact.jsx` to `type="text"`.
- Fixed the missing mobile navigation in `Header.jsx` — the menu was only visible on large screens with no way to open it on mobile; added a working hamburger toggle button.
- Replaced copyrighted stock photos in `About.jsx` and `Home.jsx` with free, open-source unDraw illustrations.
