import { Transaction } from 'Accounts'
import { formatMoney } from './'

export const formatLastOperation = (transaction: Transaction): string => {
  const character = transaction.type === 'OUT' ? '-' : '+'
  const money = formatMoney(transaction.currency, transaction.change)

  return `${character} ${money}`
}
