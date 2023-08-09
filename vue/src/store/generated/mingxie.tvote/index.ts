import { Client, registry, MissingWalletError } from 'mingxie-client-ts'

import { Params } from "mingxie-client-ts/mingxie.tvote/types"
import { ProposalDesc } from "mingxie-client-ts/mingxie.tvote/types"
import { Voter } from "mingxie-client-ts/mingxie.tvote/types"


export { Params, ProposalDesc, Voter };

function initClient(vuexGetters) {
	return new Client(vuexGetters['common/env/getEnv'], vuexGetters['common/wallet/signer'])
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	let structure: {fields: Field[]} = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const getDefaultState = () => {
	return {
				Params: {},
				ShowVoter: {},
				ListVoter: {},
				ListProposalDesc: {},
				
				_Structure: {
						Params: getStructure(Params.fromPartial({})),
						ProposalDesc: getStructure(ProposalDesc.fromPartial({})),
						Voter: getStructure(Voter.fromPartial({})),
						
		},
		_Registry: registry,
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(JSON.stringify(subscription))
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(JSON.stringify(subscription))
		}
	},
	getters: {
				getParams: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.Params[JSON.stringify(params)] ?? {}
		},
				getShowVoter: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ShowVoter[JSON.stringify(params)] ?? {}
		},
				getListVoter: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ListVoter[JSON.stringify(params)] ?? {}
		},
				getListProposalDesc: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.ListProposalDesc[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		},
		getRegistry: (state) => {
			return state._Registry
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: mingxie.tvote initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					const sub=JSON.parse(subscription)
					await dispatch(sub.action, sub.payload)
				}catch(e) {
					throw new Error('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QueryParams({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.MingxieTvote.query.queryParams()).data
				
					
				commit('QUERY', { query: 'Params', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: {...key},query }})
				return getters['getParams']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryParams API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryShowVoter({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.MingxieTvote.query.queryShowVoter( key.vid)).data
				
					
				commit('QUERY', { query: 'ShowVoter', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryShowVoter', payload: { options: { all }, params: {...key},query }})
				return getters['getShowVoter']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryShowVoter API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryListVoter({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.MingxieTvote.query.queryListVoter(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.MingxieTvote.query.queryListVoter({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ListVoter', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryListVoter', payload: { options: { all }, params: {...key},query }})
				return getters['getListVoter']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryListVoter API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryListProposalDesc({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params, query=null }) {
			try {
				const key = params ?? {};
				const client = initClient(rootGetters);
				let value= (await client.MingxieTvote.query.queryListProposalDesc(query ?? undefined)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.next_key!=null) {
					let next_values=(await client.MingxieTvote.query.queryListProposalDesc({...query ?? {}, 'pagination.key':(<any> value).pagination.next_key} as any)).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'ListProposalDesc', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryListProposalDesc', payload: { options: { all }, params: {...key},query }})
				return getters['getListProposalDesc']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new Error('QueryClient:QueryListProposalDesc API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgSaveVoter({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.MingxieTvote.tx.sendMsgSaveVoter({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSaveVoter:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSaveVoter:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSaveProposalDesc({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const client=await initClient(rootGetters)
				const result = await client.MingxieTvote.tx.sendMsgSaveProposalDesc({ value, fee: {amount: fee, gas: "200000"}, memo })
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSaveProposalDesc:Init Could not initialize signing client. Wallet is required.')
				}else{
					throw new Error('TxClient:MsgSaveProposalDesc:Send Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgSaveVoter({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.MingxieTvote.tx.msgSaveVoter({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSaveVoter:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSaveVoter:Create Could not create message: ' + e.message)
				}
			}
		},
		async MsgSaveProposalDesc({ rootGetters }, { value }) {
			try {
				const client=initClient(rootGetters)
				const msg = await client.MingxieTvote.tx.msgSaveProposalDesc({value})
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new Error('TxClient:MsgSaveProposalDesc:Init Could not initialize signing client. Wallet is required.')
				} else{
					throw new Error('TxClient:MsgSaveProposalDesc:Create Could not create message: ' + e.message)
				}
			}
		},
		
	}
}
