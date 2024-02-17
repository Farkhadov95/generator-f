import { Tr, Td } from "@chakra-ui/react";

const DataTableItem = () => {
  return (
    <Tr>
      <Td>1</Td>
      <Td>inches</Td>
      <Td>millimetres (mm)</Td>
      <Td>25.4</Td>
      <Td isNumeric>25.4</Td>
    </Tr>
  );
};

export default DataTableItem;
