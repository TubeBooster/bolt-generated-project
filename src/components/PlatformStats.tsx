import { SimpleGrid } from '@chakra-ui/react'
import { StatCard } from './StatCard'

export const PlatformStats = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
      <StatCard
        label="Total Followers"
        value="1.2M"
        delta="23%"
        isIncrease={true}
      />
      <StatCard
        label="Monthly Listeners"
        value="850K"
        delta="12%"
        isIncrease={true}
      />
      <StatCard
        label="Track Plays"
        value="2.5M"
        delta="8%"
        isIncrease={false}
      />
      <StatCard
        label="Engagement Rate"
        value="5.2%"
        delta="15%"
        isIncrease={true}
      />
    </SimpleGrid>
  )
}
