package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSaveVoter = "save_voter"

var _ sdk.Msg = &MsgSaveVoter{}

func NewMsgSaveVoter(creator string, address string, name string, age uint64, vid uint64) *MsgSaveVoter {
	return &MsgSaveVoter{
		Creator: creator,
		Address: address,
		Name:    name,
		Age:     age,
		Vid:     vid,
	}
}

func (msg *MsgSaveVoter) Route() string {
	return RouterKey
}

func (msg *MsgSaveVoter) Type() string {
	return TypeMsgSaveVoter
}

func (msg *MsgSaveVoter) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSaveVoter) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSaveVoter) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
