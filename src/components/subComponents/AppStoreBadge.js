// components/AppStoreBadge.js
import { chakra, useColorModeValue } from '@chakra-ui/react'

export const AppStoreBadge = () => {
  return (
    <chakra.a
      href="https://www.apple.com/app-store/"
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
        src="https://pixelbag.net/wp-content/uploads/2022/06/download-on-the-app-store-badge-svg-pdf-ai-eps-768x432.jpg"
        alt="Download on the App Store"
      />
    </chakra.a>
  )
}
