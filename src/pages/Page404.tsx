import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
// eslint-disable-next-line
export const Page404 = () => 
    <Box>
      <Text fontSize={32} textAlign={["center"]}>ページが見つかりません</Text>
      <br />
      <Link to="/">HOMEはこちら</Link>
    </Box>;