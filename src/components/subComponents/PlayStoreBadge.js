// components/PlayStoreBadge.js
import { chakra, useColorModeValue } from '@chakra-ui/react'

export const PlayStoreBadge = () => {
  return (
    <chakra.a
      href="https://play.google.com/store"
      target="_blank"
      rel="noopener noreferrer"
      display="inline-block"
      bg={useColorModeValue('gray.200', 'gray.700')}
      borderRadius="md"
      overflow="hidden"
      p={2}
      _hover={{ bg: useColorModeValue('gray.300', 'gray.600') }}
    >
      <img
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        alt="Get it on Google Play"
      />
    </chakra.a>
  )
}
