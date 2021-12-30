import { Button } from "@chakra-ui/react";
import { useWalletContext } from "context/wallet";

const Wallet = () => {
  const { killSession, walletConnectInit, connected } = useWalletContext(); 

  return (
    <>
      {!connected ? (
        <Button onClick={walletConnectInit} colorScheme="pink">
          Connect Wallet
        </Button>
      ) : (
        <Button onClick={killSession} variant="outline" colorScheme="pink">
          Disconnect Wallet
        </Button>
      )}
    </>
  );
};

export default Wallet;
