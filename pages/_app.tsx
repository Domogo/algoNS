import { ChakraProvider } from '@chakra-ui/react'
import { WalletProvider } from '../context/wallet'

function MyApp({ Component, pageProps }) {
  return (
    <WalletProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </WalletProvider>
  )
}

export default MyApp