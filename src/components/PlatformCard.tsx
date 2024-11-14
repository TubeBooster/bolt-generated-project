import { Box, Text, HStack, Progress } from '@chakra-ui/react'

interface PlatformCardProps {
  platform: string
  listeners: string
  growth: number
}

export const PlatformCard = ({ platform, listeners, growth }: PlatformCardProps) => {
  return (
    <Box bg="gray.800" p={6} borderRadius="lg">
      <Text fontSize="lg" fontWeight="bold" mb={2}>{platform}</Text>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>{listeners}</Text>
      <Text color="gray.400" mb={2}>Monthly Growth</Text>
      <HStack spacing={4}>
        <Progress 
          value={growth} 
          size="sm" 
          colorScheme={growth >= 0 ? "green" : "red"} 
          flex={1} 
          borderRadius="full"
        />
        <Text color={growth >= 0 ? "green.400" : "red.400"}>
          {growth}%
        </Text>
      </HStack>
    </Box>
  )
}
