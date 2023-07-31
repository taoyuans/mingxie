package keeper

import (
	"context"

	"mingxie/x/tvote/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SaveVoter(goCtx context.Context, msg *types.MsgSaveVoter) (*types.MsgSaveVoterResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var post = types.Voter{
		Vid:     msg.Vid,
		Age:     msg.Age,
		Name:    msg.Name,
		Address: msg.Address,
		Creator: msg.Creator,
	}
	_ = k.AppendVoter(
		ctx,
		post,
	)

	return &types.MsgSaveVoterResponse{}, nil
}
