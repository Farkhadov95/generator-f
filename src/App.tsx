import { Box, Spinner, Stack, Text } from "@chakra-ui/react";
import Toolbar from "./components/Toolbar";
import DataTable from "./components/DataTable";
import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { postData } from "./api/api";
import { Regions, dataType, requestType } from "./types";

function App() {
  const [users, setUsers] = useState<dataType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const reset = () => {
    setUsers([]);
    setCurrentPage(1);
  };

  const { mutate, isError, isPending } = useMutation<
    dataType[],
    Error,
    requestType
  >({
    mutationFn: postData,
    onSuccess: (data) => {
      setUsers((prevUsers) => [...prevUsers, ...data]);
      setCurrentPage((currentPage) => currentPage + 1);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const region = formData.get("region") as keyof typeof Regions;
    const errors = formData.get("errors") as string;
    const seed = formData.get("seed") as string;
    const page = currentPage;

    if (region !== undefined && errors && seed) {
      const requestData: requestType = {
        region: Regions[region],
        errors: parseFloat(errors),
        seed: parseInt(seed),
        page: page,
      };

      mutate(requestData);
    }
  };

  return (
    <Box padding={10}>
      <Toolbar onSubmit={handleSubmit} reset={reset} />
      {isPending ? (
        <Stack direction="row" spacing={4} padding={10}>
          <Spinner size="lg" />
        </Stack>
      ) : (
        <DataTable users={users} />
      )}
      {isError && <Text>Failed to load data</Text>}
    </Box>
  );
}

export default App;
