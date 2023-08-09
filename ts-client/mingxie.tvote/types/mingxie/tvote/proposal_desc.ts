/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "mingxie.tvote";

export interface ProposalDesc {
  desc: string;
  vid: number;
  pid: number;
  creator: string;
}

function createBaseProposalDesc(): ProposalDesc {
  return { desc: "", vid: 0, pid: 0, creator: "" };
}

export const ProposalDesc = {
  encode(message: ProposalDesc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.desc !== "") {
      writer.uint32(10).string(message.desc);
    }
    if (message.vid !== 0) {
      writer.uint32(16).uint64(message.vid);
    }
    if (message.pid !== 0) {
      writer.uint32(24).uint64(message.pid);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProposalDesc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalDesc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.desc = reader.string();
          break;
        case 2:
          message.vid = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.pid = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProposalDesc {
    return {
      desc: isSet(object.desc) ? String(object.desc) : "",
      vid: isSet(object.vid) ? Number(object.vid) : 0,
      pid: isSet(object.pid) ? Number(object.pid) : 0,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: ProposalDesc): unknown {
    const obj: any = {};
    message.desc !== undefined && (obj.desc = message.desc);
    message.vid !== undefined && (obj.vid = Math.round(message.vid));
    message.pid !== undefined && (obj.pid = Math.round(message.pid));
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProposalDesc>, I>>(object: I): ProposalDesc {
    const message = createBaseProposalDesc();
    message.desc = object.desc ?? "";
    message.vid = object.vid ?? 0;
    message.pid = object.pid ?? 0;
    message.creator = object.creator ?? "";
    return message;
  },
};

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
