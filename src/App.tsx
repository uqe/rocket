import React, { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { injectGlobalStyle } from './utils'
import { store } from './redux'
import styled from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'

const Chat = lazy(() => import('./components/Chat'))
const Sidebar = lazy(() => import('./components/Sidebar'))

const Container = styled.div`
  display: flex;
  height: 100vh;
`

const App: React.FC = () => {
  const GlobalStyle = injectGlobalStyle()

  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <GlobalStyle />
        <Container>
          <Suspense fallback={null}>
            <Chat />
            <Sidebar />
          </Suspense>
        </Container>
      </PersistGate>
    </Provider>
  )
}

export default App
