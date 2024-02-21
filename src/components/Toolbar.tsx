import {
  Box,
  Button,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
} from "@chakra-ui/react";
import { FormEventHandler, useState } from "react";

type ToolbarProp = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  reset: () => void;
  onExport: () => void;
};

const Toolbar = ({ onSubmit, reset, onExport }: ToolbarProp) => {
  const [currentSeed, setCurrentSeed] = useState<number>(0);
  const [currentError, setCurrentError] = useState<number>(0);

  return (
    <Box display={"flex"} justifyContent={"space-between"} paddingBottom={10}>
      <form onSubmit={onSubmit}>
        <Box display={"flex"} alignItems={"center"}>
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
              <option value="germany">Germany</option>
              <option value="turkey">Turkey</option>
              <option value="poland">Poland</option>
            </Select>
          </Box>

          <Text marginRight={5}>Errors: </Text>
          <NumberInput
            marginRight={10}
            height={"auto"}
            name="errors"
            width={"100px"}
            step={0.5}
            defaultValue={0.0}
            min={0}
            max={1000}
            onChange={(e) => {
              setCurrentError(parseFloat(e));
              reset();
            }}
            value={Number.isNaN(currentError) ? 0 : currentError}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <Text marginRight={3}>Seed: </Text>
          <NumberInput
            marginRight={5}
            height={"auto"}
            name="seed"
            width={"100px"}
            step={1}
            defaultValue={0}
            value={Number.isNaN(currentSeed) ? 0 : currentSeed}
            min={0}
            max={1000}
            onChange={(e) => {
              setCurrentSeed(parseInt(e)), reset();
            }}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button
            marginRight={"80px"}
            onClick={() => {
              reset();
              setCurrentSeed(Math.round(Math.random() * 1000));
            }}
          >
            Random Seed
          </Button>

          <Button type="submit">Apply</Button>
        </Box>
      </form>

      <Button onClick={onExport}>Export</Button>
    </Box>
  );
};

export default Toolbar;
