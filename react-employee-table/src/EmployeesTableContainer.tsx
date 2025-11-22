import {
  Stack,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import { useState, useMemo, type ChangeEvent } from "react";
import type { Employee } from "./App";
import { EmployeeTable } from "./EmployeeTable";
import { EmployeeTableContainerStyled } from "./EmployeeTableContainerStyled";
import { EmployeesTableWrapperStyled } from "./EmployeesTableWrapperStyled";

export type EmployeesTableContainerProps = {
  employeesData: Employee[];
};

export function EmployeesTableContainer({
  employeesData,
}: EmployeesTableContainerProps) {
    console.log(employeesData)
  const [nameInput, setNameInput] = useState("");
  const [posInput, setPosInput] = useState("");
  const [statInput, setStatInput] = useState("");
  const [yearsInput, setYearsInput] = useState("");

  const [posDisable, setPosDisable] = useState(true);
  const [staDisable, setStaDisable] = useState(true);


  const filteredEmployees = useMemo(() => {
    return employeesData.filter((emp) => {
      return (
        (nameInput === "" ||
          emp.name.toLowerCase().includes(nameInput.toLowerCase())) && //check corresponding name
        (posInput === "" ||
          emp.position.toLowerCase().includes(posInput.toLowerCase())) &&
        (statInput === "" ||
          emp.status.toLowerCase().includes(statInput.toLowerCase())) &&
        (yearsInput === "" ||
          emp.experienceYears == Number.parseInt(yearsInput))
      );
    });
  }, [nameInput, posInput, statInput, yearsInput, employeesData]);

  function handleChangeNameInput(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setNameInput(e.target.value);
    if (e.target.value) setPosDisable(false);
    else {
      cleanInputsAndDisable(true, true);
    }
  }

  function handleChangePositionInput(e: SelectChangeEvent) {
    e.preventDefault();
    setPosInput(e.target.value);
    if (e.target.value) setStaDisable(false);
    else {
      cleanInputsAndDisable(false, true);
    }
  }

  function handleChangeStatusInput(e: SelectChangeEvent) {
    e.preventDefault();
    setStatInput(e.target.value);
  }

  function cleanInputsAndDisable(cleanPos: boolean, cleanSta: boolean) {
    if (cleanPos) {
      setEmptyAndDisable(setPosInput, setPosDisable);
      setEmptyAndDisable(setStatInput, setStaDisable);
    }
    if (cleanSta) {
      setEmptyAndDisable(setStatInput, setStaDisable);
    }
  }

  function setEmptyAndDisable(
    clean: (emptyVal: string) => void,
    disable: (flag: boolean) => void
  ) {
    clean("");
    disable(true);
  }

  return (
    <EmployeesTableWrapperStyled>
      <EmployeeTableContainerStyled>
        <Stack direction="row" spacing={7}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField
              id="nameFilter"
              type="string"
              value={nameInput}
              onChange={handleChangeNameInput}
              variant="outlined"
              label="Name"
            ></TextField>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Position</InputLabel>
            <Select
              id="positionFilter"
              value={posInput}
              label="Position"
              onChange={handleChangePositionInput}
              variant="outlined"
              disabled={posDisable}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Junior">Junior</MenuItem>
              <MenuItem value="Senior">Senior</MenuItem>
              <MenuItem value="Manager">Manager</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Status</InputLabel>
            <Select
              id="statusFilter"
              value={statInput}
              label="Status"
              onChange={handleChangeStatusInput}
              variant="outlined"
              disabled={staDisable}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="New">New</MenuItem>
              <MenuItem value="Interviewed">Interviewed</MenuItem>
              <MenuItem value="Hired">Hired</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <TextField
              id="yearsFilter"
              type="number"
              value={yearsInput}
              onChange={(e) => setYearsInput(e.target.value)}
              variant="outlined"
              label="Years Of Experience"
            ></TextField>
          </FormControl>
        </Stack>

        <EmployeeTable employeeData={filteredEmployees} />
      </EmployeeTableContainerStyled>
    </EmployeesTableWrapperStyled>
  );
}
