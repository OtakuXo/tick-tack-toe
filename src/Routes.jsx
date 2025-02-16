import { Route, Routes } from "react-router-dom";
import App from "./App";
import Board from "./pages/board/Board";
import { createContext, useState } from "react";

export const playerContext = createContext();

function Rutes(props) {
  const [player, setPlayer] = useState("o");
  return (
    <playerContext.Provider value={{ player, setPlayer }}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </playerContext.Provider>
  );
}

export default Rutes;
