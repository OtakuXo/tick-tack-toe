import { Box, Flex } from "@chakra-ui/react";

function X_component(props) {
  return (
    <Flex w={10} h={10} justifyContent={"center"}>
      <Box
        position={"absolute"}
        w={2}
        h={10}
        bg={"#319795"}
        transform={"rotate(40deg)"}
      ></Box>
      <Box
        position={"absolute"}
        w={2}
        h={10}
        bg={"teal.500"}
        transform={"rotate(130deg)"}
      ></Box>
    </Flex>
  );
}

export default X_component;
