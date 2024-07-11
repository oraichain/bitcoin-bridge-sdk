/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function newWrappedHeader(a: number, b: number): number;
export function newHeaderConfig(a: number, b: number, c: number): void;
export function newWorkHeader(a: number): number;
export function encodeBlockHeader(a: number, b: number): void;
export function decodeBlockHeader(a: number, b: number, c: number): void;
export function encodeScript(a: number, b: number): void;
export function decodeScript(a: number, b: number, c: number): void;
export function encodeUint256(a: number, b: number): void;
export function decodeUint256(a: number, b: number, c: number): void;
export function newRawSignatorySet(a: number, b: number, c: number, d: number): number;
export function newSignatorySet(a: number, b: number, c: number, d: number, e: number): void;
export function getGlobalBridgeFeeRate(): number;
export function getGlobalSigsetThreshold(a: number): void;
export function getGlobalHeaderBatchSize(): number;
export function getMaxSignatories(): number;
export function rustsecp256k1_v0_6_1_context_create(a: number): number;
export function rustsecp256k1_v0_6_1_context_destroy(a: number): void;
export function rustsecp256k1_v0_6_1_default_illegal_callback_fn(a: number, b: number): void;
export function rustsecp256k1_v0_6_1_default_error_callback_fn(a: number, b: number): void;
export function __wbindgen_malloc(a: number, b: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number, d: number): number;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_free(a: number, b: number, c: number): void;
export function __wbindgen_exn_store(a: number): void;
