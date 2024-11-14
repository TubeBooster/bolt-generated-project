import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ 
  config,
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'white'
      }
    }
  },
  colors: {
    brand: {
      500: '#3B82F6',
      600: '#2563EB',
    },
  },
})

export default theme
