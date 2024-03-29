import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import Quartil1 from "../quartil/Quartil1";
import Quartil2 from "../quartil/Quartil2";
import Quartil3 from "../quartil/Quartil3";
import Quartil4 from "../quartil/Quartil4";
import { createTheme, ThemeProvider } from "@mui/material";
("");
function createData(
  id: number,
  legal: string,
  firmId: number,
  name: string,
  numberOfEmp: number,
  quartile: number
) {
  return { id, legal, firmId, name, numberOfEmp, quartile };
}

const theme = createTheme({
  components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            color: 'blue',
          },
        },
      },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          backgroundColor: "#add8e6",
          borderRadius: "0px",
          padding: "0px",
        },
        grouped: {
          borderRadius: "0px",
          margin: "0 0px",
        },
        groupedHorizontal: {
          margin: "0 5px",
        },
        groupedVertical: {
          margin: "0px 0",
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: "#007bff",
          "&.Mui-selected": {
            backgroundColor: "#007bff",
            color: "#fff",
          },
        },
      },
    },
  },
});
const rows = [
  createData(1, "DOO", 132, "Moja firma", 4.0, 2),
  createData(2, "Pausalac", 1244, "Firma neka", 37, 4.3),
  createData(3, "DOO", 262, "Neka fima tamo", 24, 6.0),
  createData(4, "DOO", 60, "Moja firma", 4.0, 2),
  createData(5, "Pausalac", 90, "Firma neka", 37, 4.3),
  createData(6, "Pausalac", 265, "Neka fima tamo", 24, 6.0),
];

export default function TableClient() {
  const [quartil, setQuartil] = React.useState(1);
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setQuartil(newValue);
  };
  let quartilComonent: React.ReactNode;
  switch (quartil) {
    case 1:
      quartilComonent = <Quartil1></Quartil1>;
      break;
    case 2:
      quartilComonent = <Quartil2></Quartil2>;
      break;
    case 3:
      quartilComonent = <Quartil3></Quartil3>;
      break;
    case 4:
      quartilComonent = <Quartil4></Quartil4>;
      break;
  }

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: "#add8e6" }}>
            <TableRow sx={{ "& > *": { paddingright: "1px" } }}>
              <TableCell>no</TableCell>
              <TableCell align="left">Pausalac/DOO</TableCell>
              <TableCell>Maticni broj</TableCell>
              <TableCell align="left">Poslovno ime</TableCell>
              <TableCell align="left">Zaposleni</TableCell>
              <TableCell align="center" sx={{ width: "100%" }}>
                <ToggleButtonGroup
                  value={quartil}
                  sx={{ width: "80%", height: "50px" }}
                  exclusive
                  onChange={handleChange}
                >
                  <ToggleButton value={1} sx={{ width: "25%" }}>
                    I
                  </ToggleButton>
                  <ToggleButton value={2} sx={{ width: "25%" }}>
                    II
                  </ToggleButton>
                  <ToggleButton value={3} sx={{ width: "25%" }}>
                    III
                  </ToggleButton>
                  <ToggleButton value={4} sx={{ width: "25%" }}>
                    IV
                  </ToggleButton>
                </ToggleButtonGroup>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow sx={{ "& > *": { padding: "0px" } }}>
                <TableCell sx={{ width: "0%" }} align="center">
                  {row.id}
                </TableCell>
                <TableCell sx={{ width: "0%" }} align="left">
                  {row.legal}
                </TableCell>
                <TableCell sx={{ width: "0%" }} align="left">
                  {row.firmId}
                </TableCell>
                <TableCell sx={{ width: "10%" }} align="left">
                  {row.name}
                </TableCell>
                <TableCell sx={{ width: "1%" }} align="center">
                  {row.numberOfEmp}
                </TableCell>
                <TableCell sx={{ width: "50%" }} align="center">
                  {quartilComonent}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
