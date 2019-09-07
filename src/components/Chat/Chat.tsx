import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import MessagesList from './MessagesList'
import Input from './Input'

import { messagesSelector } from '../../redux/messages/selectors'

const Wrapper = styled.main`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`

const ChatContainer: React.FC = () => {
  const messages = useSelector(messagesSelector)

  return (
    <Wrapper>
      <MessagesList messages={messages} />
      <Input />
    </Wrapper>
  )
}

export default ChatContainer
