package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"mingxie/x/tvote/types"
)

func (k msgServer) SaveVoter(goCtx context.Context, msg *types.MsgSaveVoter) (*types.MsgSaveVoterResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgSaveVoterResponse{}, nil
}
