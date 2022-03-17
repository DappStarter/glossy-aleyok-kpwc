require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name radar ranch quality hunt flower army giggle'; 
let testAccounts = [
"0x1fff6204e59f1a93abadace0b49e5308ca00e3a379ef32d430829e6fba00bbf5",
"0x9cedf50d4d5f881519130eefddeaeb5baef55273272ed525c3a71f245b2763f8",
"0xb07f139620630cfd97afe713ed4b7d33638869e366c3d91f2f0bc57862e60a93",
"0x4b5234d6f1e7be49f37bd7b82dda36bef6f4cf5050f1bb87cb2c436812b7f11d",
"0x91e959612794c13a020ddda2b8a5f57ec999a9965d49cdb39e070e94524d9a70",
"0x3a7737783ae009ed449326f8126d4f4c7e42544ed6bf08818cd177ee3830f3a0",
"0x1e59b477596c6aeae53485058f62840ba33c71e78ce1a7adab36e3c2b15a5a1d",
"0x9c39faf35ab3e691fa2769d14a8b7c18322c9df825a157cdc889577579ba359b",
"0xc9ea7eb9977c08303ec4365f4efc79ccb3872dd952c4e94b6b2df5ec058cd91f",
"0x0615a28c8fbe4145e4d5cd71c6ed6dbb833055e5dd3e0a7f2d88258e07fe70a3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


