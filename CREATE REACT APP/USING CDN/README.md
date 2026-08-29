# ⚛️ React Application Using CDN

A beginner-friendly guide to creating and running a **React application using CDN (Content Delivery Network)** without installing React through npm, Vite, or Create React App.

This approach is useful for **learning React fundamentals, experimenting with small examples, and understanding how React works in the browser**.

---

## 📌 Table of Contents

* [What is CDN?](#-what-is-cdn)
* [What is React CDN?](#-what-is-react-cdn)
* [Prerequisites](#-prerequisites)
* [Create React App Using CDN](#-create-react-app-using-cdn)
* [Project Structure](#-project-structure)
* [Step 1: Create HTML File](#-step-1-create-html-file)
* [Step 2: Add React CDN](#-step-2-add-react-cdn)
* [Step 3: Add ReactDOM CDN](#-step-3-add-reactdom-cdn)
* [Step 4: Create React Element](#-step-4-create-react-element)
* [Step 5: Render React Application](#-step-5-render-react-application)
* [Complete Example](#-complete-example)
* [Run the Application](#-run-the-application)
* [Using JSX with CDN](#-using-jsx-with-cdn)
* [Babel CDN](#-babel-cdn)
* [Advantages](#-advantages)
* [Disadvantages](#-disadvantages)
* [When to Use CDN](#-when-to-use-cdn)
* [CDN vs Vite](#-cdn-vs-vite)
* [Important Notes](#-important-notes)
* [Conclusion](#-conclusion)

---

# 🌐 What is CDN?

**CDN** stands for **Content Delivery Network**.

A CDN is a distributed network of servers that delivers files such as:

* JavaScript
* CSS
* Images
* Fonts
* Libraries
* Frameworks

Instead of downloading React using npm, we can load React directly into an HTML page using a `<script>` tag.

---

# ⚛️ What is React CDN?

React provides JavaScript files that can be loaded directly from a CDN.

For example:

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js">
</script>

<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
</script>
```

The browser downloads these files and makes React available to the webpage.

---

# 🛠️ Prerequisites

Unlike Vite or Create React App, you **do not need Node.js or npm** for a basic React CDN application.

You only need:

* A web browser
* A text editor / VS Code
* Basic HTML knowledge
* Basic JavaScript knowledge

Check whether VS Code is installed:

```bash
code --version
```

Node.js is **not required** for this basic CDN setup.

---

# 🚀 Create React App Using CDN

Unlike Vite, there is no command such as:

```bash
npm create vite@latest
```

for a CDN-based React application.

You manually create the project files.

---

# 📁 Step 1: Create Project Folder

Create a folder:

```text
React-CDN
```

Open the folder in VS Code.

You can also create it from the terminal:

### Windows

```bash
mkdir React-CDN
cd React-CDN
code .
```

---

# 📂 Project Structure

Initially, your project can contain only one file:

```text
React-CDN/
│
└── index.html
```

This is enough to create a simple React application.

---

# 📄 Step 2: Create HTML File

Create:

```text
index.html
```

Add the basic HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>React CDN App</title>
</head>

<body>

    <div id="root"></div>

</body>
</html>
```

The important part is:

```html
<div id="root"></div>
```

React will use this element as the root container for the application.

---

# ⚛️ Step 3: Add React CDN

Add the React CDN before your application code:

```html
<script
    crossorigin
    src="https://unpkg.com/react@18/umd/react.development.js">
</script>
```

This loads the React library.

---

# ⚛️ Step 4: Add ReactDOM CDN

Next, add ReactDOM:

```html
<script
    crossorigin
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
</script>
```

React and ReactDOM have different responsibilities.

### React

React is responsible for creating and managing the UI.

### ReactDOM

ReactDOM connects React with the browser DOM.

---

# 🧩 Step 5: Create React Element

We can create a React element using:

```javascript
React.createElement()
```

Example:

```javascript
const element = React.createElement(
    "h1",
    null,
    "Hello React!"
);
```

This creates an `h1` React element.

---

# 🖥️ Step 6: Render React Application

Create a root:

```javascript
const root = ReactDOM.createRoot(
    document.getElementById("root")
);
```

Then render the element:

```javascript
root.render(element);
```

---

# 📄 Complete Example

Your complete `index.html` becomes:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>React CDN App</title>
</head>

<body>

    <div id="root"></div>

    <!-- React -->
    <script
        crossorigin
        src="https://unpkg.com/react@18/umd/react.development.js">
    </script>

    <!-- ReactDOM -->
    <script
        crossorigin
        src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
    </script>

    <!-- Application Code -->
    <script>

        const element = React.createElement(
            "h1",
            null,
            "Hello React!"
        );

        const root = ReactDOM.createRoot(
            document.getElementById("root")
        );

        root.render(element);

    </script>

</body>

</html>
```

---

# ▶️ Run the Application

There is no npm command required.

You can simply open:

```text
index.html
```

in your browser.

You should see:

```text
Hello React!
```

---

# 🧑‍💻 Run Using VS Code Live Server

For a better development experience, you can use the **Live Server** extension in VS Code.

Right-click:

```text
index.html
```

Then select:

```text
Open with Live Server
```

Your browser will open the React application.

---

# ✨ Using JSX with CDN

Writing:

```javascript
React.createElement(
    "h1",
    null,
    "Hello React!"
);
```

can become difficult for larger UI structures.

React applications commonly use **JSX**.

Example:

```jsx
const element = <h1>Hello React!</h1>;
```

However, browsers do not understand JSX directly.

Therefore, we need a JSX transformer such as **Babel**.

---

# 🔄 Babel CDN

Add Babel:

```html
<script
    src="https://unpkg.com/@babel/standalone/babel.min.js">
</script>
```

Then change your application script:

```html
<script type="text/babel">

    const element = <h1>Hello React!</h1>;

    const root = ReactDOM.createRoot(
        document.getElementById("root")
    );

    root.render(element);

</script>
```

---

# 📄 Complete JSX + CDN Example

```html
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>React CDN JSX App</title>

</head>

<body>

    <div id="root"></div>

    <!-- React -->
    <script
        crossorigin
        src="https://unpkg.com/react@18/umd/react.development.js">
    </script>

    <!-- ReactDOM -->
    <script
        crossorigin
        src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
    </script>

    <!-- Babel -->
    <script
        src="https://unpkg.com/@babel/standalone/babel.min.js">
    </script>

    <!-- React Application -->
    <script type="text/babel">

        function App() {

            return (
                <div>

                    <h1>Welcome to React</h1>

                    <p>
                        React Application created using CDN.
                    </p>

                </div>
            );

        }

        const root = ReactDOM.createRoot(
            document.getElementById("root")
        );

        root.render(<App />);

    </script>

</body>

</html>
```

---

# 🧱 Creating a Component

React components can also be created using CDN + Babel.

```jsx
function Welcome() {

    return (
        <h1>
            Welcome to React!
        </h1>
    );

}
```

Use the component:

```jsx
root.render(<Welcome />);
```

---

# 🧩 Multiple Components

```jsx
function Header() {

    return <h1>My Website</h1>;

}

function Content() {

    return <p>Learning React using CDN.</p>;

}

function App() {

    return (
        <div>

            <Header />

            <Content />

        </div>
    );

}

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<App />);
```

---

# 📁 Recommended CDN Project Structure

As your project becomes larger, you can organize it like this:

```text
React-CDN/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
└── README.md
```

However, if JSX is used inside `app.js`, additional Babel configuration/transformation considerations apply. For learning purposes, keeping the code inside the HTML file is the simplest approach.

---

# 📦 What is NOT Required?

With the CDN approach, you don't need:

```text
❌ npm install
❌ package.json
❌ node_modules
❌ Vite
❌ Create React App
❌ webpack
❌ React CLI
```

The browser downloads React directly from the CDN.

---

# ⚡ CDN Loading Flow

The basic process is:

```text
HTML File
    ↓
Load React CDN
    ↓
Load ReactDOM CDN
    ↓
Create React Element / Component
    ↓
Create React Root
    ↓
Render Component
    ↓
Browser UI
```

With JSX:

```text
HTML
  ↓
React CDN
  ↓
ReactDOM CDN
  ↓
Babel CDN
  ↓
JSX
  ↓
JavaScript
  ↓
React Root
  ↓
Browser
```

---

# ✅ Advantages of React CDN

### 1. No Node.js Required

A basic React CDN project can run without Node.js.

### 2. Easy to Start

You only need an HTML file.

### 3. Good for Learning

It helps beginners understand:

* React
* ReactDOM
* Components
* JSX
* Rendering
* Root element

### 4. No Build Configuration

You don't need to configure:

* Vite
* Webpack
* Babel configuration
* npm scripts

### 5. Quick Prototyping

It is useful for small experiments and demonstrations.

---

# ❌ Disadvantages of React CDN

### 1. Not Ideal for Large Applications

Large React applications normally require a proper development/build environment.

### 2. No npm Dependency Management

You cannot manage dependencies in the same way as a normal npm project.

### 3. JSX Requires Babel

Browsers do not natively execute JSX.

Using Babel Standalone in the browser is convenient for learning but isn't the typical production setup.

### 4. Manual Script Management

You need to manually include libraries using `<script>` tags.

### 5. No Standard Vite Development Workflow

You don't get Vite's development server, module handling, optimized production build, and related tooling.

---

# 🎯 When Should You Use React CDN?

React CDN is suitable for:

* Learning React basics
* Small demonstrations
* Code examples
* Tutorials
* Experiments
* Simple prototypes
* Testing React concepts
* Understanding React without a build tool

---

# 🚀 When Should You Use Vite Instead?

For a normal modern React project, Vite is generally a much better choice.

Example:

```bash
npm create vite@latest my-react-app
```

Then:

```bash
cd my-react-app
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

# ⚔️ React CDN vs Vite

| Feature             | React CDN          | Vite                 |
| ------------------- | ------------------ | -------------------- |
| Node.js             | ❌ Not required     | ✅ Required           |
| npm                 | ❌ Not required     | ✅ Used               |
| package.json        | ❌                  | ✅                    |
| node_modules        | ❌                  | ✅                    |
| Build tool          | ❌                  | ✅                    |
| JSX                 | Babel CDN required | ✅ Built into tooling |
| Components          | ✅                  | ✅                    |
| Hooks               | ✅                  | ✅                    |
| Small demos         | ⭐⭐⭐⭐⭐              | ⭐⭐⭐                  |
| Large applications  | ⭐                  | ⭐⭐⭐⭐⭐                |
| Production workflow | Limited            | ✅                    |
| Beginner learning   | ⭐⭐⭐⭐⭐              | ⭐⭐⭐⭐⭐                |

---

# 🔑 Important Commands

### Create folder

```bash
mkdir React-CDN
```

### Enter folder

```bash
cd React-CDN
```

### Open in VS Code

```bash
code .
```

### Run

No npm command is required.

Simply open:

```text
index.html
```

or use VS Code Live Server.

---

# 📚 Key Concepts Learned

By creating React using CDN, you can understand the basic React flow:

```text
React
 ↓
ReactDOM
 ↓
createRoot()
 ↓
root element
 ↓
render()
 ↓
Component
 ↓
UI
```

You also learn the difference between:

```javascript
React.createElement()
```

and:

```jsx
<h1>Hello React!</h1>
```

The first uses the React API directly, while the second is JSX syntax that is transformed into JavaScript.

---

# 🏆 Conclusion

Creating a React application using CDN is one of the simplest ways to experiment with React.

The basic setup requires:

```text
HTML
 +
React CDN
 +
ReactDOM CDN
 +
JavaScript
```

For JSX:

```text
HTML
 +
React CDN
 +
ReactDOM CDN
 +
Babel CDN
 +
JSX
```

However, for **real-world modern React development**, a proper toolchain such as **Vite** is generally preferred.

---

## 👨‍💻 Author

**Amol Pawar**

Frontend Developer | ReactJS Developer

Learning • Building • Documenting 🚀

---

## ⭐ Repository Goal

This repository is part of my research and learning journey to understand the **different ways of creating and setting up React applications**, from basic CDN-based React to modern development tooling.

More React application setup methods will be documented in separate folders.
