# react-employees-table

# 📊 React Employee Table

A filterable and searchable **Employee Table** built with **React**, **TypeScript**, **Material UI**, and a custom **JSON Server** backend.  
This project demonstrates clean component design, typed data flows, and UI state management for real-world data tables.

---

## 🚀 Features

- **Filterable Employee Table**
  - Filter by name, position, status, and years of experience
  - Input-based filter disabling logic for guided UX
- **Typed data model** using TypeScript (`Employee` type)
- **Material UI** components and styling
- **JSON Server backend** for mock API data
- **Vite-based React app** for fast development
- **Modular design** (separated table, container, filtering logic, styling)

---

## 🏗️ Tech Stack

### **Frontend**
- React 19  
- TypeScript 5  
- Vite 7  
- Material UI (MUI)  
- Emotion (CSS-in-JS)  
- ESLint w/ React Hooks plugin  

### **Backend**
- JSON Server (customized with TypeScript + ts-node)

---

## 🔧 Setup & Installation

This project has *two separate workspaces*:

- **Frontend** (`react-employee-table`)
- **Backend** (`react-employees-json-server`)

### 1️⃣ **Install frontend dependencies**

``` sh
cd react-employee-table``
npm install
```



### Run the dev server
``npm run dev``

The frontend will start on something like:
``http://localhost:5173``

### 2️⃣ Install backend dependencies

``` sh
cd react-employees-json-server
npm install
```
### Run the JSON server
``npm start``

The API will be running on:
``http://localhost:3000/employees``

## 🖥️ Usage

Once both servers are running:

- The React app fetches employee data from the JSON server.
- Users can filter by:
  - **Name**
  - **Position**
  - **Status**
  - **Years of Experience**

Filtering is powered by `useMemo` for performance.
