import Layout from "components/Layout";
import { Button, Flex, Heading, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { useState } from "react";

const IndexPage = () => {

  const [value, setValue] = useState("");
  const handleChange = (e: any) => setValue(e.target.value);

  const handleSearch = () => {

  }

  return (
    <Layout>
      <Flex direction="column" align="center" justify="center" gap="10" mt="20">
        <Heading as="h1" size="4xl">AlgoNS - Algorand Name Service</Heading>
        <Flex direction="column" align="center" gap="4" width="100%">
          <Heading size="lg">Reserve or look up an Algorand Domain</Heading>
          <Flex gap="2" width="100%" justify="center">
            <InputGroup 
              size="lg"
              maxW="50%"
            >
              <Input
                placeholder="Search for an Algorand Domain"
                value={value}
                onChange={handleChange}
              />
              <InputRightAddon 
                children=".algo"
              />
            </InputGroup>
            <Button onClick={handleSearch} size="lg" colorScheme="pink">Search</Button>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
