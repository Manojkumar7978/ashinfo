import { Box, Img ,Flex, Heading, Text,
chakra,
Button,
Divider
} from '@chakra-ui/react'
import React from 'react'
import header from '../assest/header.jpg'
import logo from '../assest/logo.png'
import { FaRegUserCircle } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import {menu} from '../assest/data.jsx'

export default function Headers() {
  return (
    <Box position={'relative'}>
    <Img
  src={header}
  alt="Image"
  boxSize="100%"
  objectFit="cover"
  w={'100%'}
/>
<Box position={'absolute'} top={0} w={'100%'}     pl={['1px0','50px','100px']}
    pr={['10px','50px','100px']}>
    {/* navbar  */}
    <Box className='nav'
    w={'100%'}
    display={'flex'}
    alignItems={'center'}
    justifyContent={'space-between'}
    pt={5}

    >
        <Flex flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
            <Img src={logo} w={[5,5,10]} background={'transparent'}/>
            <Heading size={['sm','md','lg']} color={'green.400'} p={0} m={0}>Trophy Nig.</Heading>
            <Text fontSize={['x-small','x-small','x-small']}
             fontWeight={'500'} textTransform={'uppercase'} p={0} m={0}>Property Limited</Text>
        </Flex>
        <Flex gap={10}
        flexWrap={'wrap'}
        display={['none','none','flex']}
        color={'green.400'} fontWeight={'700'} alignItems={'center'}>
            {
                menu.map((el,ind)=>{
                    return  <chakra.li
                    listStyleType={'none'}
                    ><Text
                    cursor={'pointer'}
                    className='navItem'
                    >{el}</Text></chakra.li>
                })
            }
            <FaRegUserCircle color='black' size={30}/>
            <Button colorScheme='green' 
            rightIcon={<IoChevronDown/>}
            fontWeight={'300'}>Create Listing</Button>
        </Flex>
        <Box display={['block','block','none']}><GiHamburgerMenu  cursor={'pointer'}/>
</Box>
    </Box>
</Box>
    {/* heading  */}
    <Box position={'absolute'} top={['80%','60%','50%']}
    left={['10px','50px','100px']}
    transform={['translateY(-80%)','translateY(-60%)','translateY(-50%)']}
    >
        <Text display={'flex'} alignItems={'center'} gap={2} 
        fontWeight={'200'}
        fontSize={['medium','large','x-large']}
        color={'white'}
        >
        <Divider  w={'50px'} color={'white'}/>
            We are offering the
        </Text>
        <Heading
        color={'white'}
        fontWeight={'700'}
        fontFamily={'times-new-roman'}
        fontSize={['20px','40px','80px']}
        noOfLines={1}
        >Best Real Estate Deals</Heading>
        <Text
        color={'white'}
        fontWeight={'200'}
        fontSize={['10px','large','x-large']}
        maxW={['200px','400px','750px']}
        noOfLines={3}
        >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit  
officia consequat duis enim velit mollit. Exercitation veniam consequat sunt  
nostrud amet.

        </Text>
        <Button colorScheme='green' fontWeight={'200'} mt={['0',0,10]} 
        size={['xs','xs','lg']}
        >More Details</Button>
    </Box>

    </Box>
  )
}
