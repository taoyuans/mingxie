package keeper

import (
	"encoding/binary"
	"mingxie/x/tvote/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) AppendVoter(ctx sdk.Context, voter types.Voter) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VoterKey))
	appendedValue := k.cdc.MustMarshal(&voter)
	store.Set(GetVoterIDBytes(voter.Vid), appendedValue)
	return true
}

func GetVoterIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

func (k Keeper) GetVoter(ctx sdk.Context, id uint64) (val types.Voter, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.VoterKey))
	b := store.Get(GetVoterIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}
