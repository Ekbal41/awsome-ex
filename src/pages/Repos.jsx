import { ArrowLeftIcon, AtSignIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Skeleton } from "@chakra-ui/react";

import moment from "moment/moment";
export default function Repos() {
  const router = useNavigate();
  const [githubReps, setGithubReps] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const url = "https://api.github.com/users/Ekbal41/repos";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const reversedData = data.reverse();
        setGithubReps(reversedData);
        setTimeout(() => {
          setIsLoaded(true);
        }, 500);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Box p={4}
      minHeight={"400px"}
      minWidth={"300px"}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Button onClick={() => router("/")}>
            <ArrowLeftIcon />
          </Button>
        </Flex>
        <Box mt={4}>
          {githubReps &&
            githubReps.map((rep) => {
              return (
                <>
                  <Skeleton
                    key={rep.id}
                    borderRadius={"10px"}
                    isLoaded={isLoaded}
                  >
                    <Box
                      p={4}
                      border={"1px solid #ccc"}
                      borderRadius={"10px"}
                      mb={4}
                    >
                      <Flex justifyContent={"space-between"}>
                        <Text color="teal.500" fontWeight={"bold"}>
                          {rep.name}
                        </Text>
                        <Text color={"gray.600"}>{rep.language}</Text>
                      </Flex>
                      <Text color={"gray.600"}>{rep.description}</Text>
                      <Flex justifyContent={"space-between"} mt={4}>
                        <Text color={"gray.600"}>
                          <AtSignIcon /> {rep.owner.login}
                        </Text>
                        <Text color={"gray.600"}>
                          {moment(rep.created_at).fromNow()}
                        </Text>
                      </Flex>
                    </Box>
                  </Skeleton>
                </>
              );
            })}
        </Box>
      </Box>
    </>
  );
}
