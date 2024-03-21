import { Box, Flex, Img, Text,chakra } from '@chakra-ui/react'
import React from 'react'
import Heading from './heading'
import { designer, properties } from '../assest/data'
import Propertycard from './propertycard'
import Designercards from './designercards'

export default function Content() {
  return (
    <Box>
        <Box className='featured_properties'>
            <Heading title={'Featured Properties'} info={"Lorem ipsum dolor sit amet consectetur. Gravida et sit nibh accumsan arcu erat donec massa pulvinar. Rutrum pharetra id risus interdum. Donec proin quis mauris neque."}/>
            <Propertycard properties={properties}/>
            <Heading title={"Meet our Designer"} 
            info={"Lorem ipsum dolor sit amet consectetur. Proin sagittis duis et sed egestas turpis ut aliquet ultricies. Risus vulputate semper orci neque. Eu egestas et ac sit pellentesque nullam."}
            />
            <Designercards designer={designer}/>
            <Heading title={"Top Rated Properties"}
            info={'Lorem ipsum dolor sit amet consectetur. Proin sagittis duis et sed egestas turpis ut aliquet ultricies. Risus vulputate semper orci neque. Eu egestas et ac sit pellentesque nullam.'}
            />
        </Box>

    </Box>
  )
}
