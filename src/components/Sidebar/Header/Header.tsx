import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.nav`
  display: flex;
  padding: 30px 44px;

  > a:not(:first-child) {
    margin-left: 16px;
  }

  @media (max-width: 1024px) {
    padding: 30px 14px;
  }
`

const SubHeader = styled(NavLink)`
  text-decoration: unset;
  font-size: 32px;
  font-weight: bold;
  color: #333333;
  margin: 0;
  cursor: pointer;
  opacity: 0.3;
`

const Header: React.FC = () => {
  const pages = [{ to: '/', name: 'Счета' }, { to: '/deposits', name: 'Вклады' }]

  return (
    <>
      <Wrapper>
        {pages.map((page, i) => (
          <SubHeader key={i} exact to={page.to} activeStyle={{ opacity: 1 }} aria-current="page">
            {page.name}
          </SubHeader>
        ))}
      </Wrapper>
    </>
  )
}

export default Header
