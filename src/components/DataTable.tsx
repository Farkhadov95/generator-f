import { TableContainer, Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import DataTableItem from "./DataTableItem";
import { dataType } from "../types";

export type DataTableProps = {
  users: dataType[];
};

const DataTable = (data: DataTableProps) => {
  const { users } = data;

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Number</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone number</Th>
              <Th>Address</Th>
            </Tr>
          </Thead>

          <Tbody>
            {users.map((user, index) => (
              <DataTableItem key={index} user={user} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
