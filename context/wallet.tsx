import { createContext, FC, useContext, useEffect, useState } from "react";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
import { IInternalEvent } from "@walletconnect/types";

interface WalletContext {
  connector: WalletConnect;
  connected: boolean;
  killSession: () => void;
  walletConnectInit: () => void;
}

const walletContext = createContext<WalletContext>({} as WalletContext);

export const WalletProvider: FC = ({ children }) => {
  const [connector, setConnector] = useState<WalletConnect>();
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    walletConnectInit();
  }, []);

  const walletConnectInit = async () => {
    const bridge = "https://bridge.walletconnect.org";
    setConnector(new WalletConnect({ bridge, qrcodeModal: QRCodeModal }));

    if (connector && !connector.connected) {
      await connector.createSession();
    } 

    subscribeToEvents();
  };

  const subscribeToEvents = () => {
    if (connector) {
      connector.on("session_update", (error, payload) => {
        console.log("session_update", error, payload);
        if (error) throw error;

        // TODO: handle session_update
        const { accounts } = payload.params[0];
        onSessionUpdate(accounts);
      });

      connector.on("connect", (error, payload) => {
        console.log("connect", error, payload);
        if (error) throw error;

        onConnect(payload);
      });

      connector.on("disconnect", (error, payload) => {
        console.log("disconnect", error, payload);
        if (error) throw error;

        onDisconnect();
      });

      if (connector.connected) {
        setAccounts(connector.accounts);
        setAddress(connector.accounts[0]);
        setConnected(true);
      }

      setConnector(connector);      
    }
  };

  const onSessionUpdate = async (accounts: string[]) => {
    const address = accounts[0];
    setAddress(address);
    setAccounts(accounts);
    await getAccountAssets();
  }

  const getAccountAssets = async () => {
    // get account assets
  }

  const onConnect = (payload: IInternalEvent) => {
    setAccounts(payload.params[0]);
    setAddress(payload.params[0][0]);
    setConnected(true);
  };

  const onDisconnect = () => {
    resetApp();
  };

  const killSession = () => {
    if (connector) {
      connector.killSession();
      setConnected(false);
    }
    resetApp();
  };

  const resetApp = () => {
    setAddress("");
    setAccounts([]);
    setConnected(false);
  }

  return <walletContext.Provider value={{ connector, connected, killSession, walletConnectInit }}>{children}</walletContext.Provider>;
};

export const useWalletContext = () => useContext(walletContext);