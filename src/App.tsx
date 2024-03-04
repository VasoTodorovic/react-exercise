import { useState } from "react";
import ClientSearch from "./components/ClientSearch";
import { Grid } from "@mui/material";
import TableClient from "./components/Table";
import ClientHead from "./components/table/ClienHead";
function App() {
  //

  const [count, setCount] = useState(0);

  var render = 0;
  // useEffect run on every render
  return (
    <div>
      <TableClient></TableClient>
    </div>
  );
}

export default App;
