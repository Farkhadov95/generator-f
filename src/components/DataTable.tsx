import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Tfoot,
  Button,
} from "@chakra-ui/react";
import DataTableItem from "./DataTableItem";
import { dataType, requestType } from "../types";

export type DataTableProps = {
  users: dataType[];
  handleLoad: (data: requestType) => void;
  requestData: requestType;
};

const DataTable = ({ users, handleLoad, requestData }: DataTableProps) => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Number</Th>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone number</Th>
              <Th>Address</Th>
            </Tr>
          </Thead>

          <Tbody>
            {users.map((user, index) => (
              <DataTableItem key={index} user={user} orderNum={index} />
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th colSpan={6}>
                <Button width={"100%"} onClick={() => handleLoad(requestData)}>
                  Load more
                </Button>
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
