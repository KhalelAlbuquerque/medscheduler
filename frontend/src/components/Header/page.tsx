"use client";

import { Box, Button, Link, List } from "@chakra-ui/react";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/image/main-logo.png";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <Box
      zIndex={99}
      w="100%"
      h="80px"
      display={"flex"}
      position={"fixed"}
      className="px-[20px] sm:px-[50px] md:px-[100px] 
                  lg:px-[200px]"
      alignItems="center"
      bg="white"
      py={"10px"}
      justifyContent={"space-between"}
    >
      <Link href="/" h="100%" cursor={"pointer"}>
        <Image src={logo} alt="Logo" className="h-full w-fit" />
      </Link>

      <List className=" hidden gap-[2rem] md:flex">
        <Box display={"flex"} alignItems={"center"} gap={"1rem"}>
          <Link className="cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]">
            About us
          </Link>
          <Link className="cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]">
            Doctors
          </Link>
          <Link className="cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]">
            Schedule
          </Link>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={"1rem"}>
          <Link
            href="login"
            className="cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]"
          >
            Login
          </Link>
          <Link
            href="signup"
            className="cursor-pointer text-lg bg-[#0864FF] text-white font-semibold hover:bg-[#4d8fff] px-4 py-2 rounded-lg"
          >
            Sign Up
          </Link>
        </Box>
      </List>

      <Button
        h={"100%"}
        className="block md:hidden"
        cursor={"pointer"}
        onClick={handleOpen}
      >
        <BiMenu className="w-fit h-[50%]"></BiMenu>
      </Button>

      {isOpen && (
        <Box
          display={{ base: "flex", md: "none" }}
          className="flex md:hidden"
          position="absolute"
          top="80px"
          left="0"
          right="0"
          bg="white"
          p="20"
          shadow="md"
          boxSizing="border-box"
        >
          <List className="flex flex-col gap-4">
            <Link className="cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]">
              About us
            </Link>
            <Link className="cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]">
              Doctors
            </Link>
            <Link className="cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]">
              Schedule
            </Link>
            <Link
              href="login"
              className="cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]"
            >
              Login
            </Link>
            <Link
              href="signup"
              className="cursor-pointer text-lg bg-[#0864FF] text-white font-semibold hover:bg-[#4d8fff] px-4 py-2 rounded-lg"
            >
              Sign Up
            </Link>
          </List>
        </Box>
      )}
    </Box>
  );
};

export default Header;
