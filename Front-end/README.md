# Front-end project settings

### Install react

```bash
npx create-react-app **[ProjectName]**
cd **[ProjectName]**
npm start
```

### Install tailwindCSS

```bash
npm install -D tailwindcss
npx tailwindcss init
```

This will create <font style="color:blue">tailwind.config.js</font>
then copy below to **tailwind.config.js**

```bash
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit']
      }
    },
  },
  plugins: [],
}
```

### Add tailwindCSS to directory

 - copy below to **index.css**

```bash
@tailwind base
@tailwind components
@tailwind utilities
```

 - create **postcss.config.js**

then copy below to the file

```bash
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Install axios

```bash
yarn add axios
```

### Install react-icons

```bash
yarn add react-icons
```

### Install router

```bash
yarn add react-routers-dom
```
