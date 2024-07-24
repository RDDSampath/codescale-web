'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
  FcLock,
  FcList,
  FcPortraitMode,
  FcVoicePresentation,
  FcStatistics,
} from 'react-icons/fc'

interface CardProps {
  heading: string
  description: string
  icon: ReactElement
  href: string
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
      </Stack>
    </Box>
  )
}

export default function Features() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Key Features
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Explore the main functionalities of our React Native application.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Authentication'}
            icon={<Icon as={FcLock} w={10} h={10} />}
            description={'Secure user authentication using Firebase.'}
            href={'#'}
          />
          <Card
            heading={'Character Listing'}
            icon={<Icon as={FcList} w={10} h={10} />}
            description={'Browse characters from ThronesAPI.'}
            href={'#'}
          />
          <Card
            heading={'User Profile'}
            icon={<Icon as={FcPortraitMode} w={10} h={10} />}
            description={'View and manage user profile information.'}
            href={'#'}
          />
          <Card
            heading={'Voice-to-Text'}
            icon={<Icon as={FcVoicePresentation} w={10} h={10} />}
            description={'Utilize voice-to-text features for ease of use.'}
            href={'#'}
          />
          <Card
            heading={'Analytics'}
            icon={<Icon as={FcStatistics} w={10} h={10} />}
            description={'Track app usage with Firebase Analytics.'}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  )
}
