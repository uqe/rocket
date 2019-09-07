import { Message } from 'Messages'
import { Feed } from 'Accounts'
import nanoid from 'nanoid'
import { generateMessage } from './index'

type PartMessage = {
  id: string
  text: string
  role: string
  feed: Feed
  type: string
}

export const generateHistory = (count: number): Message[] =>
  Array.from(Array(count).values())
    .map(
      (): PartMessage => ({
        text: generateMessage(Math.floor(Math.random() * (3 - 1 + 1)) + 1),
        id: nanoid(),
        role: Math.random() > 0.4 ? 'admin' : 'user',
        feed: null,
        type: 'text',
      })
    )
    .map((message, i, elms) => ({
      ...message,
      showName: elms[i].role === 'admin' ? false : i === 0 ? true : elms[i - 1].role !== elms[i].role ? true : false,
    }))
