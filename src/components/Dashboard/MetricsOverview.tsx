import { Box, Grid, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { PlatformMetrics } from '../../types';

interface Props {
  metrics: PlatformMetrics[];
}

export const MetricsOverview = ({ metrics }: Props) => {
  const totalFollowers = metrics.reduce((acc, curr) => acc + curr.followers, 0);
  const totalEngagement = metrics.reduce((acc, curr) => acc + curr.engagement, 0);

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
      <Stat>
        <StatLabel>Total Followers</StatLabel>
        <StatNumber>{totalFollowers.toLocaleString()}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total Engagement</StatLabel>
        <StatNumber>{totalEngagement.toLocaleString()}</StatNumber>
      </Stat>
    </Grid>
  );
};
