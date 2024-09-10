import { Box, Image, Link, Text } from "@chakra-ui/react";
import whiteLogo from "../../../public/image/white-logo.png";
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  return (
    <Box
      as="footer"
      className="relative bg-blue-500 mt-12"
      padding="4"
      textAlign="center"
    >
      <Box
        className="h-[220px] m-auto flex flex-col items-center justify-center"
        maxWidth={"900px"}
        w={"80%"}
      >
        <Image src={whiteLogo.src} w={"200px"} className="mb-2"></Image>
        <Box className="flex flex-col gap-2 items-center w-[50%] text-white">
          <Text className="text-lg">Contact Me</Text>
          <Box className="flex gap-4">
            <Link href="https://github.com/KhalelAlbuquerque" className="w-[20px] hover:scale-110">
              <BsGithub className="w-full h-full"/>
            </Link>
            <Link href="https://www.linkedin.com/in/khalel-albuquerque-08376b236/" className="w-[20px] hover:scale-110">
              <BsLinkedin className="w-full h-full"/>
            </Link>
            <Link  href="https://www.instagram.com/khalel_albuqq/" className="w-[20px] hover:scale-110">
              <BsInstagram className="w-full h-full"/>
            </Link>
          </Box>

          <Text className="text-w mt-2">
            Site developed by{" "}
            <span className="font-bold">Khalel Albuquerque</span>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
