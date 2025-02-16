import { Flex, Text, VStack } from "@chakra-ui/react";
import O_component from "../utilities/O_component";
import X_component from "../utilities/X_component";
import ResetBtn from "../buttons/ResetBtn";
import ReturnBtn from "../buttons/ReturnBtn";

function Winning({ player, setGamestate }) {
  return (
    <VStack justifyContent={"center"} alignItems={"center"}>
      <Flex gap={5} alignItems={"center"} justifyContent={"center"}>
        {player === "x" ? <O_component /> : <X_component />}
        <Text fontSize={"3rem"} fontWeight={"bold"}>
          Wins
        </Text>
      </Flex>
      <Flex gap={5}>
        <ResetBtn setGamestate={setGamestate} />
        <ReturnBtn />
      </Flex>
    </VStack>
  );
}

export default Winning;
