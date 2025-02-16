import { Button, Flex } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { playerContext } from "../../Routes";
import O_component from "../../components/utilities/O_component";
import X_component from "../../components/utilities/X_component";

function BoardFields({ i, gameState }) {
  const { player, setPlayer } = useContext(playerContext);
  const [playerChoice, setPlayerChoice] = useState(null);
  // console.log(playerChoice);

  const clickHandler = () => {
    if (playerChoice !== null) {
      return;
    }
    if (player === "x") {
      setPlayerChoice("x");
      gameState.splice(i - 1, 1, "x");
      setPlayer("o");
    }
    if (player === "o") {
      setPlayerChoice("o");
      gameState.splice(i - 1, 1, "o");
      setPlayer("x");
    }
  };
  return (
    <Flex
      minW={"100px"}
      minH={"100px"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"gray.600"}
    >
      <Button onClick={clickHandler} w={"full"} h={"full"}>
        {playerChoice === "x" && <X_component />}
        {playerChoice === "o" && <O_component />}
      </Button>
    </Flex>
  );
}

export default BoardFields;
