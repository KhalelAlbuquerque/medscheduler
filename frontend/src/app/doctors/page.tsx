import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import DoctorCard from "@/components/DoctorCard/page";

function DoctorsPage() {
  return (
    <Box display="flex" position={"relative"} gap={10} className="w-[75%] h-full m-auto mt-8">
      <Box
        className="bg-white w-[300px] rounded-lg"
        position="fixed"
        top="100px"      
        height="calc(100vh - 180px)"  
        overflowY="auto" 
        p={4}
        boxShadow="md"   
      >
        Filtros
      </Box>

      <Box ml="350px" w="100%"> 
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
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
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default DoctorsPage;
