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
import { FormEventHandler } from "react";

type ToolbarProp = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  reset: () => void;
};

const Toolbar = ({ onSubmit, reset }: ToolbarProp) => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} paddingBottom={10}>
      <form onSubmit={onSubmit}>
        <Box display={"flex"} alignItems={"baseline"}>
          <Box display={"flex"} alignItems={"baseline"} marginRight={10}>
            <Text paddingRight={3}>Region: </Text>
            <Select
              name="region"
              defaultValue={"usa"}
              width={"fit-content"}
              onChange={reset}
            >
              <option value="usa" defaultChecked>
                USA
              </option>
              <option value="spain">Spain</option>
              <option value="turkey">Turkey</option>
              <option value="poland">Poland</option>
            </Select>
          </Box>

          <Box
            display={"flex"}
            width={"fit-content"}
            alignItems={"baseline"}
            marginRight={10}
          >
            <Text marginRight={5}>Errors: </Text>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={0}
              width={"80px"}
              marginRight={5}
              onChange={reset}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Input
              name="errors"
              type={"number"}
              width={"100px"}
              defaultValue={0}
              onChange={reset}
            />
          </Box>

          <Box display={"flex"} alignItems={"baseline"} marginRight={10}>
            <Text marginRight={3}>Seed: </Text>
            <Input
              name="seed"
              type={"number"}
              width={"100px"}
              defaultValue={0}
              onChange={reset}
            />
          </Box>

          <Button type="submit">Apply</Button>
        </Box>
      </form>

      <Button>Export</Button>
    </Box>
  );
};

export default Toolbar;
