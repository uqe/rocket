import React, { CSSProperties } from 'react'
import styled from 'styled-components'
import { AutoSizer, List as FixedListRV, CellMeasurer, CellMeasurerCache, ListProps } from 'react-virtualized'

import { Message as MessageType } from 'Messages'
import Message from '../Message'
import TransactionMessage from '../TransactionMessage'

const Wrapper = styled.div`
  background-color: rgba(101, 101, 101, 0.95);
  display: block;
  flex: 1 1 auto;
  padding: 26px 10px;
`

const FixedList = styled(FixedListRV)<ListProps>`
  transform: rotateX(360deg);

  ::-webkit-scrollbar {
    width: 4px;
    border-radius: 10px;
    opacity: 0.3;
    background-color: #ffffff;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(101, 101, 101, 0.95);
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ffffff;
  }

  :hover,
  :focus {
    outline: none !important;
  }

  ::-webkit-scrollbar-thumb:hover,
  ::-webkit-scrollbar-thumb:focus {
    background: #555;
  }
`

interface MessagesBox {
  index: number
  parent: any
  style: CSSProperties
  messages: MessageType[]
}

const cache = new CellMeasurerCache({
  defaultWidth: 744,
  fixedWidth: true,
})

const renderMessage = ({ index, parent, style }: MessagesBox): JSX.Element => {
  const isTransaction = parent.props.messages[index].type === 'transaction'
  return (
    <CellMeasurer cache={cache} columnIndex={0} parent={parent} rowIndex={index}>
      {isTransaction ? (
        <TransactionMessage message={parent.props.messages[index]} style={{ ...style }}></TransactionMessage>
      ) : (
        <Message message={parent.props.messages[index]} style={{ ...style }}></Message>
      )}
    </CellMeasurer>
  )
}

interface Props {
  messages: MessageType[]
}

const MessagesList: React.FC<Props> = ({ messages }) => {
  const messagesLength = messages.length
  return (
    <Wrapper>
      <AutoSizer onResize={() => cache.clearAll()}>
        {({ height, width }) => (
          <FixedList
            messages={messages}
            rowRenderer={renderMessage}
            height={height}
            rowCount={messagesLength}
            scrollToIndex={messagesLength}
            deferredMeasurementCache={cache}
            rowHeight={cache.rowHeight}
            width={width}
          />
        )}
      </AutoSizer>
    </Wrapper>
  )
}

export default MessagesList
