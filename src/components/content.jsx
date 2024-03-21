import { Box,Flex,Heading as Head, Img, Text ,chakra} from '@chakra-ui/react'
import React from 'react'
import Heading from './heading'
import { designer, properties,  } from '../assest/data'
import Propertycard from './propertycard'
import Designercards from './designercards'
import Toprated from './toprated'
import { FaLeaf } from 'react-icons/fa'

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
            <Toprated/>
            <Box borderRadius={5}
            position={'relative'}
             bg={'gray.200'} pl={[5,10,20]} pb={10} w={['90%','70%','70%']} m={'auto'}
            boxShadow={'md'}
            mb={10}>
                <Head pt={10} fontSize={['large','x-large','xx-large']}>Download Trophy Nig. App</Head>
                <Text color={'GrayText'} fontSize={['sm','md','lg']}>And Never miss out any update</Text>
                <Text mt={5} color={'GrayText'} fontSize={['sm','md','lg']}>
                <chakra.span color={'green'}>✅</chakra.span>
                    <chakra.span>Get to know about newly posted Properties as soon as they are posted</chakra.span>
                </Text>
                <Text color={'GrayText'} fontSize={['sm','md','lg']}>
                <chakra.span color={'green'}>✅</chakra.span>
                    <chakra.span>Manage your Properties with ease and instant alerts about Properties</chakra.span>
                </Text>
                <Flex mt={5} ml={-2} gap={5}
                flexWrap={'wrap'}
                alignItems={'center'}>
                    <Img alt='google'
                    w={'170px'}
                    src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
                    <Img alt='app'
                    w={'170px'}
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png'/>
                </Flex>
                <Img src='https://i.pinimg.com/736x/6c/e2/0c/6ce20c9d1715d70aced4e4e99642ed4f.jpg'
                mixBlendMode={'multiply'}
                position={'absolute'}
                top={0} right={0}
                w={'450px'}
                filter={'blur(2px)'}
                />
            </Box>
            
        </Box>

    </Box>
  )
}
