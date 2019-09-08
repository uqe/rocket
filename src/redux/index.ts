import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './reducers'
import { StateType } from 'typesafe-actions'

const persistConfig = {
  key: 'store',
  storage,
  blacklist: ['ui'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const productionStore = () => {
  const middlewares: any = []
  const store = createStore(persistedReducer, applyMiddleware(...middlewares))
  const persistor = persistStore(store)
  return { store, persistor }
}

const developmentStore = () => {
  const { createLogger } = require('redux-logger')
  const loggerMiddleware = createLogger()
  const middlewares = [loggerMiddleware]
  const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)))
  const persistor = persistStore(store)
  return { store, persistor }
}

export const store = process.env.NODE_ENV === 'production' ? productionStore() : developmentStore()

export default rootReducer

export type RootState = StateType<typeof rootReducer>
