import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { rootReducer } from './reducers'
import { StateType } from 'typesafe-actions'

const productionStore = () => {
  const middlewares: any = []
  // return applyMiddleware(...middlewares)
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  return store
}

const developmentStore = () => {
  const { createLogger } = require('redux-logger')
  const loggerMiddleware = createLogger()
  const middlewares = [loggerMiddleware]
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))
  return store
}

export const store = process.env.NODE_ENV === 'production' ? productionStore() : developmentStore()

export default rootReducer

export type RootState = StateType<typeof rootReducer>
