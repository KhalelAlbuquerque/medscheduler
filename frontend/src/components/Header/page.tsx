"use client";

import { Box, Button, Link, List } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../../../public/image/main-logo.png";
import { BiMenu, BiX } from "react-icons/bi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      const footer = document.querySelector("footer");
      if (footer) {
        footer.style.display = "none";
      }
    };
  }, [isOpen]);

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
        className="flex md:hidden"
        cursor={"pointer"}
        onClick={handleOpen}
      >
        <BiMenu className="w-fit h-[50%]"></BiMenu>
      </Button>

      {isOpen && (
        <Box
          ref={menuRef}
          position="absolute"
          top="80px"
          className="bg-white p-4 rounded-b-lg shadow-t-lg z-10 w-[55%] sm:w-[40%] flex md:hidden"
          right="10"
          bg="white"
          p="4"
          shadow="md"
        >
          <Button
            position="absolute"
            right="20px"
            top="10px"
            height={40}
            width={40}
            className="rounded-full bg-gray-200"
            onClick={() => setIsOpen(false)}
          >
            <BiX className="w-full h-full" />
          </Button>
          <List className="flex flex-col gap-4 items-center w-full mt-[30px]">
            <Link className="cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]">
              About us
            </Link>
            <Link className="cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]">
              Doctors
            </Link>
            <Link className="cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]">
              SchedListe
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
