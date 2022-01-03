import Layout from "components/Layout";
import { Box, Button, Flex, Heading, Input, InputGroup, InputRightAddon, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { Domain } from "@prisma/client";
import Link from "next/link";
import { useWalletContext } from "context/wallet";

const IndexPage = () => {
  const [value, setValue] = useState("");
  const [searchData, setSearchData] = useState<Domain>();
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [loading, setLoading] = useState(false);
  const { address, connected } = useWalletContext(); 


  const handleChange = (e: any) => {
    setSearchTriggered(false);
    setValue(e.target.value);
  };

  const handleSearch = () => {
    setLoading(true);
    axios.get(`/api/domain/${value}`).then(res => {
      setSearchTriggered(true);
      setSearchData(res.data);
      setLoading(false);
    });
  }

  const reserveDomain = () => {
    axios.post(`/api/domain/`, {params: {domain: value, publicKey: address }}).then(res => {console.log(res)})
  }

  return (
    <Layout>
      <Flex direction="column" align="center" justify="center" gap="20" mt="20">
        <Heading as="h1" size="4xl">AlgoNS - Algorand Name Service.</Heading>
        <Flex direction="column" align="center" gap="4" width="100%">
          <Heading size="lg">Get your FREE .algo domain now!</Heading>
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
            <Button onClick={handleSearch} size="lg" colorScheme="pink" minW="100px">{loading ? <Spinner size="xs"/> : "Search"}</Button>
          </Flex>

          {loading && <Spinner thickness="4px" color="pink.500" size="lg" />}
          { searchData && !searchTriggered ? (
            <div>{`${searchData.name}.${searchData.suffix}`} is already taken and belongs to {searchData.publicKey}</div>
          )
          : !searchData && searchTriggered ?
          (
            <Box>
              {value}.algo is available!
              <Button colorScheme="pink" size="sm" onClick={reserveDomain} disabled={!connected}>Link To Wallet!</Button>
              { !connected && <div>Connect to your wallet to reserve this domain!</div>}
              *Note: Each wallet is limited to one domain.
            </Box>
          )
          : (
            <></>
          )}
        </Flex>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
