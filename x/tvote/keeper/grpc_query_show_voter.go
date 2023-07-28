package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"mingxie/x/tvote/types"
)

func (k Keeper) ShowVoter(goCtx context.Context, req *types.QueryShowVoterRequest) (*types.QueryShowVoterResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx

	return &types.QueryShowVoterResponse{}, nil
}
