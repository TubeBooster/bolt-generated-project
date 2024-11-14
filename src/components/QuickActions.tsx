import { SimpleGrid, Button, Icon } from '@chakra-ui/react'
import { FiPlus, FiFileText, FiUser, FiCalendar } from 'react-icons/fi'

export const QuickActions = () => {
  const actions = [
    { label: 'Connect Platform', icon: FiPlus, colorScheme: 'blue' },
    { label: 'Generate Report', icon: FiFileText, colorScheme: 'green' },
    { label: 'Update Profile', icon: FiUser, colorScheme: 'purple' },
    { label: 'Schedule Post', icon: FiCalendar, colorScheme: 'orange' }
  ]

  return (
    <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
      {actions.map((action) => (
        <Button
          key={action.label}
          leftIcon={<Icon as={action.icon} />}
          colorScheme={action.colorScheme}
          size="lg"
          variant="outline"
          w="full"
        >
          {action.label}
        </Button>
      ))}
    </SimpleGrid>
  )
}
