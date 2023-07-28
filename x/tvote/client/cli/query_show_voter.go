package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"mingxie/x/tvote/types"
)

var _ = strconv.Itoa(0)

func CmdShowVoter() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-voter [vid]",
		Short: "Query show-voter",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqVid, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryShowVoterRequest{

				Vid: reqVid,
			}

			res, err := queryClient.ShowVoter(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
