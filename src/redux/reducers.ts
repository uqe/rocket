import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import messages from '../redux/messages'
import accounts from '../redux/accounts'
import ui from '../redux/ui'

const persistConfig = {
  key: 'ui',
  storage: storage,
  blacklist: ['openedAccountFeed'],
}

export const rootReducer = combineReducers({ messages, accounts, ui: persistReducer(persistConfig, ui) })
