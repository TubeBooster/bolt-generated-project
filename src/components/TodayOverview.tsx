import { SimpleGrid, Box, Text, Icon, Flex } from '@chakra-ui/react'
import { FiPlay, FiUserPlus, FiHeart, FiDollarSign } from 'react-icons/fi'

const OverviewCard = ({ label, value, icon, change }: any) => (
  <Box bg="gray.800" p={6} borderRadius="lg">
    <Flex justify="space-between" align="start" mb={2}>
      <Text color="gray.400" fontSize="sm">{label}</Text>
      <Icon as={icon} color="blue.400" />
    </Flex>
    <Text fontSize="2xl" fontWeight="bold">{value}</Text>
    <Text fontSize="sm" color={change >= 0 ? "green.400" : "red.400"}>
      {change >= 0 ? '+' : ''}{change}% from yesterday
    </Text>
  </Box>
)

export const TodayOverview = () => {
  const stats = [
    { label: 'Total Streams', value: '45.2K', icon: FiPlay, change: 12 },
    { label: 'New Followers', value: '1,259', icon: FiUserPlus, change: 8 },
    { label: 'Content Engagement', value: '22.5K', icon: FiHeart, change: -3 },
    { label: 'Revenue Generated', value: '$1,842', icon: FiDollarSign, change: 15 }
  ]

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
      {stats.map((stat) => (
        <OverviewCard key={stat.label} {...stat} />
      ))}
    </SimpleGrid>
  )
}
