

import { EmployeesTableContainer } from "./EmployeesTableContainer";
import { useEffect, useState } from "react";

export type Employee = {
  name: string;
  email: string;
  position: "Junior" | "Senior" | "Manager";
  status: "New" | "Interviewed" | "Hired";
  experienceYears: number;
};



function App() {
  const [fetchedData, setfetchedData] = useState<Employee[]>([]);

  async function getEmployees(): Promise<Employee[]> {
    const response = await fetch("http://localhost:3000/Employee");
    if (!response.ok) {
      throw new Error(`HTTP ERROR! status: ${response.status}`);
    }
    const data: Employee[] = await response.json();
    return data;
  }

  useEffect(() => {
    getEmployees().then((data) => {
    setfetchedData(data);
  })
  }, [])
  

  return (
    <>
      <h1
        style={{
          fontFamily: "system-ui",
          textAlign: "center",
          paddingBottom: "15px",
        }}
      >
        Employees Table
      </h1>
      <EmployeesTableContainer employeesData={fetchedData} />
    </>
  );
}

export default App;
