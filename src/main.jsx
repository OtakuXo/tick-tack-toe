import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import Rutes from "./Routes.jsx";
import "./index.css";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { BrowserRouter } from "react-router-dom";

const styles = extendTheme({
  global: (props) => ({
    body: {
      bg: mode("#fff", "#000")(props),
      color: mode("#000", "gray.500")(props),
    },
  }),
});

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Rutes />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
