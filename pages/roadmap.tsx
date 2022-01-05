import { Heading, VStack, Text } from "@chakra-ui/react"
import Layout from "components/Layout"


const Roadmap = () => (
  <Layout>
    <VStack spacing="4">
      <Heading>Roadmap</Heading>
      <Text>Strict timetable for feature implementation will come later. For now this page serves as a list of things we'd like to implement.</Text>
      <Text>Market AlgoNS and try to get people to use the dApp.</Text>
      <Text>Get dApps within the Algorand ecosystem to start using AlgoNS on their amazing dApps.</Text>
      <Text>Tradeable domains, through NFTs.</Text>
      <Text>UI improvements and overall glow up.</Text>
      <Text>AlgoNS ASA token. (We're looking into how best this would fit the use case or if it is even necessary).</Text>
      <Text>Different TLDs, not just .algo</Text>
      <Text>Developer SDK.</Text>
    </VStack>
  </Layout>
)

export default Roadmap