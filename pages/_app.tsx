import type { AppProps } from 'next/app'
import App from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core'
import Layout from '../components/Layout'
import { useHotkeys, useLocalStorage } from '@mantine/hooks'


export default function MyApp({ Component, pageProps }: AppProps) {
  
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  

  


  return (



    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{

        headings: {
          fontFamily: 'Inconsolata',
          fontWeight: 900,
        },

        "colors": {
          'red': [
             "#F2F2F2",
             "#DBDBDB",
             "#C4C4C4",
             "#ADADAD",
             "#969696",
             "#808080",
             "#666666",
             "#4D4D4D",
             "#333333",
             "#1A1A1A"
          ]
        },
        
        breakpoints: {
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1400,
        },

          colorScheme,
        fontFamily: 'Inconsolata',
      }}
    >
        <Layout>
          <Component {...pageProps} />
         
      </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}                                                                                                           
