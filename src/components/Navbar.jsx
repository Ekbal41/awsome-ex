import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        bg="teal.500"
        px={4}
        py={1}
        color={["white", "white", "primary.700", "primary.700"]}
      >
        <Box>
          <h1>Github</h1>
        </Box>
        <Box>
          <Button ref={btnRef} colorScheme="teal" onClick={onOpen} >
            <HamburgerIcon 
            fontSize={20}
            />
          </Button>
        </Box>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
          color={"teal.500"}
          fontSize={15}
          fontWeight={500}
          >Navigations</DrawerHeader>

          <DrawerBody>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id modi
            officiis sint esse amet dolorum velit. Magnam dolorum unde id?
          </DrawerBody>

          <DrawerFooter>
            <Text
            fontSize={10}
            >Version 1.0.0</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
