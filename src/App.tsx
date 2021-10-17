import './App.css';
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./router/Router";


export default function App() {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </RecoilRoot>
    </ChakraProvider>
  );
};
