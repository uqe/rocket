import { createAction, createReducer } from 'typesafe-actions'
import { data } from './data'
import { Account } from 'Accounts'

export const accounts = createReducer(data as Account[])

export default accounts
