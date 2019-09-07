import nanoid from 'nanoid'
import { createAction, createReducer } from 'typesafe-actions'

import { generateHistory } from '../../utils'
import { Message } from 'Messages'
import { Transaction } from 'Accounts'

export const addTextMessage = createAction('messages/ADD_TEXT_MESSAGE', action => (message: string) =>
  action({ id: nanoid(), role: 'admin', text: message, transaction: null, type: 'text' })
)

export const addTransactionMessage = createAction(
  'messages/ADD_TRANSACTION_MESSAGE',
  action => (transaction: Transaction) =>
    action({ id: nanoid(), role: 'admin', text: null, transaction: transaction, type: 'transaction' })
)

export const messages = createReducer(generateHistory(5000) as Message[])
  .handleAction(addTextMessage, (state, action) => [...state, action.payload])
  .handleAction(addTransactionMessage, (state, action) => [...state, action.payload])

export default messages
