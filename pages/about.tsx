import Layout from 'components/Layout'
import { Heading, VStack, Text } from '@chakra-ui/react'

const AboutPage = () => (
  <Layout>
    <VStack spacing="4">
      <Heading>About AlgoNS</Heading>
      <Text>AlgoNS is a simple dApp providing DNS-like functionality to the Algorand blockchain.</Text>
      <Text>AlgoNS users can reserve their .algo domain for free as well as look up currently taken domains.</Text>
      <Text>For developers, there exists a public API which can be used to look for [Domain - Wallet Address] matches. See API documentation for details and examples.</Text>
    </VStack>
  </Layout>
)

export default AboutPage
