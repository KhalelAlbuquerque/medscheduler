import {
  Box,
  Flex,
  Text,
  Heading,
  Stack,
  Divider,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaHeartbeat, FaUserMd, FaShieldAlt } from "react-icons/fa";
import React from "react";
import banner1 from "../../../public/image/banner1-about.jpg";
import banner2 from "../../../public/image/banner2-about.jpg";

function AboutUs() {
  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      className="mt-4 p-0 md:p-8"
    >
      <Stack
        className="w-[90%] lg:w-[70%] px-4 md:px-20 lg-px-40 py-10 h-full"
        bg="white"
        rounded="lg"
        shadow="2xl"
        spacing={{base: 8, md: 12}}
      >
        <Box textAlign="center">
          <Heading fontSize="4xl" color="teal.500" mb={4}>
            About Us
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={6}>
            Welcome to <strong>Medical Schedule</strong>, your trusted partner
            in making healthcare appointments simple and stress-free. Our
            platform is designed to connect you with the right healthcare
            professionals at the right time.
          </Text>
          <Image
            src={banner1.src}
            w={"100%"}
            alt="Healthcare connection"
            rounded="lg"
            shadow="md"
            className="mx-auto md:mb-6"
          />
        </Box>

        <Divider />

        <Box>
          <Heading fontSize="3xl" color="teal.500" className="mb-6 md:mb-4">
            What We Do
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GridItem className="w-[60%] m-auto text-center md:w-auto md:m-0 md:text-start">
              <FaHeartbeat className="fill-teal-600 m-auto md:m-0 mb-2 w-10 h-10" />
              <Text fontWeight="bold" fontSize="lg" color="gray.700">
                Browse Providers
              </Text>
              <Text fontSize="md" color="gray.600">
                Find specialists that meet your needs, view their profiles, and
                read patient reviews.
              </Text>
            </GridItem>

            <GridItem className="w-[60%] m-auto text-center md:w-auto md:m-0 md:text-start">
              <FaUserMd  className="fill-teal-600 m-auto md:m-0 mb-2 w-10 h-10" />
              <Text fontWeight="bold" fontSize="lg" color="gray.700">
                Schedule Appointments
              </Text>
              <Text fontSize="md" color="gray.600">
                Book your medical appointments with just a few clicks from any
                device.
              </Text>
            </GridItem>

            <GridItem className="w-[60%] m-auto text-center md:w-auto md:m-0 md:text-start">
              <FaShieldAlt  className="fill-teal-600 m-auto md:m-0 mb-2 w-10 h-10" />
              <Text fontWeight="bold" fontSize="lg" color="gray.700">
                Manage Your Health
              </Text>
              <Text fontSize="md" color="gray.600">
                Track and manage your upcoming visits with our user-friendly
                dashboard.
              </Text>
            </GridItem>
          </div>
        </Box>

        <Divider />

        <Box>
          <Heading fontSize="3xl" color="teal.500" mb={4}>
            Why Choose Us?
          </Heading>
          <Image
            src={banner2.src}
            w={"100%"}
            alt="Why Choose Us"
            rounded="lg"
            className="mx-auto"
            shadow="md"
            mb={6}
          />
          <Text fontSize="lg" color="gray.600">
            <strong>Convenience:</strong> Schedule appointments anytime,
            anywhere. <br />
            <strong>Trusted Network:</strong> Connect with certified and highly
            recommended healthcare providers. <br />
            <strong>Security:</strong> Your personal and medical information is
            fully protected with industry-leading encryption.
          </Text>
        </Box>

        <Divider />

        <Text fontSize="lg" textAlign="center" color="gray.600">
          Take control of your healthcare today with{" "}
          <strong>Medical Schedule</strong> — because your health matters.
        </Text>
      </Stack>
    </Flex>
  );
}

export default AboutUs;
