import { Avatar, Box, Flex, Img, Text } from '@chakra-ui/react'
import React from 'react'
// import Heading from './heading'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";


export default function Designercards({designer}) {
  return (
        <>
        <Flex gap={10} justifyContent={'center'} flexWrap={'wrap'} mb={10}>
            {
                designer.map((el,ind)=>{
                    return <Box w={'270px'} key={el.name} cursor={'pointer'}
                            boxShadow={'rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;'}
                            p={5}
                            className='designer'
                            _hover={{ ".social": { display: "flex" } }}
                            >
                        <Box w={'170px'} h={'170px'} m={'auto'} overflow={'hidden'} borderRadius={'50%'}>
                            <Img  src={el.avatar} alt={el.name}
                            w={'100%'}
                            h={'100%'}
                            objectFit={'cover'} />
                            {
                                console.log(el.name)
                            }
                        </Box>
                        <Text textAlign={'center'}
                        mt={5}
                        fontSize={'larger'}
                        fontWeight={'700'}
                        >{el.name}</Text>
                        <Text textAlign={'center'} mt={2} 
                        fontSize={'medium'}
                        color={'gray.500'}>{el.position}</Text>
                        <Flex 
                        display={'none'}
                        _hover={{display:'flex'}}
                        gap={3} justifyContent={'center'} alignItems={'center'}
                        mt={5}
                        className='social'>
                        <FiFacebook color='green' size={25} />
                        <FaInstagram size={25}/>
                        <LuLinkedin size={25}/>
                        <FaXTwitter size={25}/>
                        </Flex>

                    </Box>
                })
            }
        </Flex>
        </>
    )
}
