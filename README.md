# react-employees-table
📊 React Employee Table


A filterable and searchable Employee Table built with React, TypeScript, Material UI, and a custom JSON Server backend.

This project demonstrates clean component design, typed data flows, and UI state management for real-world data tables.



🚀 Features




Filterable Employee Table




Filter by name, position, status, and years of experience




Input-based filter disabling logic for guided UX






Typed data model using TypeScript (Employee type)




Material UI components and styling




JSON Server backend for mock API data




Vite-based React app for fast development




Modular design (separated table, container, filtering logic, styling)





🏗️ Tech Stack


Frontend




React 19




TypeScript 5




Vite 7




Material UI (MUI)




Emotion (CSS-in-JS)




ESLint w/ React Hooks plugin




Backend




JSON Server (customized with TypeScript + ts-node)



🔧 Setup & Installation


This project has two separate workspaces:




Frontend (react-employee-table)




Backend (react-employees-json-server)




1️⃣ Install frontend dependencies


cd react-employee-table
npm install



Run the dev server


npm run dev



The frontend will start on something like:


http://localhost:5173




2️⃣ Install backend dependencies


cd react-employees-json-server
npm install



Run the JSON server


npm start



Your API should now be running at:


http://localhost:3000/employees





Make sure this matches what your React app fetches.





📡 API Structure


The backend returns an array of Employee objects of this shape:


export type Employee = {
  name: string;
  email: string;
  position: "Junior" | "Senior" | "Manager";
  status: "New" | "Interviewed" | "Hired";
  experienceYears: number;
};



Example JSON entry:


{
  "name": "John Doe",
  "email": "john@example.com",
  "position": "Senior",
  "status": "Interviewed",
  "experienceYears": 5
}




🖥️ Usage


Once both servers are running:




The React app fetches employee data from the JSON server.




Users can filter by:




Name




Position




Status




Years of Experience



📦 Scripts


Frontend




Command
Description




npm run dev
Start Vite dev server


Backend




npm start
Start JSON server using ts-node



