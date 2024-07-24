'use client'

import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react'

export default function WithLargeQuote() {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text fontSize={{ base: 'xl', md: '2xl' }} textAlign={'center'} maxW={'3xl'}>
        &quot;Our experience with this React Native app has been exceptional. The integration of
        Firebase for authentication and data management has streamlined our workflow, and
        the user-friendly interface has enhanced our team's productivity. Were impressed
        with the quick turnaround and the ability to meet our specific needs effectively.&quot;
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://sampathrdd.github.io/Image/prof.png'
          }
          mb={2}
        />
        <Text fontWeight={600}>Dhanushka Sampath</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          Software Engineer
        </Text>
      </Box>
    </Stack>
  )
}
