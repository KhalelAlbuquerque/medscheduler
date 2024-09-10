"use client";

import {
  Box,
  Button,
  Checkbox,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { CgSearch } from "react-icons/cg";

function DoctorFilter({
  handleSubmit,
}: {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <Box className="bg-white h-[450px] w-[400px] rounded-lg p-4" boxShadow="md">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between h-full"
      >
        <Box>
          <InputGroup mb={4}>
            <InputLeftElement
              pointerEvents="none"
              position="absolute"
              top="50%"
              transform="translateY(-50%)"
            >
              <CgSearch color="gray.300" size="20px" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search by name"
              variant="outline"
              size="lg"
              paddingLeft="40px"
            />
          </InputGroup>
          <Select mb={4} defaultValue={"all"}>
            <option value={"all"}>
              All Options
            </option>
            <option value={"general"}>General Medicine</option>
            <option value={"cardiology"}>Cardiology</option>
            <option value={"gastroenterology"}>Gastroenterology</option>
            <option value={"orthopedics"}>Orthopedics</option>
            <option value={"dermatology"}>Dermatology</option>
            <option value={"endocrinology"}>Endocrinology</option>
          </Select>

          <Box className="flex flex-col ml-2">
            <Text className="text-lg mb-2 font-medium">Days: </Text>
            <Box className="ml-4 flex flex-col">
              <Checkbox className="mb-1" defaultChecked value="monday">
                Monday
              </Checkbox>
              <Checkbox className="mb-1" defaultChecked value="tuesday">
                Tuesday
              </Checkbox>
              <Checkbox className="mb-1" defaultChecked value="wednesday">
                Wednesday
              </Checkbox>
              <Checkbox className="mb-1" defaultChecked value="thursday">
                Thursday
              </Checkbox>
              <Checkbox className="mb-1" defaultChecked value="friday">
                Friday
              </Checkbox>
              <Checkbox className="mb-1" defaultChecked value="saturday">
                Saturday
              </Checkbox>
              <Checkbox className="mb-1" defaultChecked value="sunday">
                Sunday
              </Checkbox>
            </Box>
          </Box>
        </Box>
        <Button type="submit" colorScheme="blue" width="full" size="lg">
          Search
        </Button>
      </form>
    </Box>
  );
}

export default DoctorFilter;
