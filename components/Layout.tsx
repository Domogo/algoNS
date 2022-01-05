import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Box, Flex, IconButton, Link as ChakraLink, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react'
import Wallet from './wallet/Wallet'
import { HamburgerIcon } from '@chakra-ui/icons'

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
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
              colorScheme="pink"
            />
            <MenuList>
              <MenuItem>
                <Link href="/">
                  AlgoNS
                </Link>
              </MenuItem>

              <MenuItem>
                <Link href="/about">
                  About
                </Link>
              </MenuItem>
              
              <MenuItem>
                <Link href="/roadmap">
                  Roadmap
                </Link>
              </MenuItem>

              <MenuItem>
                <ChakraLink href="/api" isExternal>
                  Link
                </ChakraLink>
              </MenuItem>
            </MenuList>
          </Menu>
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
