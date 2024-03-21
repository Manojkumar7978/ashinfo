import { Box, Button, Flex, Heading, Input, Text,chakra } from '@chakra-ui/react'
import React from 'react'
import { footer } from '../assest/data'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Footer() {
  return (
        <Flex mt={10} pt={10} pb={10}
        justifyContent={['center','space-evenly','space-evenly']}
        alignItems={'center'}
        flexWrap={'wrap'}
        rowGap={5}
        p={[2,0,0]}
        bg={'green.400'}>
            <Box textAlign={['center','left','left']} color={'white'}>
              <Heading fontWeight={'400'}  fontSize={'lg'}>Follow us on:</Heading>
              <Flex gap={3} mt={3} alignItems={'center'} justifyContent={ ['center','left','left']}>
              <FiFacebook  size={25} />
              <FaInstagram size={25}/>
              <IoLogoWhatsapp size={25}/>
              </Flex>
              <Text mt={2}  color={'white'} fontSize={'14px'} display={'flex'} justifyContent={ ['center','left','left']} alignItems={ 'center'} gap={1} fontWeight={'100'}><chakra.span><MdOutlineAttachEmail/></chakra.span>info@trophynig.com</Text>
              <Text mt={2}  color={'white'} fontSize={'14px'} display={'flex'} justifyContent={ ['center','left','left']} alignItems={'center'} gap={1} fontWeight={'100'}><chakra.span><FaPhoneVolume/></chakra.span>8549652148</Text>
              <Text mt={2} maxW={'250px'} color={'white'} fontSize={'14px'} display={'flex'} justifyContent={ ['center','left','left']} alignItems={'center'} gap={1} fontWeight={'100'}><chakra.span><AiOutlineGlobal/></chakra.span>2972 Westheimer Rd. Santa Ana,
Illinois 85486.</Text>

              </Box>
            <Box color={'white'} textAlign={['center','left','left']}>
              <Heading fontWeight={'400'} fontSize={'xx-large'}>Company</Heading>
              {
                footer.map((el,ind)=>{
                  return <Text mt={3} cursor={'pointer'} fontSize={ ['md','md','lg']} key={el}>{el}</Text>
                })
              }
            </Box>
            <Box textAlign={['center','left','left']}>
            <Heading color={'white'} fontSize={'xx-large'} fontWeight={'400'}>Stay Upto Date</Heading>
            <Input bg={'gray.200'} borderRadius={0}
            w={['auto','300px','300px']}
            mt={5} placeholder='Enter Your Email Address' />
            <br/>
            <Button mt={5} h={12} bg={'white'} borderRadius={0} fontWeight={'700'}>
              Subscribe for<chakra.span color={'green'}>{`Newsletter >>`}</chakra.span>
            </Button>

            </Box>
        </Flex>
    )
}
