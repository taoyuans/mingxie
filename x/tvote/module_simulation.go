package tvote

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"mingxie/testutil/sample"
	tvotesimulation "mingxie/x/tvote/simulation"
	"mingxie/x/tvote/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = tvotesimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgSaveVoter = "op_weight_msg_save_voter"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSaveVoter int = 100

	opWeightMsgSaveProposalDesc = "op_weight_msg_save_proposal_desc"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSaveProposalDesc int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	tvoteGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&tvoteGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgSaveVoter int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSaveVoter, &weightMsgSaveVoter, nil,
		func(_ *rand.Rand) {
			weightMsgSaveVoter = defaultWeightMsgSaveVoter
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSaveVoter,
		tvotesimulation.SimulateMsgSaveVoter(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgSaveProposalDesc int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSaveProposalDesc, &weightMsgSaveProposalDesc, nil,
		func(_ *rand.Rand) {
			weightMsgSaveProposalDesc = defaultWeightMsgSaveProposalDesc
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSaveProposalDesc,
		tvotesimulation.SimulateMsgSaveProposalDesc(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
