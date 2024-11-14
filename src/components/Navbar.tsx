import { Box, Flex, Button, HStack, Text } from '@chakra-ui/react'

export const Navbar = () => {
  return (
    <Box bg="gray.800" borderBottom="1px" borderColor="gray.700">
      <Flex h="16" maxW="container.xl" mx="auto" px={8} align="center" justify="space-between">
        <Text fontSize="xl" fontWeight="bold">Music Analytics</Text>
        <HStack spacing={8}>
          <Button variant="ghost">Overview</Button>
          <Button variant="ghost">Platforms</Button>
          <Button variant="ghost">Geography</Button>
          <Button variant="ghost">Audience</Button>
        </HStack>
        <Button colorScheme="blue">Profile</Button>
      </Flex>
    </Box>
  )
}
