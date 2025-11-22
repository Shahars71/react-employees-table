import EmployeesJson from "./resources/EmployeesData.json";

import { EmployeesTableContainer } from "./EmployeesTableContainer";
import { useEffect, useState } from "react";

export type Employee = {
  name: string;
  email: string;
  position: "Junior" | "Senior" | "Manager";
  status: "New" | "Interviewed" | "Hired";
  experienceYears: number;
};

//You can divide each filter into its own import.
//So one for text filter, one for select input.
//Pass over all unique aspects and you're good.
//Makes things more modular.

//For some separation with the App.tsx, you could
//put everything in a seperate import, and have app.tsx
//handle global logic like parsing the json / connecting to json server?

function App() {
  const [fetchedData, setfetchedData] = useState<Employee[]>([]);

  async function getEmployees(): Promise<Employee[]> {
    const response = await fetch("http://localhost:3000/employees");
    if (!response.ok) {
      throw new Error(`HTTP ERROR! status: ${response.status}`);
    }
    const data: Employee[] = await response.json();
    //console.log(data);
    return data;
  }

  useEffect(() => {
    getEmployees().then((data) => {
    setfetchedData(data);
  })
  }, [])
  

  // const employeesData = fetchedData.map((emp) => {
  //   const em = emp;
  //   //console.log(em)
  //   return {
  //     name: em.name,
  //     email: em.email,
  //     position: em.position,
  //     status: em.status,
  //     experienceYears: em.experienceYears,
  //   };
  // });

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
