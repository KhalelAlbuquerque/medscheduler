import { Image, Text, Box, Button, Card, CardBody, CardFooter, CardHeader, Heading } from "@chakra-ui/react";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock, FaUserDoctor } from "react-icons/fa6";
import docImg from "../../../public/image/doctor-example.jpg";

function DoctorCard() {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center">
        <Image
          src={docImg.src}
          className="rounded-full m-auto"
          width={150}
          height={150}
          objectFit="cover"
        />
        <Heading size="sm" textAlign={"center"} mt={2}>
          Dr. Claudio Roberto
        </Heading>
      </CardHeader>
      <CardBody w={"100%"} mt={-4}>
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <FaUserDoctor />
          <Text fontWeight={"medium"}>General clinical</Text>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <FaCalendarAlt />
          <Text fontWeight={"medium"}>Mon. to Sun.</Text>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <FaClock />
          <Text fontWeight={"medium"}>08 AM to 02 PM</Text>
        </Box>
      </CardBody>
      <CardFooter>
        <Button className="m-auto bg-blue-300" _hover={{bg: "blue.100"}}>Book now</Button>
      </CardFooter>
    </Card>
  );
}

export default DoctorCard;
