import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Box, Text } from "@chakra-ui/react";
import { LoginModalButton } from "../components/LoginModalButton";
import { ToArticlesButton } from "../components/ToArticlesButton";
// eslint-disable-next-line
export const Home = () =>
    <Box p={25} bg="gray.50">
      <Text fontSize={32} textAlign={["center"]}>
        なんでもメモアプリ
        <br />
        HOME
      </Text>
      <Box mx="auto" my={[50, 8]} p="auto" w={20}>
        <ToArticlesButton />
      </Box>
      <Box mx="auto" my={8} p="auto" w={20}>
        <LoginModalButton />
      </Box>
      <Text textAlign={["center"]} color="green.500">
        <Link to="/Notepad">「メモ帳」はこちら</Link>
      </Text>
      <Toaster />
    </Box>
  ;

