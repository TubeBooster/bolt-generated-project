import { Box, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from '@chakra-ui/react'

interface StatCardProps {
  label: string
  value: string
  delta?: string
  isIncrease?: boolean
}

export const StatCard = ({ label, value, delta, isIncrease }: StatCardProps) => {
  return (
    <Box bg="gray.800" p={5} borderRadius="lg" boxShadow="sm">
      <Stat>
        <StatLabel color="gray.400">{label}</StatLabel>
        <StatNumber fontSize="2xl" fontWeight="bold" mt={2}>
          {value}
        </StatNumber>
        {delta && (
          <StatHelpText>
            <StatArrow type={isIncrease ? 'increase' : 'decrease'} />
            {delta}
          </StatHelpText>
        )}
      </Stat>
    </Box>
  )
}
