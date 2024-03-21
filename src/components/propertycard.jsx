import { Flex,chakra,Box,Img,Text } from '@chakra-ui/react'
import React from 'react'

export default function Propertycard({properties}) {
  return (
        <>
        <Flex gap={10} alignItems={'flex-start'}
            flexWrap={'wrap'}
            justifyContent={'center'}>
                {
                    properties.map((el,ind)=>{
                        return <Box w={'320px'} overflow={'hidden'} 
                                boxShadow={'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}
                                cursor={'pointer'}
                                // border={'2px solid gray'}
                                pb={5}
                                // borderBottom={'3px solid gray'}
                                >
                                <Box h={'270px'} >
                                <Img src={el.img} objectFit={'cover'}
                            w={'100%'}
                            h={'100%'}
                            borderRadius={5}
                            />
                                </Box>
                                <Text pl={5} pt={3} fontSize={'large'} fontWeight={'500'}>{el.title}</Text>
                                <Text pl={5} pt={2} fontSize={'large'}
                                color={'green.400'}
                                fontWeight={'500'}>{`N ${el.size}/sq ft`}</Text>
                                <Text pl={5} pt={2} fontSize={'large'} fontWeight={'500'}>
                                    <chakra.span fontWeight={'700'}>{el.bed} </chakra.span>
                                    <chakra.span color={'GrayText'} fontWeight={'500'}>Bed</chakra.span>
                                    <chakra.span fontWeight={'700'}>{el.bath} </chakra.span>
                                    <chakra.span color={'GrayText'} fontWeight={'500'}>Bath</chakra.span>
                                </Text>
                                <Text pl={5} pt={5} 
                                fontSize={'14px'}
                                color={'GrayText'} fontWeight={'500'}>Managed by JR Developers</Text>
                                

                            </Box>
                    })
                }
            </Flex>
            <Flex mt={10} gap={5} justifyContent={'center'}>
                <chakra.div w={4} h={4} borderRadius={10} bg={'green.400'}></chakra.div>
                <chakra.div w={4} h={4} borderRadius={10} bg={'gray.400'}></chakra.div>
                <chakra.div w={4} h={4} borderRadius={10} bg={'gray.400'}></chakra.div>
            </Flex>
        </>
    )
}
