import { Tr, Td } from "@chakra-ui/react";
import { dataType } from "../types";

type DataTableItemProps = {
  user: dataType;
};

const DataTableItem = (prop: DataTableItemProps) => {
  const { id, name, email, phone, house, street, city, country, zipCode } =
    prop.user;
  return (
    <Tr>
      <Td>{id}</Td>
      <Td>{name}</Td>
      <Td>{email}</Td>
      <Td>{phone}</Td>
      <Td>{`${house}, ${street},  ${city},  ${country},  ${zipCode}`}</Td>
    </Tr>
  );
};

export default DataTableItem;
