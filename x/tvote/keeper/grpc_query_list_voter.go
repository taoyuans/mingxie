package keeper

import (
	"context"

	"mingxie/x/tvote/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ListVoter(goCtx context.Context, req *types.QueryListVoterRequest) (*types.QueryListVoterResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var voters []types.Voter
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	voterStore := prefix.NewStore(store, types.KeyPrefix(types.VoterKey))

	pageRes, err := query.Paginate(voterStore, req.Pagination, func(key []byte, value []byte) error {
		var post types.Voter
		if err := k.cdc.Unmarshal(value, &post); err != nil {
			return err
		}

		voters = append(voters, post)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryListVoterResponse{Voter: voters, Pagination: pageRes}, nil
}
