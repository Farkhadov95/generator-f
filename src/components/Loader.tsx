import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Spinner,
  Stack,
} from "@chakra-ui/react";

const Loader = () => {
  const { onClose } = useDisclosure();

  return (
    <Modal isOpen={true} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent width={"fit-content"}>
        <ModalBody>
          <Stack direction="row" spacing={4} padding={10}>
            <Spinner size="xl" autoFocus />
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Loader;
