import { Box, Link, List } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import logo from "../../../public/image/main-logo.png"

const Header = () => {
  return (
    <Box className='shadow-md' zIndex={99} w="100%" h="80px" display={"flex"} position={"fixed"}  alignItems="center" bg="white" p={"10px 200px"} justifyContent={"space-between"}>
        <Link href='/' h="100%" cursor={"pointer"}>
            <Image src={logo} alt='Logo' className='h-full w-fit'/>
        </Link>

        <List className='flex gap-[2rem]'>
            <Box display={"flex"} alignItems={'center'} gap={"1rem"}>
                <Link className='cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]'>About us</Link>
                <Link className='cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]'>Doctors</Link>
                <Link className='cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]'>SchedListe</Link>
            </Box>
            <Box display={"flex"} alignItems={'center'} gap={"1rem"}>
                <Link href='login' className='cursor-pointer text-lg font-semibold text-[#0864FF] hover:text-[#4d8fff]'>Login</Link>
                <Link href='signup' className='cursor-pointer text-lg bg-[#0864FF] text-white font-semibold hover:bg-[#4d8fff] px-4 py-2 rounded-lg'>Sign Up</Link>
            </Box>
        </List>
    </Box>
  )
}

export default Header