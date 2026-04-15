# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




# ConnectMate – Friendship Tracker App

ConnectMate is a smart friendship tracking web application that helps users manage friends, track interactions, and visualize communication history in a simple and interactive dashboard.

---

## 🚀 Technologies Used

- React.js
- JavaScript (ES6)
- Tailwind CSS
- React Router
- LocalStorage API
- React Hot Toast

---

## ✨ Key Features

- 👥 Add and manage friend profiles with details
- 📞 Track interactions like Call, Text, and Video
- ⏰ Timeline system to store all interaction history
- 📊 Interactive donut chart showing communication analytics
- 🔍 Hover effect to display live interaction counts
- 📱 Filter timeline by Call / Text / Video type

---

## 📊 Project Workflow

1. User opens friend profile
2. Selects Call / Text / Video interaction
3. Data is saved in localStorage
4. Timeline page displays all history
5. Status page shows analytics with chart + hover stats

---

## 📸 Screenshot

(Add your project screenshot here)

---

## ⚙️ Installation

```bash
npm install
npm run dev