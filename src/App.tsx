import { Box } from "@chakra-ui/react";
import Toolbar from "./components/Toolbar";
import DataTable from "./components/DataTable";

function App() {
  return (
    <Box padding={10}>
      <Toolbar />
      <DataTable />
    </Box>
  );
}

export default App;
