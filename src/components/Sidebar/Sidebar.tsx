import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Router, Route } from 'react-router-dom'

import { accountsSelectors } from '../../redux/accounts/selectors'
import { createHistory } from '../../utils'

import Header from './Header'
import AccountsList from './AccountsList'
import Shrug from './Shrug'
import AccountFeed from './AccountFeed'

const Wrapper = styled.aside`
  overflow-y: auto;
  box-shadow: inset 1px 0px 10px 2px rgba(80, 80, 80, 0.1);
  width: 386px;
  background-color: #f6f6f6;
  padding: 30px 16px;

  @media (max-width: 1024px) {
    width: 286px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`

const Sidebar: React.FC = () => {
  const accounts = useSelector(accountsSelectors)

  return (
    <Wrapper>
      <Router history={createHistory}>
        <Suspense fallback={null}>
          <Route exact path={['/', '/deposits']} component={Header} />
          <Route exact path="/" render={() => <AccountsList accounts={accounts} />} />
          <Route path="/deposits" render={() => <Shrug>¯\_(ツ)_/¯</Shrug>} />
          <Route exact path={'/accounts/:id'} component={AccountFeed} />
        </Suspense>
      </Router>
    </Wrapper>
  )
}

export default Sidebar
