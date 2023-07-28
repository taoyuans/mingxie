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

func CmdSaveVoter() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "save-voter [address] [name] [age] [vid]",
		Short: "Broadcast message save-voter",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAddress := args[0]
			argName := args[1]
			argAge, err := cast.ToUint64E(args[2])
			if err != nil {
				return err
			}
			argVid, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSaveVoter(
				clientCtx.GetFromAddress().String(),
				argAddress,
				argName,
				argAge,
				argVid,
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
