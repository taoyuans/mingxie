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

func (k Keeper) ListProposalDesc(goCtx context.Context, req *types.QueryListProposalDescRequest) (*types.QueryListProposalDescResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var proposalDescs []types.ProposalDesc
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	proposalDescStore := prefix.NewStore(store, types.KeyPrefix(types.ProposalDescKey))

	pageRes, err := query.Paginate(proposalDescStore, req.Pagination, func(key []byte, value []byte) error {
		var post types.ProposalDesc
		if err := k.cdc.Unmarshal(value, &post); err != nil {
			return err
		}

		proposalDescs = append(proposalDescs, post)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryListProposalDescResponse{ProposalDesc: proposalDescs, Pagination: pageRes}, nil
}
