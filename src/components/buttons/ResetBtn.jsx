import { Button } from "@chakra-ui/react";
import React from "react";

function ResetBtn({ setGamestate, roundWon }) {
  const clickHandler = () => {
    setGamestate(["", "", "", "", "", "", "", "", ""]);
    roundWon = false;
  };

  return <Button onClick={clickHandler}>Reset</Button>;
}

export default ResetBtn;
