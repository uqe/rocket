import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { icons } from './icons'
import { changeInputValue, clearInputValue } from '../../../redux/ui'
import { addTextMessage } from '../../../redux/messages'
import { inputValueSelector } from '../../../redux/ui/selectors'

const Wrapper = styled.div`
  height: 100px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #333;
  padding: 16px 0px 20px 30px;
`

const TextAreaWrapper = styled.div`
  height: 24px;
  display: flex;
`

const Attachments = styled.div`
  height: 24px;
  width: 100%;
  display: flex;
`

const TextArea = styled.textarea`
  flex: 1;
  border: none;
  background: transparent;
  padding: 0;
  font-size: 16px;
  line-height: 23px;
  color: white;
  :focus {
    outline: none !important;
  }
`

interface Button {
  background: string
}

const Button = styled.button<Button>`
  margin-right: 20px;
  background: ${({ background }): string => `url(${background})`};
  border: unset;
  height: 24px;
  width: 24px;
  cursor: pointer;
  padding: 0;

  :focus {
    outline: none !important;
  }
`

const Input: React.FC = () => {
  const dispatch = useDispatch()
  const inputValue = useSelector(inputValueSelector)

  const sendMessage = (): void => {
    if (inputValue) {
      dispatch(addTextMessage(inputValue))
      dispatch(clearInputValue())
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    dispatch(changeInputValue(e.target.value))
  }

  const sendMessageWithEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.keyCode === 13) {
      e.stopPropagation()
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <Wrapper>
      <Attachments>
        {icons.slice(0, -1).map(icon => (
          <Button key={icon.key} background={icon.icon} />
        ))}
      </Attachments>
      <TextAreaWrapper>
        <TextArea
          value={inputValue}
          onChange={onChange}
          onKeyDown={sendMessageWithEnter}
          style={{ resize: 'none', overflow: 'hidden' }}
          rows={1}
          placeholder="Введите сообщение"
        />
        <Button background={icons[4].icon} onClick={sendMessage}></Button>
      </TextAreaWrapper>
    </Wrapper>
  )
}

export default Input
