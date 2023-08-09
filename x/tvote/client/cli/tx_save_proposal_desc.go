package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"mingxie/x/tvote/types"
)

var _ = strconv.Itoa(0)

func CmdSaveProposalDesc() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "save-proposal-desc [pid] [vid] [desc]",
		Short: "Broadcast message save-proposal-desc",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argPid, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argVid, err := cast.ToUint64E(args[1])
			if err != nil {
				return err
			}
			argDesc := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSaveProposalDesc(
				clientCtx.GetFromAddress().String(),
				argPid,
				argVid,
				argDesc,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
