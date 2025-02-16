import { Flex, flexbox, Grid } from "@chakra-ui/react";
import BoardFields from "../../components/boardFields/BoardFields";
import { useState, useContext } from "react";
import Winning from "../../components/winningMassage/Winning";
import { playerContext } from "../../Routes";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function Board(props) {
  const { player } = useContext(playerContext);
  const [gameState, setGamestate] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  // console.log(gameState);
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];

    if (a === "" || b === "" || c === "") {
      continue;
    }

    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    return (
      <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Winning player={player} setGamestate={setGamestate} />;
      </Flex>
    );
  }

  return (
    <Flex
      w={"100vw"}
      minH={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid
        bg={"gray.800"}
        color={"white"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        justifyContent={"center"}
        gap={"5px"}
        p={5}
      >
        {list.map((i) => (
          <BoardFields
            key={i}
            i={i}
            gameState={gameState}
            roundWon={roundWon}
            setGamestate={setGamestate}
          />
        ))}
      </Grid>
    </Flex>
  );
}

export default Board;
