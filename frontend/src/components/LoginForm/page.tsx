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
import React, {useState} from "react";

const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  function handleEmail (event: React.ChangeEvent<HTMLInputElement>){
    setEmail(event.currentTarget.value)
  }

  function handlePassword (event: React.ChangeEvent<HTMLInputElement>){
    setPassword(event.currentTarget.value)
  }

  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems={"center"}
      justifyContent={"center"}
      gap={50}
      p={6}
      bg="#faf9f6"
      maxW={1000}
      boxShadow="2xl"
      w={"50%"}
      className="rounded-r-lg"
    >
      <Heading as="h1" size="lg" mb={2} textAlign="center">
        Login
      </Heading>

      <Box
        w={{ base: "90%", sm: "90%", md: "90%", xl: "80%" }}
        className="flex flex-col items-center"
      >
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

      <p>Don't have an account? <Link className="text-[#577cff] font-bold underline" href={"#"}>Sign up</Link></p>
    </Box>
  );
};

export default LoginForm;
