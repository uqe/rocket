import nanoid from 'nanoid'
import { createAction, createReducer } from 'typesafe-actions'

import { generateHistory } from '../../utils'
import { Message } from 'Messages'
import { Feed } from 'Accounts'

export const addTextMessage = createAction('messages/ADD_TEXT_MESSAGE', action => (message: string) =>
  action({ id: nanoid(), role: 'admin', text: message, feed: null, type: 'TEXT' })
)

export const addFeedMessage = createAction('messages/ADD_FEED_MESSAGE', action => (feed: Feed) =>
  action({ id: nanoid(), role: 'admin', text: null, feed: feed, type: 'FEED' })
)

export const messages = createReducer(generateHistory(5000) as Message[])
  .handleAction(addTextMessage, (state, action) => [...state, action.payload])
  .handleAction(addFeedMessage, (state, action) => [...state, action.payload])

export default messages
