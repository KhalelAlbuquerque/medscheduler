import { Box, Button, Heading, Text } from "@chakra-ui/react";
import bannerImg from "../../public/image/banner-home.jpg";

export default function Home() {
  return (
    <Box className="flex flex-col w-full h-screen">
      <Box
        h="70%"
        w={"100%"}
        bgImage={`url(${bannerImg.src})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        className="rounded-l-lg"
        display={"flex"}
        alignItems={"center"}
      >
        <Box width={"100%"} height={"100%"} bgGradient="linear(to-r, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))">
          <Box
            w={{ base: "90%", md: "40%" }}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"100%"}
            p={8}
            borderRadius="lg"
          >
            <Heading
              as={"h1"}
              fontSize={{ base: "2rem", md: "3rem" }}
              color="white"
              mb={4}
              textAlign="center"
            >
              Schedule your appointment
            </Heading>
            <Text
              fontSize={{ base: "1rem", md: "1.5rem" }}
              color="white"
              mb={6}
              textAlign="center"
            >
              Plan your visit with us quickly and easily!
            </Text>
            <Button colorScheme="teal" size="lg" _hover={{ bg: "teal.600" }}>
              Book Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
