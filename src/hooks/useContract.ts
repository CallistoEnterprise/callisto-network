import { useMemo } from "react"
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'
// import { ROUTERS } from 'config'

declare let window: any

declare enum ChainId {
    MAINNET = 56,
    BSCTESTNET = 97,
    BRISE = 32520
}

export const useActiveWeb3React = (): Web3ReactContextInterface<Web3Provider> & { chainId?: ChainId } => {
    const context = useWeb3ReactCore<Web3Provider>()
    const contextNetwork = useWeb3ReactCore<Web3Provider>('NETWORK')
    return context.active ? context : contextNetwork
}

export const useContract = (address: string | undefined, ABI: any, withSignerIfPossible = true): Contract | null => {
    const { library } = useActiveWeb3React()
    return useMemo(() => {
        if (!address || !ABI || !library) {
            return null
        }
        try {
            return new (window as any).web3.eth.Contract(ABI, address).methods
        } catch (error) {
            console.error('Failed to get contract', error)
            return null
        }
    }, [address, ABI, library])
}

// export const useMarketContract = (): Contract | null => {
//     return useContract(ROUTERS.MARKET.address, ROUTERS.MARKET.abi, false)
// }

// export const useNFTContract = (): Contract | null => {
//     return useContract(ROUTERS.NFT.address, ROUTERS.NFT.abi, false)
// }

// export const useDistributorContract = (): Contract | null => {
//     return useContract(ROUTERS.DISTRIBUTOR.address, ROUTERS.DISTRIBUTOR.abi, false)
// }

// export const useTokenContract = (): Contract | null => {
//     return useContract(ROUTERS.TOKEN.address, ROUTERS.TOKEN.abi, false)
// }