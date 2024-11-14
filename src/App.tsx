import { 
  ChakraProvider, 
  Box, 
  Container, 
  VStack, 
  SimpleGrid, 
  Text, 
  Flex, 
  Avatar, 
  Button, 
  Progress,
  Grid,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge
} from '@chakra-ui/react'
import { FiTrendingUp, FiTrendingDown, FiMusic, FiUsers, FiDollarSign, FiPlus } from 'react-icons/fi'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import theme from './theme'

// Sample data for the chart
const chartData = [
  { name: 'Mon', streams: 4000 },
  { name: 'Tue', streams: 3000 },
  { name: 'Wed', streams: 5000 },
  { name: 'Thu', streams: 2780 },
  { name: 'Fri', streams: 4890 },
  { name: 'Sat', streams: 6390 },
  { name: 'Sun', streams: 5500 }
]

// Sample data for top tracks
const topTracks = [
  { name: 'Summer Vibes', plays: '245K', trend: '+12%', platform: 'Spotify' },
  { name: 'Midnight Dreams', plays: '180K', trend: '+8%', platform: 'Apple Music' },
  { name: 'Ocean Waves', plays: '156K', trend: '-3%', platform: 'YouTube Music' },
  { name: 'City Lights', plays: '132K', trend: '+15%', platform: 'Spotify' }
]

function App() {
  const stats = [
    { label: 'Total Streams', value: '45.2K', change: '+12%', icon: FiMusic },
    { label: 'New Followers', value: '1,259', change: '+8%', icon: FiUsers },
    { label: 'Engagement', value: '22.5K', change: '-3%', icon: FiTrendingUp },
    { label: 'Revenue', value: '$1,842', change: '+15%', icon: FiDollarSign }
  ]

  const platforms = [
    { name: 'Spotify', value: 45, color: 'green' },
    { name: 'Apple Music', value: 32, color: 'pink' },
    { name: 'YouTube Music', value: 28, color: 'red' },
    { name: 'SoundCloud', value: 15, color: 'orange' }
  ]

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" bg="gray.900" color="white">
        <Container maxW="container.xl" py={8}>
          <VStack spacing={8} align="stretch">
            {/* Header */}
            <Flex bg="gray.800" p={6} borderRadius="lg" gap={6} align="center">
              <Avatar size="xl" name="John Doe" />
              <Box flex={1}>
                <Text fontSize="2xl" fontWeight="bold">John Doe</Text>
                <Flex gap={8} mt={2}>
                  <Box>
                    <Text color="gray.400" fontSize="sm">Total Followers</Text>
                    <Text fontSize="lg" fontWeight="bold">1.2M</Text>
                  </Box>
                  <Box>
                    <Text color="gray.400" fontSize="sm">Monthly Listeners</Text>
                    <Text fontSize="lg" fontWeight="bold">850K</Text>
                  </Box>
                </Flex>
              </Box>
              <Button leftIcon={<FiPlus />} colorScheme="blue">
                New Release
              </Button>
            </Flex>

            {/* Today's Overview */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
              {stats.map((stat) => (
                <Box key={stat.label} bg="gray.800" p={6} borderRadius="lg">
                  <Flex justify="space-between" align="center" mb={2}>
                    <Text color="gray.400" fontSize="sm">{stat.label}</Text>
                    <Box as={stat.icon} color="blue.400" />
                  </Flex>
                  <Text fontSize="2xl" fontWeight="bold" mb={2}>{stat.value}</Text>
                  <Text 
                    fontSize="sm" 
                    color={stat.change.startsWith('+') ? 'green.400' : 'red.400'}
                  >
                    {stat.change} from yesterday
                  </Text>
                </Box>
              ))}
            </SimpleGrid>

            {/* Charts and Platform Performance */}
            <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={6}>
              {/* Weekly Trend Chart */}
              <Box bg="gray.800" p={6} borderRadius="lg">
                <Text fontSize="lg" fontWeight="bold" mb={4}>Weekly Performance</Text>
                <Box h="300px">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <XAxis dataKey="name" stroke="#A0AEC0" />
                      <YAxis stroke="#A0AEC0" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#2D3748', border: 'none' }}
                        labelStyle={{ color: '#A0AEC0' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="streams" 
                        stroke="#4299E1" 
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </Box>

              {/* Platform Performance */}
              <Box bg="gray.800" p={6} borderRadius="lg">
                <Text fontSize="lg" fontWeight="bold" mb={4}>Platform Distribution</Text>
                <VStack spacing={4} align="stretch">
                  {platforms.map((platform) => (
                    <Box key={platform.name}>
                      <Flex justify="space-between" mb={2}>
                        <Text>{platform.name}</Text>
                        <Text fontWeight="bold">{platform.value}%</Text>
                      </Flex>
                      <Progress 
                        value={platform.value} 
                        colorScheme={platform.color} 
                        size="sm" 
                        borderRadius="full"
                      />
                    </Box>
                  ))}
                </VStack>
              </Box>
            </Grid>

            {/* Top Tracks */}
            <Box bg="gray.800" p={6} borderRadius="lg">
              <Text fontSize="lg" fontWeight="bold" mb={4}>Top Performing Tracks</Text>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Track Name</Th>
                    <Th>Platform</Th>
                    <Th isNumeric>Total Plays</Th>
                    <Th isNumeric>Trend</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {topTracks.map((track) => (
                    <Tr key={track.name}>
                      <Td>{track.name}</Td>
                      <Td>
                        <Badge colorScheme={
                          track.platform === 'Spotify' ? 'green' :
                          track.platform === 'Apple Music' ? 'pink' :
                          'red'
                        }>
                          {track.platform}
                        </Badge>
                      </Td>
                      <Td isNumeric>{track.plays}</Td>
                      <Td isNumeric>
                        <Text 
                          color={track.trend.startsWith('+') ? 'green.400' : 'red.400'}
                        >
                          {track.trend}
                        </Text>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  )
}

export default App
