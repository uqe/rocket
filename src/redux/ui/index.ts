import { createAction, createReducer } from 'typesafe-actions'
import { createHistory } from '../../utils'
import { Ui } from 'Ui'

export const openAccountFeed = createAction('ui/OPEN_ACCOUNT_FEED', action => (id: string) => action(id))

export const closeAccountFeed = createAction('ui/CLOSE_ACCOUNT_FEED', action => (id: string) => action(id))

export const changeInputValue = createAction('ui/CHANGE_INPUT_VALUE', action => (message: string) => action(message))

export const clearInputValue = createAction('ui/CLEAR_INPUT_VALUE', action => () => action())

export const ui = createReducer({ openedAccountFeed: [], inputValue: '' } as Ui)
  .handleAction(openAccountFeed, (state, action) => ({
    ...state,
    openedAccountFeed: [action.payload],
  }))
  .handleAction(closeAccountFeed, (state, action) => ({
    ...state,
    openedAccountFeed: state.openedAccountFeed.filter(id => id !== action.payload),
  }))
  .handleAction(changeInputValue, (state, action) => ({
    ...state,
    inputValue: action.payload,
  }))
  .handleAction(clearInputValue, (state, action) => ({ ...state, inputValue: '' }))

export default ui
