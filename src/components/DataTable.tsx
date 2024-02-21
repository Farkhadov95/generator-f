import { TableContainer, Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import DataTableItem from "./DataTableItem";
import { dataType } from "../types";
import InfiniteScroll from "react-infinite-scroller";

export type DataTableProps = {
  users: dataType[];
  handleLoad: () => void;
};

const DataTable = ({ users, handleLoad }: DataTableProps) => {
  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={handleLoad}
        hasMore={true || false}
      >
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
          </Table>
        </TableContainer>
      </InfiniteScroll>
    </>
  );
};

export default DataTable;
