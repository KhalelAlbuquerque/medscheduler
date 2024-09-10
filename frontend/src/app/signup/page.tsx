import React from "react";
import { Box } from "@chakra-ui/react";
import bgLogin from "../../../public/image/bg-login.jpeg";
import SignupForm from "@/components/SignupForm/page";

const SignupPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-80px)]">
      <Box
        className="flex flex-col sm:flex-row"
        w={{ base: "90%", sm: "80%", md: "80%", xl: "70%" }}
        h={"80%"}
      >
        <Box
          w={{ sm: "100%", md: "50%" }}
          bgImage={`url(${bgLogin.src})`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          className="rounded-t-lg  sm:rounded-l-lg h-[200px] sm:h-full shadow-lg"
        ></Box>

        <SignupForm />
      </Box>
    </div>
  );
};

export default SignupPage;
