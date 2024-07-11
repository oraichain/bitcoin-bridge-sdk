import { SimulateCosmWasmClient } from '@oraichain/cw-simulate';
import * as artifacts from '@oraichain/cw-bitcoin-contracts-build';
import * as wasm from '@oraichain/cw-bitcoin-wasm';
import { CwBitcoinClient } from '@oraichain/cw-bitcoin-contracts-sdk';

const senderAddress = 'orai1g4h64yjt0fvzv5v2j8tyfnpe5kmnetejvfgs7g';
const client = new SimulateCosmWasmClient({ bech32Prefix: 'orai', chainId: 'Oraichain' });

(async () => {
  const { contractAddress } = await artifacts.deployContract(client, senderAddress, {});
  const cwBitcoin = new CwBitcoinClient(client, senderAddress, contractAddress);

  const headerConfig = wasm.newHeaderConfig(802368, {
    version: 1073676288,
    prev_blockhash: '000000000000000000034e1a8f7c1efee7c36209a1556a377568d6368431dd17',
    merkle_root: '7718a5c199d9a5b6ad3d1424db6d4212bbbc1cbfe573caf58f129d24e40b15eb',
    time: 1691584068,
    bits: 386228059,
    nonce: 4602308
  });

  console.log(headerConfig);
})();
