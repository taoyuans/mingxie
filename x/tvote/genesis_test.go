package tvote_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "mingxie/testutil/keeper"
	"mingxie/testutil/nullify"
	"mingxie/x/tvote"
	"mingxie/x/tvote/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.TvoteKeeper(t)
	tvote.InitGenesis(ctx, *k, genesisState)
	got := tvote.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
