import { Box, Flex, Heading, useColorMode, IconButton } from '@chakra-ui/react';

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="nav" bg="brand.700" px={4} py={3}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Heading size="md" color="white">Music Analytics</Heading>
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === 'light' ? '🌙' : '☀️'}
          onClick={toggleColorMode}
          variant="ghost"
          color="white"
        />
      </Flex>
    </Box>
  );
};
