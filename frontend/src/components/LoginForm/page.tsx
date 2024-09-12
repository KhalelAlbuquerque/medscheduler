'use client'

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

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value);
  }

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.currentTarget.value);
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    // setToken("alskd", 1000)
  }

  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems={"center"}
      justifyContent={"center"}
      p={6}
      bg="#faf9f6"
      maxW={1000}
      boxShadow="2xl"
      w={{ sm: "100%", md: "50%" }}
      className="sm:rounded-r-lg sm:rounded-l-none rounded-b-lg gap-[10px] sm:gap-[50px]"
    >
      <Heading as="h1" size="lg" mb={2} textAlign="center">
        Login
      </Heading>

      <Box
        w={{ base: "90%", sm: "90%", md: "90%", xl: "80%" }}
        className="flex flex-col items-center"
      >
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
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
            onClick={()=> false}
          >
            Submit
          </Button>
        </form>
      </Box>

      <p className="mt-4 sm:mt-0">
        Don't have an account?{" "}
        <Link className="text-[#577cff] font-bold underline" href={"/signup"}>
          Sign up
        </Link>
      </p>
    </Box>
  );
};

export default LoginForm;
