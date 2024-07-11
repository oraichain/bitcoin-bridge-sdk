## Generate code and docs

```bash

# demo stargate repo: https://github.com/oraichain/demo-stargate.git

# build code:
cwtools build ../cw-bitcoin/contracts/cw-bitcoin -o packages/contracts-build/data

# gen schema
cwtools build ../cw-bitcoin/contracts/cw-bitcoin -s

# gen code:
cwtools gents ../cw-bitcoin/contracts/cw-bitcoin -o packages/contracts-sdk/src
# gen doc:
yarn docs

# build
yarn build . --outDir build
# build individual packages
yarn build packages/contracts-sdk
yarn build packages/contracts-build
# publish package
yarn deploy packages/contracts-sdk --patch
yarn deploy packages/contracts-build --patch

# update comments:
git apply patches/contracts-sdk.patch
# edit contracts-sdk
git diff packages/contracts-sdk > patches/contracts-sdk.patch
# rollback
git checkout packages/contracts-sdk
```
