import React from "react";
import { Box } from "@chakra-ui/react";
import bgLogin from "../../../public/image/bg-login.jpeg";
import SignupForm from "@/components/SignupForm/page";

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Box
        display={"flex"}
        w={{ base: "90%", sm: "80%", md: "80%", xl: "70%" }}
        m="auto"
        h={"80%"}
      >
        <Box
          h="100%"
          w={"50%"}
          bgImage={`url(${bgLogin.src})`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          className="rounded-l-lg"
        ></Box>

        <SignupForm/>
      </Box>
    </div>
  );
};

export default SignupPage;
