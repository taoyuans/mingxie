package keeper

import (
	"context"

	"mingxie/x/tvote/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SaveProposalDesc(goCtx context.Context, msg *types.MsgSaveProposalDesc) (*types.MsgSaveProposalDescResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var post = types.ProposalDesc{
		Pid:     msg.Pid,
		Vid:     msg.Vid,
		Desc:    msg.Desc,
		Creator: msg.Creator,
	}
	_ = k.AppendProposalDesc(
		ctx,
		post,
	)

	return &types.MsgSaveProposalDescResponse{}, nil
}
