import { Box, Button, Heading, List, Text } from "@chakra-ui/react";
import bannerImg from "../../public/image/banner-home.jpg";
import qualityOfLife from "../../public/image/quality-of-life.jpg";
import reduceRisk from "../../public/image/reduce-risk.jpg";
import longevity from "../../public/image/healthy-longevity.jpg";
import Image from "next/image";
import { Image as ChakraImage } from "@chakra-ui/react";

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
        <Box
          width={"100%"}
          height={"100%"}
          minHeight={600}
          bgGradient="linear(to-r, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))"
        >
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
              fontSize={{ base: "2.2vw", md: "3rem" }}
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

      <Box
        w={{ base: "90%", md: "80%", lg: "70%" }}
        m="auto"
        mt={20}
        bg={"#f9f9f9"}
        p={8}
        borderRadius="lg"
        shadow="lg"
      >
        <Heading
          textAlign="center"
          color="teal.700"
          mb={8}
          fontWeight="bold"
          fontSize={{ base: "2xl", md: "4xl" }}
        >
          Benefits of the Preventive Medical Consultation
        </Heading>

        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-around"
          mb={10}
        >
          <ChakraImage
            src={qualityOfLife.src}
            w={{ base: "100%", md: "40%" }}
            borderRadius="lg"
            shadow="md"
            alt="Better Quality of Life"
          />
          <Box
            w={{ base: "100%", md: "40%" }}
            mt={{ base: 6, md: 0 }}
            textAlign="center"
          >
            <Heading as="h2" fontSize={{base:"1.4rem", md:"1.5rem", lg: "1.8rem"}} color="blue.700" mb={4}>
              1. Better Quality of Life
            </Heading>
            <Text fontSize={{base:"16px", lg: "18px"}} color="gray.700">
              Preventive medical consultations help detect health issues early,
              monitor vital signs, assess lifestyle, and offer guidance on
              screenings and vaccinations, improving long-term health and
              quality of life.
            </Text>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection={{ base: "column-reverse", md: "row" }}
          alignItems="center"
          justifyContent="space-around"
          mb={10}
        >
          <Box
            w={{ base: "100%", md: "40%" }}
            mt={{ base: 6, md: 0 }}
            textAlign="center"
          >
            <Heading as="h2" fontSize={{base:"1.4rem", md:"1.5rem", lg: "1.8rem"}} color="blue.700" mb={4}>
              2. Reduction of Risk Factors
            </Heading>
            <Text fontSize={{base:"16px", lg: "18px"}} color="gray.700">
              Preventive medical consultations help identify and manage health
              risks early, promoting lifestyle changes to reduce the chance of
              chronic diseases and improve overall well-being.
            </Text>
          </Box>
          <ChakraImage
            src={reduceRisk.src}
            w={{ base: "100%", md: "40%" }}
            borderRadius="lg"
            shadow="md"
            alt="Reduction of Risk Factors"
          />
        </Box>

        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-around"
        >
          <ChakraImage
            src={longevity.src}
            w={{ base: "100%", md: "40%" }}
            borderRadius="lg"
            shadow="md"
            alt="Healthier, Happier Longevity"
          />
          <Box
            w={{ base: "100%", md: "40%" }}
            mt={{ base: 6, md: 0 }}
            textAlign="center"
          >
            <Heading as="h2" fontSize={{base:"1.4rem", md:"1.5rem", lg: "1.8rem"}} color="blue.700" mb={4}>
              3. Healthier Longevity
            </Heading>
            <Text fontSize={{base:"16px", lg: "18px"}} color="gray.700">
              Preventive medical consultations support long-term health by
              addressing issues early and promoting healthier habits, improving
              both lifespan and quality of life.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
