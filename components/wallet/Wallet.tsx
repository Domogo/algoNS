import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useWalletContext } from "context/wallet";

const Wallet = () => {
  const { killSession, walletConnectInit, connected, address } = useWalletContext(); 

  return (
    <>
      {!connected ? (
        <Button onClick={walletConnectInit} colorScheme="pink">
          Connect Wallet
        </Button>
      ) : (
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="pink"
            variant="outline"
          >
            My Wallet
          </MenuButton>
          <MenuList>
            <MenuItem>
              {address}
            </MenuItem>
            <MenuItem onClick={killSession}>
              Disconnect Wallet
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </>
  );
};

export default Wallet;
