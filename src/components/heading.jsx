import { Box,Heading as Headings,Text } from '@chakra-ui/react'
import React from 'react'

export default function Heading({title,info}) {
  return (
    <Box textAlign={'center'} m={'auto'} maxW={'1190px'} mt={20} mb={10}>
        <Headings color={'green.400'} fontSize={['x-large','xx-large','xxx-large']} 
        fontWeight={'500'}
        >{title}</Headings>
        <Text fontSize={['medium','large','x-large']} color={'GrayText'} fontWeight={'500'}>{info}</Text>
    </Box>
    )
}
