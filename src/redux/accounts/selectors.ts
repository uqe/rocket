import { createSelector } from 'reselect'
import { RootState } from '../index'

const getState = (state: RootState): RootState => state

export const accountsSelectors = createSelector(
  getState,
  state => state.accounts
)

export const accountSelectorById = createSelector(
  getState,
  state => accountsSelectors(state).find(account => account.id === state.ui.openedAccountFeed[0])
)
