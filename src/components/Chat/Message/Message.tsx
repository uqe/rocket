import React, { CSSProperties } from 'react'
import styled from 'styled-components'

import { Message as MessageType } from 'Messages'
import user from '../../../images/user.png'

interface Message {
  showName?: boolean
  role: string
}

const Wrapper = styled.div<Message>`
  width: calc(50% - 32px) !important;
  left: ${({ role }) => (role === 'user' ? '0% !important' : '50% !important')};
  text-align: ${({ role }) => (role === 'user' ? 'left' : 'right')};
  padding: 5px 16px 0 16px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    left: ${({ role }) => (role === 'user' ? '0% !important' : '0% !important')};
    width: calc(100% - 32px) !important;
  }
`

const Text = styled.div<Message>`
  border-radius: 10px;
  display: inline-block;
  color: ${({ role }) => (role === 'user' ? '#333333' : 'white')};
  background-color: ${({ role }) => (role === 'user' ? '#fcfcfc' : '#333333')};
  padding: 8px 15px;
  max-width: 80%;
  text-align: initial;
`

const Information = styled.div<Message>`
  display: flex;
  margin-left: ${({ showName, role }) => (showName ? 0 : role === 'admin' ? 0 : '40px')};
  justify-content: ${({ role }) => (role === 'user' ? 'flex-start' : 'flex-end')};
`

const Name = styled.span<Message>`
  display: block;
  opacity: 0.6;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.24px;
  padding-bottom: 5px;
  color: #ffffff;
  margin-left: ${({ role }) => (role === 'user' ? '40px' : '0px')};
`

const Avatar = styled.img`
  min-width: 30px;
  height: 30px;
  margin-right: 10px;
`

interface Props {
  message: MessageType
  style?: CSSProperties
}

const Message: React.SFC<Props> = ({ style, message: { role, showName, text } }) => {
  const isFirstUsersMessageInGroup = role === 'user' && showName

  return (
    //@ts-ignore разобраться
    <Wrapper style={{ ...style, height: style.height - 5 }} role={role}>
      {isFirstUsersMessageInGroup && <Name role={role}>Серёжа</Name>}
      <Information showName={showName} role={role}>
        {isFirstUsersMessageInGroup && <Avatar src={user} />}
        <Text role={role}>{text}</Text>
      </Information>
    </Wrapper>
  )
}

export default Message
