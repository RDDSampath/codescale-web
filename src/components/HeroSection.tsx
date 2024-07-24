'use client'

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  ImageProps,
  chakra,
} from '@chakra-ui/react';
import Image from 'next/image';

// Use require to dynamically load the image
import iconmidle from '../assets/images/mid.svg';

export default function HeroSection() {
  const OurImage = chakra(Image, {
    shouldForwardProp: (prop) => ['src', 'alt', 'width', 'height', 'margin', 'alignSelf',].includes(prop),
  })
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          React Native App{' '}
          <Text as={'span'} color={'orange.400'}>
            Showcase
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Welcome to My React Native App Showcase. Explore the features like Firebase Authentication, Character Listing from ThronesAPI, Profile Screen, Redux State Management, and more!
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            Get started
          </Button>
          <Button rounded={'full'} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={'full'}>
        <OurImage
            src={iconmidle}
            alt="Illustration"
            width={1000}
            height={1000}
            alignSelf={'center'}
          />
        </Flex>
      </Stack>
    </Container>
  )
}
