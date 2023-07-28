package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"mingxie/x/tvote/types"
)

func (k Keeper) ListVoter(goCtx context.Context, req *types.QueryListVoterRequest) (*types.QueryListVoterResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx

	return &types.QueryListVoterResponse{}, nil
}
