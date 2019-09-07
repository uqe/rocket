import React from 'react'
import styled from 'styled-components'

import { Account } from 'Accounts'
import { formatMoney, convertUnixTime, formatLastOperation } from '../../../utils'
import Button from '../Button'

const Wrapper = styled.ul`
  margin: 0;
  padding: 0 44px;

  @media (max-width: 768px) {
    padding: 0 14px;
  }
`

const AccountWrapper = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

const Card = styled.img`
  filter: drop-shadow(0 calc(1.5 * 6px) calc(1.5 * 6px) rgba(0, 0, 0, 0.15));
  width: 48px;
  height: 36px;
`

const Name = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  color: #333333;
`

const Amount = styled.h4`
  margin: 0;
  margin-top: 5px;
  color: #333333;
  font-weight: bold;
`

const MainInformation = styled.div`
  flex: 1;
  display: flex;
`

const SecondInformationWrapper = styled.div`
  margin-left: 68px; /* sorry */
  margin-top: 15px;
  font-size: 16px;
  color: #b2b2b2;
`

const SecondInformation = styled.span`
  display: block;
`

const InformationWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 20px;
`

const Information = styled.div`
  display: flex;
  flex-direction: column;
`

const LastOperation = styled.span`
  color: #333333;
`

interface Props {
  to: string
  full: boolean
  account: Account
  onClick: (id: string) => void
}

const AccountInformation: React.FC<Props> = ({ account, full, onClick, to }) => {
  return (
    <Wrapper>
      <AccountWrapper key={account.id}>
        <MainInformation>
          <Card src={account.image} />
          <InformationWrapper>
            <Information>
              <Name>Счёт № {account.id}</Name>
              <Amount>{formatMoney(account.currency, account.amount)}</Amount>
            </Information>
            <Button isOpenType={full} size={full ? 35 : 40} onClick={() => onClick(account.id)} to={to}></Button>
          </InformationWrapper>
        </MainInformation>
        <SecondInformationWrapper>
          <SecondInformation>{account.percent}% годовых</SecondInformation>
          <SecondInformation>Создан: {convertUnixTime(account.creationDate)}</SecondInformation>
          {full && (
            <>
              <SecondInformation>Последняя операция</SecondInformation>
              <SecondInformation>
                {convertUnixTime(account.feed[0].date)} (
                <LastOperation>{formatLastOperation(account.feed[0])}</LastOperation>)
              </SecondInformation>
            </>
          )}
        </SecondInformationWrapper>
      </AccountWrapper>
    </Wrapper>
  )
}

export default AccountInformation
