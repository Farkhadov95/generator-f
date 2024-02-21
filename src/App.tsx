import { Box, Text } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import exportFromJSON from "export-from-json";
import Toolbar from "./components/Toolbar";
import DataTable from "./components/DataTable";
import { postData } from "./api/api";
import { Regions, dataType, requestType } from "./types";
import Loader from "./components/Loader";

function App() {
  const [users, setUsers] = useState<dataType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentRequestData, setCurrentRequestData] = useState<requestType>({
    region: Regions.usa,
    errors: 0,
    seed: 0,
    page: 1,
  });

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
      setCurrentRequestData((prevRequestData) => ({
        ...prevRequestData,
        page: currentPage + 1,
      }));
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

      setCurrentRequestData(requestData);
      mutate(requestData);
    }
  };

  const handleLoad = (data: requestType) => {
    mutate(data);
  };

  const handleExport = () => {
    const fileName = "fake-data";
    const exportType = exportFromJSON.types.csv;
    exportFromJSON({ data: users, fileName, exportType });
  };

  return (
    <Box padding={10}>
      <Toolbar onSubmit={handleSubmit} reset={reset} onExport={handleExport} />
      {isPending ? (
        <Loader />
      ) : (
        <DataTable
          users={users}
          handleLoad={handleLoad}
          requestData={currentRequestData}
        />
      )}
      {isError && <Text>Failed to load data</Text>}
    </Box>
  );
}

export default App;
