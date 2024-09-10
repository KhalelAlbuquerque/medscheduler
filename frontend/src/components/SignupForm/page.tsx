"use client";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value);
  }

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.currentTarget.value);
  }

  function handleName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.currentTarget.value);
  }

  function handlePhoneNumber(event: React.ChangeEvent<HTMLInputElement>) {
    setPhoneNumber(event.currentTarget.value);
  }

  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems={"center"}
      justifyContent={"center"}
      gap={5}
      p={6}
      bg="#faf9f6"
      maxW={1000} 
      boxShadow="2xl"
      w={{sm: "100%", md: "50%"}}
      className="sm:rounded-r-lg sm:rounded-l-none rounded-b-lg gap-[10px] sm:gap-[50px]"
    >
      <Heading as="h1" size="lg" mb={2} textAlign="center">
        Sign up
      </Heading>

      <Box
        w={{ base: "90%", sm: "90%", md: "90%", xl: "80%" }}
        className="flex flex-col items-center"
      >
        <FormControl mb={4}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="bg-white"
            value={name}
            onChange={handleName}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="bg-white"
            value={email}
            onChange={handleEmail}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel htmlFor="name">Phone number</FormLabel>
          <Input
            id="phoneNumber"
            type="text"
            placeholder="Enter your phone number"
            className="bg-white"
            value={phoneNumber}
            onChange={handlePhoneNumber}
          />
        </FormControl>

        <FormControl mb={6}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="bg-white"
            value={password}
            onChange={handlePassword}
          />
        </FormControl>

        <Button
          className="w-full ring-2 ring-blue-400"
          type="submit"
          bg={"#1F51FF"}
          color={"white"}
        >
          Submit
        </Button>
      </Box>

      <p className="mt-4 sm:mt-0">
        Already have an account?{" "}
        <Link className="text-[#577cff] font-bold underline" href={"/login"}>
          Login
        </Link>
      </p>
    </Box>
  );
};

export default SignupForm;
