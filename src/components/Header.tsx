import { Box, Flex, Avatar, VStack, Text, HStack, Divider } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Box bg="gray.800" p={6} borderRadius="lg" mb={6}>
      <Flex gap={6} align="center">
        <Avatar 
          size="xl" 
          name="John Doe"
          src="https://bit.ly/broken-link" 
        />
        <VStack align="start" flex={1}>
          <Text fontSize="2xl" fontWeight="bold">John Doe</Text>
          <HStack spacing={8} color="gray.400">
            <VStack align="start" spacing={1}>
              <Text fontSize="sm">Total Followers</Text>
              <Text fontSize="lg" color="white" fontWeight="bold">1.2M</Text>
            </VStack>
            <VStack align="start" spacing={1}>
              <Text fontSize="sm">Monthly Listeners</Text>
              <Text fontSize="lg" color="white" fontWeight="bold">850K</Text>
            </VStack>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  )
}
