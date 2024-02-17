import {
  Box,
  Button,
  Input,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";

const Toolbar = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"baseline"}
      paddingBottom={10}
    >
      <Box display={"flex"} alignItems={"baseline"}>
        <Text paddingRight={3}>Region: </Text>
        <Select placeholder="Select option" width={"fit-content"}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>

      <Box display={"flex"} alignItems={"baseline"}>
        <Text paddingRight={3}>Errors: </Text>
        <Slider aria-label="slider-ex-1" defaultValue={0} width={"30px"}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>

      <Box display={"flex"} alignItems={"baseline"}>
        <Text paddingRight={3}>Seed: </Text>
        <Input type={"number"} />
      </Box>

      <Button width={"100px"} height={"30px"}>
        Export
      </Button>
    </Box>
  );
};

export default Toolbar;
