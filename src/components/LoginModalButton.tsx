import "./components.css";
import { useState, memo } from "react";
import { Button, Box } from "@chakra-ui/react";
import { LoginModal } from "./LoginModal"


export const LoginModalButton = memo(() => {
  const [show, setShow] = useState<boolean>(
    false
  );
  const openModal = () => {
    setShow(true)
  }
  return (
    <Box>
      <Button colorScheme="teal" size="sm" m="10px" onClick={openModal}>
        ログインはこちらから
      </Button>
      <LoginModal show={show} setShow={setShow} />
    </Box>
  );
});