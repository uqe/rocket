import { createSelector } from 'reselect'
import { RootState } from '../index'

const getState = (state: RootState): RootState => state

export const messagesSelector = createSelector(
  getState,
  state => state.messages
)
