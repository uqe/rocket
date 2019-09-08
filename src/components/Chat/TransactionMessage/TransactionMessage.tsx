import React, { CSSProperties } from 'react'
import styled from 'styled-components'

import { Message as MessageType } from 'Messages'
import transactionLogo from '../../../images/transaction.png'
import { formatLastOperation, formatRocketrubles } from '../../../utils'

interface Message {
  showName?: boolean
  role?: string
}

const Wrapper = styled.div<Message>`
  width: calc(50% - 32px) !important;
  left: 50% !important;
  text-align: right;
  padding: 5px 16px 0 16px;
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 1024px) {
    left: 0% !important;
    width: calc(100% - 32px) !important;
  }
`

const Information = styled.div<Message>`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: #333;
  padding: 20px 35px;
  width: 180px;
  text-align: center;
`

const Logo = styled.img`
  min-width: 60px;
  height: 60px;
  margin: 0 auto;
`

const Name = styled.span`
  margin-top: 15px;
  display: block;
  line-height: 1.38;
`

const Change = styled.span`
  font-size: 24px;
  font-weight: bold;
  display: block;
  margin: 5px 0;
`

const Rocketrubles = styled.span`
  display: block;
  font-size: 14px;
  line-height: 1.29;
  color: #b2b2b2;
`

interface Props {
  message: MessageType
  style?: CSSProperties
}

const TransactionMessage: React.SFC<Props> = ({ style, message: { transaction } }) => {
  return (
    //@ts-ignore разобраться
    <Wrapper style={{ ...style, height: style.height - 5 }}>
      <Information>
        <Logo src={transactionLogo} alt="logo"></Logo>
        <Name>{transaction.text}</Name>
        <Change>{formatLastOperation(transaction)}</Change>
        {transaction.type === 'OUT' && <Rocketrubles>{formatRocketrubles(transaction)}</Rocketrubles>}
      </Information>
    </Wrapper>
  )
}

export default TransactionMessage
