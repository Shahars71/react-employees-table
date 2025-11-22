import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import type { Employee } from "./App";
import { EmployeeTableRowStyled } from "./EmployeeTableRowStyled";

export type EmployeeTableProps = {
  employeeData: Employee[];
};

export function EmployeeTable({ employeeData }: EmployeeTableProps) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">E-Mail</TableCell>
              <TableCell align="center">Position</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Years of Experience</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeData.map((emp, index) => (
              <EmployeeTableRowStyled
                key={emp.name}
                isAlternating={index % 2 == 0}
              >
                <TableCell align="center">{emp.name}</TableCell>
                <TableCell align="center">{emp.email}</TableCell>
                <TableCell align="center">{emp.position}</TableCell>
                <TableCell align="center">{emp.status}</TableCell>
                <TableCell align="center">{emp.experienceYears}</TableCell>
              </EmployeeTableRowStyled>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
