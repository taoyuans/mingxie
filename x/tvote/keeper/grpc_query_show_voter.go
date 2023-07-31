package keeper

import (
	"context"

	"mingxie/x/tvote/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ShowVoter(goCtx context.Context, req *types.QueryShowVoterRequest) (*types.QueryShowVoterResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	voter, found := k.GetVoter(ctx, req.Vid)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryShowVoterResponse{Voter: voter}, nil
}
