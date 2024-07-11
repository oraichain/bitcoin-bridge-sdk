/* tslint:disable */
/* eslint-disable */
/**
* @param {Adapter} header
* @param {number} height
* @returns {WrappedHeader}
*/
export function newWrappedHeader(header: Adapter, height: number): WrappedHeader;
/**
* @param {number} height
* @param {any} block_header
* @returns {HeaderConfig}
*/
export function newHeaderConfig(height: number, block_header: any): HeaderConfig;
/**
* @param {HeaderConfig} header_config
* @returns {WorkHeader}
*/
export function newWorkHeader(header_config: HeaderConfig): WorkHeader;
/**
* @param {any} value
* @returns {Uint8Array}
*/
export function encodeBlockHeader(value: any): Uint8Array;
/**
* @param {Uint8Array} value
* @returns {any}
*/
export function decodeBlockHeader(value: Uint8Array): any;
/**
* @param {any} value
* @returns {Uint8Array}
*/
export function encodeScript(value: any): Uint8Array;
/**
* @param {Uint8Array} value
* @returns {any}
*/
export function decodeScript(value: Uint8Array): any;
/**
* @param {any} value
* @returns {Uint8Array}
*/
export function encodeUint256(value: any): Uint8Array;
/**
* @param {Uint8Array} value
* @returns {any}
*/
export function decodeUint256(value: Uint8Array): any;
/**
* @param {SignatorySet} sigset
* @param {number} bridge_fee_rate
* @param {number} miner_fee_rate
* @param {boolean} deposits_enabled
* @returns {RawSignatorySet}
*/
export function newRawSignatorySet(sigset: SignatorySet, bridge_fee_rate: number, miner_fee_rate: number, deposits_enabled: boolean): RawSignatorySet;
/**
* @param {string} hex_script
* @param {bigint} numerator
* @param {bigint} denominator
* @returns {SignatorySet}
*/
export function newSignatorySet(hex_script: string, numerator: bigint, denominator: bigint): SignatorySet;
/**
* @returns {number}
*/
export function getGlobalBridgeFeeRate(): number;
/**
* @returns {BigUint64Array}
*/
export function getGlobalSigsetThreshold(): BigUint64Array;
/**
* @returns {number}
*/
export function getGlobalHeaderBatchSize(): number;
/**
* @returns {bigint}
*/
export function getMaxSignatories(): bigint;
export interface Adapter<T> {
    inner: T;
}

export interface HeaderConfig {
    max_length: number;
    max_time_increase: number;
    trusted_height: number;
    retarget_interval: number;
    target_spacing: number;
    target_timespan: number;
    max_target: number;
    retargeting: boolean;
    min_difficulty_blocks: boolean;
    trusted_header: Adapter<BlockHeader>;
}

export interface WorkHeader {
    chain_work: Adapter<Uint256>;
    header: WrappedHeader;
}

export interface HeaderQueue {
    current_work: Adapter<Uint256>;
    config: HeaderConfig;
}

export interface WrappedHeader {
    height: number;
    header: Adapter<BlockHeader>;
}

export interface DepositsQuery {
    receiver: string;
}

export interface DepositAddress {
    sigset_index: number;
    deposit_addr: string;
}

export interface Sigset {
    sigset_index: number;
}

export interface RawSignatorySet {
    signatories: RawSignatory[];
    index: number;
    bridgeFeeRate: number;
    minerFeeRate: number;
    depositsEnabled: boolean;
    threshold: [number, number];
}

export interface RawSignatory {
    voting_power: number;
    pubkey: number[];
}

export interface WatchedScripts {
    scripts: Record<string, [Dest, number]>;
    sigsets: Record<number, [SignatorySet, Dest[]]>;
}

export interface WatchedScriptStore {
    scripts: WatchedScripts;
    file_path: string;
}

export interface Signatory {
    voting_power: number;
    pubkey: Pubkey;
}

export interface SignatorySet {
    create_time: number;
    present_vp: number;
    possible_vp: number;
    index: number;
    signatories: Signatory[];
}

export interface Share {
    power: number;
    sig: Signature | null;
}

export interface ThresholdSig {
    threshold: number;
    signed: number;
    message: Message;
    len: number;
    sigs: [Pubkey, Share][];
}

export interface Pubkey {
    bytes: number[];
}

export type Signature = number[];

export type Dest = { Address: string } | { Ibc: IbcDest };

export interface IbcDest {
    source_port: string;
    source_channel: string;
    timeout_timestamp: number;
    memo: string;
}

export interface DepositIndex {
    receiver_index: ReceiverIndex;
}

export interface DepositInfo {
    deposit: Deposit;
    confirmations: number;
}

export interface Deposit {
    txid: Txid;
    vout: number;
    amount: number;
    height: number | null;
}

