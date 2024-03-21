import React from 'react'
import { toprated } from '../assest/data'
import { Box, Img,Flex, Heading, Text,chakra } from '@chakra-ui/react'


export default function Toprated() {
  return (
        <>
       <Flex justifyContent={'center'}
       flexWrap={'wrap'}
       position={'relative'}
       gap={10} mb={20}>
        {
            toprated.map((el,ind)=>{
                return  <Flex key={el.title} h={'300px'} 
                borderRadius={10}
                bg={'gray.100'}
                boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px;'}
                p={1}
                >
                <Box maxW={'170px'} >
                    <Img src={el.img} w={'100%'} h={'100%'} objectFit={'cover'} />
                </Box>
                <Box w={'250px'} p={5}>
                    <Heading size={'sm'}>{el.title}</Heading>
                    <Text fontWeight={'400'}
                    fontSize={'14px'}
                    mt={2}
                    color={'gray'}>{el.builder}</Text>
                <Heading size={'sm'} mt={2} color={'green.400'}>{el.address}</Heading>
                <Text mt={2} fontSize={'md'} fontWeight={'500'}>
                                    <chakra.span fontWeight={'700'}>{el.bed} </chakra.span>
                                    <chakra.span color={'GrayText'} fontWeight={'500'}>Bed</chakra.span>
                                    <chakra.span fontWeight={'700'}>{el.bath} </chakra.span>
                                    <chakra.span color={'GrayText'} fontWeight={'500'}>Bath</chakra.span>
                                </Text>
                                <Text fontSize={'14px'}
                                position={'absolute'}
                                bottom={5}
                                color={'GrayText'} fontWeight={'500'}>Managed by JR Developers</Text>
                </Box>
            </Flex>
            })
        }
       </Flex>
        
        </>
    )
}
