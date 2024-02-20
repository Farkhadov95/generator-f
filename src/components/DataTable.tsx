import { TableContainer, Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import DataTableItem from "./DataTableItem";
import { useEffect, useState } from "react";

enum Regions {
  spain = "es",
  usa = "en",
  poland = "pl",
  turkey = "tr",
}

type requestType = {
  region: Regions;
  seed: number;
  errors: number;
};

const requestBody: requestType = {
  region: Regions.poland,
  seed: 12,
  errors: 0,
};

export type dataType = {
  name: string;
  email: string;
  phone: string;
  house: string;
  street: string;
  city: string;
  country: string;
  zipCode: string;
};

const postData = async (onSuccess: (usersData: dataType[]) => void) => {
  try {
    const response = await fetch("https://generator-f.onrender.com/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const userData = await response.json();
    onSuccess(userData);
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
};

const DataTable = () => {
  const [users, setUsers] = useState<dataType[]>([]);

  useEffect(() => {
    postData(setUsers);
  }, []);

  console.log(users);

  return (
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
          {users.map((user) => (
            <DataTableItem user={user} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
