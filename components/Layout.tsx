import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Box, Button, Flex, HStack, Link as ChakraLink, Spacer } from '@chakra-ui/react'
import Wallet from './wallet/Wallet'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'AlgoNS - Algorand Name Service' }: Props) => (
  <Box>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Flex p="2">
          <HStack spacing="24px">
            <Link href="/">
              <Button variant="link">AlgoNS</Button>
            </Link>
            <Link href="/about">
              <Button variant="link">About</Button>
            </Link>
            <ChakraLink href="/api" isExternal>
              <Button variant="link">API</Button>
            </ChakraLink>
          </HStack>
          <Spacer />
          <Box>
            <Wallet />
          </Box>
        </Flex>
      </nav>
    </header>
      {children}
    {/* <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer> */}
  </Box>
)

export default Layout
