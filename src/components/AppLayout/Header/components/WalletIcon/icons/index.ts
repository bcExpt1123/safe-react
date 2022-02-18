// Icons
import metamaskIcon from './icon-metamask.png'
import walletConnectIcon from './icon-wallet-connect.svg'
import trezorIcon from './icon-trezor.svg'
import ledgerIcon from './icon-ledger.svg'
import trustIcon from './icon-trust.svg'
import latticeIcon from './icon-lattice.svg'
import fortmaticIcon from './icon-fortmatic.svg'
import portisIcon from './icon-portis.svg'
import authereumIcon from './icon-authereum.png'
import torusIcon from './icon-torus.svg'
import coinbaseIcon from './icon-coinbase.svg'
import operaIcon from './icon-opera.png'
import squarelinkIcon from './icon-squarelink.png'
import keystoneIcon from './icon-keystone.png'

import { WALLET_PROVIDER } from 'src/logic/wallets/getWeb3'

const WALLET_ICONS: { [key in WALLET_PROVIDER]: { src: string; height: number } } = {
  [WALLET_PROVIDER.METAMASK]: {
    src: metamaskIcon.src,
    height: 25,
  },
  [WALLET_PROVIDER.WALLETCONNECT]: {
    src: walletConnectIcon.src,
    height: 25,
  },
  [WALLET_PROVIDER.TREZOR]: {
    src: trezorIcon.src,
    height: 25,
  },
  [WALLET_PROVIDER.LEDGER]: {
    src: ledgerIcon.src,
    height: 25,
  },
  [WALLET_PROVIDER.TRUST]: {
    src: trustIcon.src,
    height: 25,
  },
  [WALLET_PROVIDER.LATTICE]: {
    src: latticeIcon.src,
    height: 41,
  },
  [WALLET_PROVIDER.KEYSTONE]: {
    src: keystoneIcon.src,
    height: 41,
  },
  [WALLET_PROVIDER.FORTMATIC]: {
    src: fortmaticIcon.src,
    height: 25,
  },
  [WALLET_PROVIDER.PORTIS]: {
    src: portisIcon.src,
    height: 25,
  },
  [WALLET_PROVIDER.AUTHEREUM]: {
    src: authereumIcon.src,
    height: 25,
  },
  [WALLET_PROVIDER.TORUS]: {
    src: torusIcon.src,
    height: 30,
  },
  [WALLET_PROVIDER.OPERA]: {
    src: operaIcon.src,
    height: 25,
  },
  [WALLET_PROVIDER.COINBASE_WALLET]: {
    src: coinbaseIcon.src,
    height: 25,
  },
  [WALLET_PROVIDER.SQUARELINK]: {
    src: squarelinkIcon.src,
    height: 25,
  },
}

export default WALLET_ICONS
