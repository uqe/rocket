import React, { useEffect } from 'react'
import styled from 'styled-components'
import { match } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import AccountInformation from '../AccountInformation'
import { accountSelectorById } from '../../../redux/accounts/selectors'
import { convertUnixTime, formatLastOperation, createHistory } from '../../../utils'
import { closeAccountFeed, openAccountFeed } from '../../../redux/ui'
import { addFeedMessage } from '../../../redux/messages'

import sendFeedIcon from '../../../images/send_feed.svg'
import emoji from '../../../images/emoji.png'

const Wrapper = styled.div`
  padding-top: 30px;
`

const FeedWrapper = styled.div`
  background-color: #f6f6f6;
  padding: 0 44px;
  padding-top: 30px;
`

const Name = styled.span`
  display: block;
  font-size: 16px;
  color: #b2b2b2;
  margin-bottom: 15px;
`

const FeedList = styled.ul`
  margin-right: -44px;
  margin-left: -15px;
  padding: 0;
`

const FeedItem = styled.li`
  display: flex;
  padding: 15px;
  padding-right: 44px;

  :hover {
    cursor: pointer;
    border-radius: 6px;
    background-color: #e9e9e9;

    :after {
      content: url(${sendFeedIcon});
      margin-right: -34px;
      margin-left: 10px;
    }
  }
`
const Avatar = styled.figure`
  margin: 0;
  width: 30px;
  border-radius: 50%;
  text-align: center;
  height: 30px;
  background-color: #eeeeee;
  margin-right: 10px;
  background-image: url(${emoji});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
`

const Text = styled.span`
  display: block;
  color: #333333;
  font-size: 16px;
  line-height: 1.33;
`
const Date = styled.span`
  display: block;
  margin-top: 5px;
  color: #b2b2b2;
`

const Money = styled(Text)`
  text-align: end;
  flex: 1;
`

interface Props {
  match: match<{ id: string }>
}

const AccountFeed: React.FC<Props> = ({ match }) => {
  const dispatch = useDispatch()

  const account = useSelector(accountSelectorById)

  const closeFeed = (id: string): void => {
    dispatch(closeAccountFeed(id))
    createHistory.push(`/`)
  }

  const sendFeedToChat = (feed: Feed): void => {
    dispatch(addFeedMessage(feed))
  }

  useEffect(() => {
    if (!account) {
      dispatch(openAccountFeed(match.params.id))
    }
  }, [account, dispatch, match.params.id])

  return (
    <Wrapper>
      {account && (
        <>
          <AccountInformation account={account} full={false} onClick={closeFeed} to="/"></AccountInformation>
          <FeedWrapper>
            <Name>История операций</Name>
            <FeedList>
              {account.feed.map(item => (
                <FeedItem key={item.id} onClick={() => sendFeedToChat(item)}>
                  <Avatar />
                  <div>
                    <Text>{item.text}</Text>
                    <Date>{convertUnixTime(item.date)}</Date>
                  </div>
                  <Money>{formatLastOperation(item)}</Money>
                </FeedItem>
              ))}
            </FeedList>
          </FeedWrapper>
        </>
      )}
    </Wrapper>
  )
}

export default AccountFeed
