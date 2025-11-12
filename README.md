# Password Generator React App

A modern password generator built with React and Vite that demonstrates key React concepts and hooks.

## 🚀 Features

- Generate random passwords with customizable length (4-20 characters)
- Include/exclude numbers in password
- Include/exclude special characters in password
- Copy generated password to clipboard with one click
- Real-time password generation as options change
- Clean and intuitive user interface

## 🎯 Key React Concepts Demonstrated

This project serves as a practical example of fundamental React hooks and concepts:

### 1. **useState Hook**
`useState` is used to manage component state. In this project, we use it for:

```jsx
const [length, setLength] = useState(8);
const [numberAllowed, setNumberAllowed] = useState(false);
const [characterAllowed, setCharacterAllowed] = useState(false);
const [password, setPassword] = useState("");
```

**Purpose**: 
- Tracks the password length, checkbox states, and generated password
- When state changes, React automatically re-renders the component
- Each `setState` function triggers a component update

**Key Concept**: State allows components to "remember" information between renders. When you check the "Include Numbers" checkbox, `setNumberAllowed(true)` updates the state, causing the component to re-render with the new value.

### 2. **useRef Hook**
`useRef` creates a mutable reference that persists across renders:

```jsx
const passwordRef = useRef(null);
```

**Purpose**:
- Creates a reference to the password input field
- Allows direct DOM manipulation without causing re-renders
- Used to select text in the input field when copying

**Key Concept**: Unlike state, updating a ref doesn't trigger a re-render. It's perfect for accessing DOM elements directly, like selecting text in an input field for copying.

### 3. **useCallback Hook**
`useCallback` memoizes functions to prevent unnecessary re-creations:

```jsx
const passwordGenerator = useCallback(() => {
  // Password generation logic
}, [length, numberAllowed, characterAllowed, setPassword]);

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password);
}, [password]);
```

**Purpose**:
- Prevents the function from being recreated on every render
- Only recreates the function when dependencies change
- Improves performance by avoiding unnecessary re-renders of child components

**Key Concept**: Without `useCallback`, these functions would be recreated on every render, potentially causing performance issues. The dependency array tells React when to create a new version of the function.

### 4. **useEffect Hook**
`useEffect` handles side effects in functional components:

```jsx
useEffect(() => {
  passwordGenerator();
}, [numberAllowed, characterAllowed, length, passwordGenerator]);
```

**Purpose**:
- Automatically generates a new password when any dependency changes
- Runs after the component renders
- Creates reactive behavior - password updates automatically when options change

**Key Concept**: Effects let you synchronize your component with external systems or perform actions after rendering. In this case, we generate a new password whenever the user changes any option (length, numbers, special characters).

## 🔄 How They Work Together

1. **Initial Render**: Component mounts with default state values
2. **useEffect runs**: Generates initial password using `passwordGenerator`
3. **User interaction**: User changes length slider or checkboxes
4. **useState updates**: State changes trigger re-render
5. **useEffect detects change**: Dependency array notices the change
6. **New password generated**: `passwordGenerator` creates a new password
7. **Copy functionality**: User clicks Copy button
8. **useRef accesses DOM**: Selects text in input field
9. **Clipboard API**: Copies password without re-rendering

## 🛠️ Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/SAMMILLERR/password_generator_react.git
cd password_generator_react
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Technologies Used

- **React 18** - UI Library
- **Vite** - Build tool and development server
- **JavaScript (ES6+)** - Programming language

## 🎓 Learning Outcomes

By studying this project, you'll understand:

- How to manage multiple pieces of state in a component
- When to use `useCallback` for performance optimization
- How to work with refs for DOM manipulation
- How to create reactive UIs with `useEffect`
- The difference between state and refs
- How to properly set up dependency arrays
- Best practices for handling user input in React

## 📝 Code Structure

```
src/
├── App.jsx          # Main component with all logic
├── main.jsx         # Application entry point
└── assets/          # Static assets
```

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

This project is open source and available for educational purposes.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
