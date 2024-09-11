"use client";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import DoctorCard from "@/components/DoctorCard/page";
import DoctorFilter from "@/components/DoctorFilter/page";

function DoctorsPage() {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) : void{
        event.preventDefault();
    }
    
  return (
    <Box display={"flex"} gap={10} className="w-[75%] h-full m-auto mt-8">
      <DoctorFilter handleSubmit={handleSubmit} />

      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        w={"100%"}
      >
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </SimpleGrid>
    </Box>
  );
}

export default DoctorsPage;
