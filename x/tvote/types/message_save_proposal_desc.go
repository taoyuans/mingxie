package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSaveProposalDesc = "save_proposal_desc"

var _ sdk.Msg = &MsgSaveProposalDesc{}

func NewMsgSaveProposalDesc(creator string, pid uint64, vid uint64, desc string) *MsgSaveProposalDesc {
	return &MsgSaveProposalDesc{
		Creator: creator,
		Pid:     pid,
		Vid:     vid,
		Desc:    desc,
	}
}

func (msg *MsgSaveProposalDesc) Route() string {
	return RouterKey
}

func (msg *MsgSaveProposalDesc) Type() string {
	return TypeMsgSaveProposalDesc
}

func (msg *MsgSaveProposalDesc) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSaveProposalDesc) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSaveProposalDesc) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
