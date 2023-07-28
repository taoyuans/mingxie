/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "mingxie.tvote";

export interface MsgSaveVoter {
  creator: string;
  address: string;
  name: string;
  age: number;
  vid: number;
}

export interface MsgSaveVoterResponse {
}

function createBaseMsgSaveVoter(): MsgSaveVoter {
  return { creator: "", address: "", name: "", age: 0, vid: 0 };
}

export const MsgSaveVoter = {
  encode(message: MsgSaveVoter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.age !== 0) {
      writer.uint32(32).uint64(message.age);
    }
    if (message.vid !== 0) {
      writer.uint32(40).uint64(message.vid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSaveVoter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSaveVoter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.age = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.vid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSaveVoter {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
      name: isSet(object.name) ? String(object.name) : "",
      age: isSet(object.age) ? Number(object.age) : 0,
      vid: isSet(object.vid) ? Number(object.vid) : 0,
    };
  },

  toJSON(message: MsgSaveVoter): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.name !== undefined && (obj.name = message.name);
    message.age !== undefined && (obj.age = Math.round(message.age));
    message.vid !== undefined && (obj.vid = Math.round(message.vid));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSaveVoter>, I>>(object: I): MsgSaveVoter {
    const message = createBaseMsgSaveVoter();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.name = object.name ?? "";
    message.age = object.age ?? 0;
    message.vid = object.vid ?? 0;
    return message;
  },
};

function createBaseMsgSaveVoterResponse(): MsgSaveVoterResponse {
  return {};
}

export const MsgSaveVoterResponse = {
  encode(_: MsgSaveVoterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSaveVoterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSaveVoterResponse();
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

  fromJSON(_: any): MsgSaveVoterResponse {
    return {};
  },

  toJSON(_: MsgSaveVoterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSaveVoterResponse>, I>>(_: I): MsgSaveVoterResponse {
    const message = createBaseMsgSaveVoterResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SaveVoter(request: MsgSaveVoter): Promise<MsgSaveVoterResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SaveVoter = this.SaveVoter.bind(this);
  }
  SaveVoter(request: MsgSaveVoter): Promise<MsgSaveVoterResponse> {
    const data = MsgSaveVoter.encode(request).finish();
    const promise = this.rpc.request("mingxie.tvote.Msg", "SaveVoter", data);
    return promise.then((data) => MsgSaveVoterResponse.decode(new _m0.Reader(data)));
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
