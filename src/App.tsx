import { Box, Select, Stack, Text } from "@chakra-ui/react";

function App() {
  return (
    <Stack>
      <Box>
        <Text>Region: </Text>
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
    </Stack>
  );
}

export default App;
