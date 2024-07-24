'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue, Box, Heading } from '@chakra-ui/react'
import { FaReact, FaDatabase, FaUser, FaShieldAlt } from 'react-icons/fa'

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <Box
      p={5}
      shadow={'md'}
      borderWidth={'1px'}
      borderRadius={'md'}
      textAlign={'center'}
      bg={'gray.800'}
      color={'white'}
      maxW={'sm'}>
      <Flex justify={'center'} mb={4}>
        {icon}
      </Flex>
      <Heading size={'md'} mb={2}>{title}</Heading>
      <Text color={'gray.400'}>{description}</Text>
    </Box>
  )
}

export default function Features() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'3xl'} align={'center'} spacing={6}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', md: '4xl' }}
            lineHeight={'110%'}
            color={'white'}>
            Key Features
          </Heading>
          <Text
            color={'whiteAlpha.800'}
            maxW={'xl'}
            textAlign={'center'}
            fontSize={{ base: 'lg', md: 'xl' }}>
            Discover the powerful features that make our app unique and user-friendly.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
            <FeatureCard
              icon={<FaReact size={40} color={'blue.400'} />}
              title={'React Native Integration'}
              description={'Seamless integration with React Native for a smooth development experience.'}
            />
            <FeatureCard
              icon={<FaDatabase size={40} color={'green.400'} />}
              title={'Firebase Database'}
              description={'Efficient data management with Firebase for reliable and scalable database solutions.'}
            />
            <FeatureCard
              icon={<FaUser size={40} color={'teal.400'} />}
              title={'User Profiles'}
              description={'Personalized user profiles with easy management and customization.'}
            />
            <FeatureCard
              icon={<FaShieldAlt size={40} color={'red.400'} />}
              title={'Security'}
              description={'Enhanced security features to protect user data and privacy.'}
            />
          </Stack>
          <Stack direction={'row'} spacing={4}>
            <Button
              bg={'orange.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'orange.500' }}>
              Learn More
            </Button>
            <Button
              bg={'whiteAlpha.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'orange.200' }}>
              Get Started
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}
