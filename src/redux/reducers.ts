import { combineReducers } from 'redux'

import messages from '../redux/messages'
import accounts from '../redux/accounts'
import ui from '../redux/ui'

export const rootReducer = combineReducers({ messages, accounts, ui })
