import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSaveProposalDesc } from "./types/mingxie/tvote/tx";
import { MsgSaveVoter } from "./types/mingxie/tvote/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/mingxie.tvote.MsgSaveProposalDesc", MsgSaveProposalDesc],
    ["/mingxie.tvote.MsgSaveVoter", MsgSaveVoter],
    
];

export { msgTypes }