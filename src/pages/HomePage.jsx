import { AtSignIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
export default function HomePage() {
  const router = useNavigate();
  const [githubUser, setGithubUser] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const url = "https://api.github.com/users/Ekbal41";
    const rawHtml = fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setGithubUser(data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Box p={4}>
        <Flex w="100%" h="100%" justify={"center"}>
          <Box d={"flex"} flexDirection={"column"}>
            <SkeletonCircle
              ml={4}
              height={"120px"}
              width={"120px"}
              isLoaded={isLoaded}
              mb={4}
            >
              {" "}
              <Avatar
                ml={isLoaded ? "13px" : ""}
                size="2xl"
                name={githubUser.name}
                src={githubUser.avatar_url}
              />
            </SkeletonCircle>
            <SkeletonText noOfLines={1} isLoaded={isLoaded}>
              <Text
                textAlign={"center"}
                mt={2}
                fontSize={"xl"}
                fontWeight={"bold"}
                color={"gray.600"}
              >
                {githubUser.name}
              </Text>
            </SkeletonText>
            <SkeletonText noOfLines={1} isLoaded={isLoaded}>
              <Text textAlign={"center"} fontSize={"md"} color={"gray.600"}>
                {githubUser.bio}
              </Text>
            </SkeletonText>
            <SkeletonText noOfLines={1} isLoaded={isLoaded}>
              <Text textAlign={"center"} fontSize={"md"} color={"gray.600"}>
                <AtSignIcon /> {githubUser.location}
              </Text>
            </SkeletonText>
            <Skeleton isLoaded={isLoaded} mt={4} size={"sm"}>
              <Button
                colorScheme="teal"
                variant="outline"
                size="sm"
                ml={"25px"}
                onClick={() => router("/repos")}
              >
                Repositories
              </Button>
            </Skeleton>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
