import { createSelector } from 'reselect'
import { RootState } from '../index'
import { Ui } from 'Ui'

const getState = (state: RootState): Ui => state.ui

export const openedAccountFeedSelector = createSelector(
  getState,
  state => state.openedAccountFeed
)

export const inputValueSelector = createSelector(
  getState,
  state => state.inputValue
)
