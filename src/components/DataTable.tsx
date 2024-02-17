import { TableContainer, Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import DataTableItem from "./DataTableItem";

const DataTable = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Number</Th>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Address</Th>
            <Th isNumeric>Phone number</Th>
          </Tr>
        </Thead>
        <Tbody>
          <DataTableItem />
          <DataTableItem />
          <DataTableItem />
          <DataTableItem />
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
