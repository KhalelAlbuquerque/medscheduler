"use client";

import { Box, Button, Link, List, Text } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../../../public/image/main-logo.png";
import { BiMenu, BiUser, BiX } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const { status, data } = useSession();

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
        if (pathname === "/login" || pathname === "/signup") {
          footer.style.display = "none";
        } else {
          footer.style.display = "block";
        }
      }
    };
  }, [isOpen, pathname]);

  useEffect(() => {
    console.log(status);
    console.log(data);
  }, [status]);

  return (
    <Box
      zIndex={99}
      w="100%"
      h="80px"
      display={"flex"}
      position={"fixed"}
      className="px-[20px] sm:px-[50px] md:px-[100px] 
                  lg:px-[200px] shadow-xl"
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
          <Link
            href="/aboutus"
            className="cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]"
          >
            About us
          </Link>
          <Link
            href="/doctors"
            className="cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]"
          >
            Doctors
          </Link>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={"1rem"}>
          {status === "authenticated" ? (
            <Box
              width={"70px"}
              h={"100%"}
              className="flex items-center justify-center"
            >
              <Button
                bg={"none"}
                height={"fit"}
                width={"100%"}
                _hover={{ bg: "none" }}
              >
                <FaUserCircle fill="#0864FF" className="h-full w-full" />
              </Button>
            </Box>
          ) : (
            <>
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
            </>
          )}
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
          <BiX
            className="rounded-full bg-gray-200 absolute right-[20px] top-[10px] h-[40px] w-[40px] cursor-pointer"
            onClick={() => setIsOpen(false)}
          />

          <List className="flex flex-col gap-4 items-center w-full mt-[30px]">
            {status === "authenticated" ? (
              <>
                <Text>Welcome, <strong>{data.user.name}</strong></Text>
                <Link
                  href="#"
                  className="cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]"
                >
                  Profile
                </Link>
                <Link
                  href="#"
                  className="cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]"
                >
                  Doctors
                </Link>
                <Link
                  href="#"
                  className="cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]"
                >
                  My Schedule
                </Link>
                <Link
                  href="/aboutus"
                  className="cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]"
                >
                  About Us
                </Link>
                <Button
                  onClick={()=>signOut()}
                  className="cursor-pointer text-lg bg-[#0864FF] text-white font-semibold hover:bg-[#4d8fff] px-4 py-2 rounded-lg"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/aboutus"
                  className="cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]"
                >
                  About us
                </Link>
                <Link
                  href="/doctors"
                  className="cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]"
                >
                  Doctors
                </Link>
                <Link
                  href="/login"
                  className="cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="cursor-pointer text-lg bg-[#0864FF] text-white font-semibold hover:bg-[#4d8fff] px-4 py-2 rounded-lg"
                >
                  Sign Up
                </Link>
              </>
            )}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default Header;
