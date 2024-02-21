import { Tr, Td } from "@chakra-ui/react";
import { dataType } from "../types";

type DataTableItemProps = {
  user: dataType;
  orderNum: number;
};

const DataTableItem = (prop: DataTableItemProps) => {
  const { id, name, email, phone, house, street, city, country, zipCode } =
    prop.user;
  const orderNum = prop.orderNum;
  return (
    <Tr>
      <Td>{orderNum + 1}</Td>
      <Td>{id}</Td>
      <Td>{name}</Td>
      <Td>{email}</Td>
      <Td>{phone}</Td>
      <Td>{`${house}, ${street},  ${city},  ${country},  ${zipCode}`}</Td>
    </Tr>
  );
};

export default DataTableItem;
