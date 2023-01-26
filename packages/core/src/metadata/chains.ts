import { Chains } from './types'
import {
  arbitrumImage,
  consensyszkImage,
  ethereumImage,
  gnosisImage,
  novaImage,
  optimismImage,
  polygonImage,
  zksyncImage
} from './assets'

export const chains: Chains = {
  ethereum: {
    name: 'Ethereum',
    slug: 'ethereum',
    image: ethereumImage
  },
  gnosis: {
    name: 'Gnosis',
    slug: 'gnosis',
    image: gnosisImage
  },
  polygon: {
    name: 'Polygon',
    slug: 'polygon',
    image: polygonImage
  },
  arbitrum: {
    name: 'Arbitrum',
    slug: 'arbitrum',
    image: arbitrumImage
  },
  optimism: {
    name: 'Optimism',
    slug: 'optimism',
    image: optimismImage
  },
  nova: {
    name: 'Nova',
    slug: 'nova',
    image: novaImage
  },
  zksync: {
    name: 'zkSync',
    slug: 'zksync',
    image: zksyncImage
  },
  consensyszk: {
    name: 'ConsenSys zkEVM',
    slug: 'consensyszk',
    image: consensyszkImage
  }
}
