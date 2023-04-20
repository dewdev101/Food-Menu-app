# install react 
```bash
npx create-react-app my-app
cd [ProjectName]
npm start
```

# install tailwindCSS
```bash
npm install -D tailwindcss
npx tailwindcss init
```
This will create tailwind.config.js
then copy below to tailwind.config.js

```json
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

# Add tailwindCSS to directory
copy below to index.css

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Create postcss.config.js 
then copy below to the file
```json
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
# install axios
```bash
yarn add axios
```
# install react-icons
```bash
yarn add react-icons
```
# install router
```bash
yarn add react-routers-dom
```



