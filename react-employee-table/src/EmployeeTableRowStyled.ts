import { TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";

export const EmployeeTableRowStyled = styled(TableRow, {shouldForwardProp: (prop) => prop != 'isAlternating'})<{isAlternating : boolean}>(({ isAlternating}) => ({
    backgroundColor : isAlternating ? "gray" : "darkgray"
}))