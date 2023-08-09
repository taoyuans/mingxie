/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { ProposalDesc } from "./proposal_desc";
import { Voter } from "./voter";

export const protobufPackage = "mingxie.tvote";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryShowVoterRequest {
  vid: number;
}

export interface QueryShowVoterResponse {
  voter: Voter | undefined;
}

export interface QueryListVoterRequest {
  pagination: PageRequest | undefined;
}

export interface QueryListVoterResponse {
  voter: Voter[];
  pagination: PageResponse | undefined;
}

export interface QueryListProposalDescRequest {
  pagination: PageRequest | undefined;
}

export interface QueryListProposalDescResponse {
  proposalDesc: ProposalDesc[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryShowVoterRequest(): QueryShowVoterRequest {
  return { vid: 0 };
}

export const QueryShowVoterRequest = {
  encode(message: QueryShowVoterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vid !== 0) {
      writer.uint32(8).uint64(message.vid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowVoterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowVoterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowVoterRequest {
    return { vid: isSet(object.vid) ? Number(object.vid) : 0 };
  },

  toJSON(message: QueryShowVoterRequest): unknown {
    const obj: any = {};
    message.vid !== undefined && (obj.vid = Math.round(message.vid));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryShowVoterRequest>, I>>(object: I): QueryShowVoterRequest {
    const message = createBaseQueryShowVoterRequest();
    message.vid = object.vid ?? 0;
    return message;
  },
};

function createBaseQueryShowVoterResponse(): QueryShowVoterResponse {
  return { voter: undefined };
}

export const QueryShowVoterResponse = {
  encode(message: QueryShowVoterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voter !== undefined) {
      Voter.encode(message.voter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryShowVoterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryShowVoterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = Voter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryShowVoterResponse {
    return { voter: isSet(object.voter) ? Voter.fromJSON(object.voter) : undefined };
  },

  toJSON(message: QueryShowVoterResponse): unknown {
    const obj: any = {};
    message.voter !== undefined && (obj.voter = message.voter ? Voter.toJSON(message.voter) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryShowVoterResponse>, I>>(object: I): QueryShowVoterResponse {
    const message = createBaseQueryShowVoterResponse();
    message.voter = (object.voter !== undefined && object.voter !== null) ? Voter.fromPartial(object.voter) : undefined;
    return message;
  },
};

function createBaseQueryListVoterRequest(): QueryListVoterRequest {
  return { pagination: undefined };
}

export const QueryListVoterRequest = {
  encode(message: QueryListVoterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListVoterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListVoterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryListVoterRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryListVoterRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListVoterRequest>, I>>(object: I): QueryListVoterRequest {
    const message = createBaseQueryListVoterRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryListVoterResponse(): QueryListVoterResponse {
  return { voter: [], pagination: undefined };
}

export const QueryListVoterResponse = {
  encode(message: QueryListVoterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.voter) {
      Voter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListVoterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListVoterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter.push(Voter.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryListVoterResponse {
    return {
      voter: Array.isArray(object?.voter) ? object.voter.map((e: any) => Voter.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryListVoterResponse): unknown {
    const obj: any = {};
    if (message.voter) {
      obj.voter = message.voter.map((e) => e ? Voter.toJSON(e) : undefined);
    } else {
      obj.voter = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListVoterResponse>, I>>(object: I): QueryListVoterResponse {
    const message = createBaseQueryListVoterResponse();
    message.voter = object.voter?.map((e) => Voter.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryListProposalDescRequest(): QueryListProposalDescRequest {
  return { pagination: undefined };
}

export const QueryListProposalDescRequest = {
  encode(message: QueryListProposalDescRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListProposalDescRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListProposalDescRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryListProposalDescRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryListProposalDescRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListProposalDescRequest>, I>>(object: I): QueryListProposalDescRequest {
    const message = createBaseQueryListProposalDescRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryListProposalDescResponse(): QueryListProposalDescResponse {
  return { proposalDesc: [], pagination: undefined };
}

export const QueryListProposalDescResponse = {
  encode(message: QueryListProposalDescResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proposalDesc) {
      ProposalDesc.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListProposalDescResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListProposalDescResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalDesc.push(ProposalDesc.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryListProposalDescResponse {
    return {
      proposalDesc: Array.isArray(object?.proposalDesc)
        ? object.proposalDesc.map((e: any) => ProposalDesc.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryListProposalDescResponse): unknown {
    const obj: any = {};
    if (message.proposalDesc) {
      obj.proposalDesc = message.proposalDesc.map((e) => e ? ProposalDesc.toJSON(e) : undefined);
    } else {
      obj.proposalDesc = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListProposalDescResponse>, I>>(
    object: I,
  ): QueryListProposalDescResponse {
    const message = createBaseQueryListProposalDescResponse();
    message.proposalDesc = object.proposalDesc?.map((e) => ProposalDesc.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of ShowVoter items. */
  ShowVoter(request: QueryShowVoterRequest): Promise<QueryShowVoterResponse>;
  /** Queries a list of ListVoter items. */
  ListVoter(request: QueryListVoterRequest): Promise<QueryListVoterResponse>;
  /** Queries a list of ListProposalDesc items. */
  ListProposalDesc(request: QueryListProposalDescRequest): Promise<QueryListProposalDescResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.ShowVoter = this.ShowVoter.bind(this);
    this.ListVoter = this.ListVoter.bind(this);
    this.ListProposalDesc = this.ListProposalDesc.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("mingxie.tvote.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  ShowVoter(request: QueryShowVoterRequest): Promise<QueryShowVoterResponse> {
    const data = QueryShowVoterRequest.encode(request).finish();
    const promise = this.rpc.request("mingxie.tvote.Query", "ShowVoter", data);
    return promise.then((data) => QueryShowVoterResponse.decode(new _m0.Reader(data)));
  }

  ListVoter(request: QueryListVoterRequest): Promise<QueryListVoterResponse> {
    const data = QueryListVoterRequest.encode(request).finish();
    const promise = this.rpc.request("mingxie.tvote.Query", "ListVoter", data);
    return promise.then((data) => QueryListVoterResponse.decode(new _m0.Reader(data)));
  }

  ListProposalDesc(request: QueryListProposalDescRequest): Promise<QueryListProposalDescResponse> {
    const data = QueryListProposalDescRequest.encode(request).finish();
    const promise = this.rpc.request("mingxie.tvote.Query", "ListProposalDesc", data);
    return promise.then((data) => QueryListProposalDescResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
