// import MARKET_ABI from 'build/MARKET_ABI.json'
// import NFT_ABI from 'build/NFT_ABI.json'
// import DISTRIBUTOR_ABI from 'build/DISTRIBUTOR_ABI.json'
// import TOKEN_ABI from 'build/TOKEN_ABI.json'

export const ROUTERS = {
    MARKET: {
        // abi: MARKET_ABI,
        address: '0x33e4D2eea06b62503A87F4eD3d6CA9ad30a94898',
    },
    NFT: {
        // abi: NFT_ABI,
        address: '0x8B4CFc3F8aA114d66040517f5dA14F790c900014',
    },
    DISTRIBUTOR: {
        // abi: DISTRIBUTOR_ABI,
        address: '0x827044c16aa55Fa047543455D8ccF1e7A70c8D0B',
    },    
    TOKEN: {
        // abi: TOKEN_ABI,
        address: '0x079F0f5f3Ad15E01a5CD919564A8F52DdE03431B',
    }
}

export const menus = [
    {
        name: 'Pools',
        path: '/pools',
        items: [
            {
                name: 'Discover',
                path: '/discover',
            },
            {
                name: 'Start Launch',
                path: '/launch',
            },
            {
                name: 'Apply for incubator',
                path: '/apply',
            }
        ],
    },
    {
        name: 'Voting',
        path: '/voting',
    },
    {
        name: 'Staking',
        path: '/staking',
    },
    {
        name: 'Money Bin',
        path: '/moneybin',
    },
    {
        name: 'Quackwin',
        path: '/quackwin',
    }
];

export const stepTitles = [
    'Presale Type',
    'Presale Information',
    'Presale Listing',
    'Whitelist',
    'Disclaimer',
];

export const agreements = [
    'I have tested my token with the DxSale app on a test network. (Ex. Ropsten)',
    'My token has a function to disable special transfers or has no special transfers',
    'My token is not already listed on PancakeSwap and I have not given out any tokens to users',
    'I understand tokens deposited to the SALE contract are non-recoverable ( Regardless of success or failure )',
    'I understand fees paid to launch a SALE are non-recoverable',
    'I understand that I have to finalize my sale within 48 hours of hitting the hardcap!',
    'I am using DxSale as a software tool only and am alone responsible for anything I create on it',
    'I understand that I am responsible for following my local laws and regulations incluiding KYC and AML practices',
    'I have read and agree to the terms and conditions',
];