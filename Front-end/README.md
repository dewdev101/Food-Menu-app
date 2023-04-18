# install react 
npx create-react-app my-app
cd [ProjectName]
npm start

# install tailwindCSS
npm install -D tailwindcss
npx tailwindcss init
This will create tailwind.config.js
then copy below to tailwind.config.js

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

# Add tailwindCSS to directory
copy below to index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

# Create postcss.config.js 
then copy below to the file

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

# install axios
yarn add axios

# install react-icons
yarn add react-icons

# install router
yarn add react-routers-dom




