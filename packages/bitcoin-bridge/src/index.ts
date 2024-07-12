import { SimulateCosmWasmClient } from '@oraichain/cw-simulate';
import * as artifacts from '@oraichain/cw-bitcoin-contracts-build';
import * as wasm from '@oraichain/cw-bitcoin-wasm';
import { CwBitcoinClient } from '@oraichain/cw-bitcoin-contracts-sdk';

const senderAddress = 'orai1g4h64yjt0fvzv5v2j8tyfnpe5kmnetejvfgs7g';
const client = new SimulateCosmWasmClient({ bech32Prefix: 'orai', chainId: 'Oraichain' });

(async () => {
  const { contractAddress } = await artifacts.deployContract(client, senderAddress, {});
  const cwBitcoin = new CwBitcoinClient(client, senderAddress, contractAddress);

  let headerConfig = wasm.newHeaderConfig(802368, {
    version: 1073676288,
    prev_blockhash: '000000000000000000034e1a8f7c1efee7c36209a1556a377568d6368431dd17',
    merkle_root: '7718a5c199d9a5b6ad3d1424db6d4212bbbc1cbfe573caf58f129d24e40b15eb',
    time: 1691584068,
    bits: 386228059,
    nonce: 4602308
  });

  console.log(headerConfig);
  let workHeader = wasm.newWorkHeader(headerConfig);

  let ret = await cwBitcoin.updateHeaderConfig({ config: headerConfig });
  console.log(ret);

  ret = await cwBitcoin.addWorkHeader({ header: workHeader });

  for (let i = 0; i < 10; ++i) {
    let btcHeight = await cwBitcoin.headerHeight();

    headerConfig = wasm.newHeaderConfig(btcHeight, {
      version: 0,
      prev_blockhash: '0'.repeat(64),
      merkle_root: '0'.repeat(64),
      time: 0,
      bits: 0,
      nonce: 0
    });

    ret = await cwBitcoin.addWorkHeader({ header: workHeader });
    console.log(ret);
  }

  let h = await cwBitcoin.headerHeight();

  const try_relay = async (height: number) => {
    // TODO: make test cases not fail at irrelevant steps in relay_deposit
    // (either by passing in valid input, or by handling other error paths)

    let btc_tx: wasm.Transaction = {
      input: [],
      lock_time: 0,
      output: [],
      version: 0
    };

    let btc_proof: wasm.PartialMerkleTree = { num_transactions: 1, bits: [true], hashes: ['0'.repeat(64)] };

    try {
      ret = await cwBitcoin.relayDeposit({
        btcHeight: height,
        btcTx: wasm.toBinaryTransaction(btc_tx),
        btcProof: wasm.toBinaryPartialMerkleTree(btc_proof),
        btcVout: 0,
        sigsetIndex: 0,
        dest: { address: 'bob' }
      });
    } catch (ex) {
      return ex.message;
    }
  };

  console.log(await try_relay(h + 100));
  console.log(await try_relay(h - 100));
})();
