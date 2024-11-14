import { Grid, GridItem, Box, Text, Flex, Progress } from '@chakra-ui/react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const weekData = [
  { day: 'Mon', streams: 32000 },
  { day: 'Tue', streams: 28000 },
  { day: 'Wed', streams: 42000 },
  { day: 'Thu', streams: 38000 },
  { day: 'Fri', streams: 45000 },
  { day: 'Sat', streams: 52000 },
  { day: 'Sun', streams: 48000 }
]

const platforms = [
  { name: 'Spotify', value: 45, color: 'green.400' },
  { name: 'Apple Music', value: 32, color: 'pink.400' },
  { name: 'YouTube Music', value: 28, color: 'red.400' },
  { name: 'SoundCloud', value: 15, color: 'orange.400' }
]

export const RecentPerformance = () => {
  return (
    <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={6}>
      <GridItem bg="gray.800" p={6} borderRadius="lg">
        <Text fontSize="lg" fontWeight="bold" mb={4}>7-Day Performance</Text>
        <Box h="300px">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weekData}>
              <XAxis dataKey="day" stroke="#A0AEC0" />
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
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </GridItem>

      <GridItem bg="gray.800" p={6} borderRadius="lg">
        <Text fontSize="lg" fontWeight="bold" mb={4}>Active Platforms</Text>
        <VStack spacing={4}>
          {platforms.map((platform) => (
            <Box key={platform.name} w="full">
              <Flex justify="space-between" mb={2}>
                <Text>{platform.name}</Text>
                <Text fontWeight="bold">{platform.value}%</Text>
              </Flex>
              <Progress 
                value={platform.value} 
                colorScheme={platform.color.split('.')[0]}
                borderRadius="full"
                size="sm"
              />
            </Box>
          ))}
        </VStack>
      </GridItem>
    </Grid>
  )
}
