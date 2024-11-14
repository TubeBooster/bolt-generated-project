import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

export const Dashboard = () => {
  return (
    <Box maxW="1200px" mx="auto">
      <Heading mb={6}>Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <Box p={6} bg="whiteAlpha.100" borderRadius="lg">
          <Heading size="md" mb={4}>Platform Overview</Heading>
          {/* MetricsOverview will go here */}
        </Box>
        <Box p={6} bg="whiteAlpha.100" borderRadius="lg">
          <Heading size="md" mb={4}>Geographic Distribution</Heading>
          {/* GeoMap will go here */}
        </Box>
      </SimpleGrid>
    </Box>
  );
};
