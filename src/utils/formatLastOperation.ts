import { Feed } from 'Accounts'
import { formatMoney } from './'

export const formatLastOperation = (feed: Feed): string => {
  const character = feed.type === 'OUT' ? '-' : '+'
  const money = formatMoney(feed.currency, feed.change)

  return `${character} ${money}`
}
