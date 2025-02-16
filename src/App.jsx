import { Text, Flex, Box, VStack, Button } from "@chakra-ui/react";
import { playerContext } from "./Routes";
import { useContext } from "react";
import StartBtn from "./components/buttons/StartBtn";
import O_component from "./components/utilities/O_component";
import X_component from "./components/utilities/X_component";

function App(props) {
  const { player, setPlayer } = useContext(playerContext);
  console.log(player);
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      w={"100vw"}
      h={"100vh"}
      p={0}
    >
      <VStack
        justifyContent={"center"}
        bg={"gray.800"}
        p={"20px"}
        borderRadius={"20px"}
        gap={"20px"}
      >
        <Text fontSize={"3rem"} fontWeight={"800"}>
          Choose
        </Text>
        <Flex gap={"20px"} justifyContent={"center"}>
          <Box>
            <Button
              onClick={() => setPlayer("o")}
              bg={player === "o" && "green"}
            >
              <O_component />
            </Button>
          </Box>
          <Box>
            <Button
              onClick={() => setPlayer("x")}
              bg={player === "x" && "green"}
            >
              <X_component />
            </Button>
          </Box>
        </Flex>
        <StartBtn />
      </VStack>
    </Flex>
  );
}

export default App;
