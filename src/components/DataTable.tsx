import InfiniteScroll from "react-infinite-scroller";
import { TableContainer, Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
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
      <InfiniteScroll
        pageStart={0}
        loadMore={() => handleLoad(requestData)}
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
                <DataTableItem
                  key={`${user.id}-${index}`}
                  user={user}
                  orderNum={index}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </InfiniteScroll>
    </>
  );
};

export default DataTable;
