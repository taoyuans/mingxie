package keeper

import (
	"encoding/binary"
	"mingxie/x/tvote/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) AppendProposalDesc(ctx sdk.Context, proposalDesc types.ProposalDesc) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProposalDescKey))
	appendedValue := k.cdc.MustMarshal(&proposalDesc)
	store.Set(GetProposalDescIDBytes(proposalDesc.Vid), appendedValue)
	return true
}

func GetProposalDescIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

func (k Keeper) GetProposalDesc(ctx sdk.Context, id uint64) (val types.ProposalDesc, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProposalDescKey))
	b := store.Get(GetProposalDescIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}
