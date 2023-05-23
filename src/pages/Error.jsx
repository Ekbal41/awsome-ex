import { Alert, AlertIcon, Flex, Text } from "@chakra-ui/react";

export default function Error() {
  return (
    <>
      <Flex
        w={"100%"}
        h={"100vh"}
        justify={"center"}
        align={"center"}
        direction={"column"}
      >
        <Alert
          status="error"
          bg={"white"}
          w={"75%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <AlertIcon boxSize="40px" mb={2} />
          <Text align={"center"}>
            {" "}
            Something went wromg, please try again later.{" "}
          </Text>
        </Alert>
      </Flex>
    </>
  );
}
