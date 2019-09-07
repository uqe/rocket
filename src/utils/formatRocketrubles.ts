import { Transaction } from 'Accounts'

const decl = (amount: number, titles = ['рокетрубль', 'рокетрубля', 'рокетрублей']): string => {
  const cases = [2, 0, 1, 1, 1, 2]

  return amount < 1
    ? 'рокетрубль'
    : titles[amount % 100 > 4 && amount % 100 < 20 ? 2 : cases[amount % 10 < 5 ? amount % 10 : 5]]
}

export const formatRocketrubles = (transaction: Transaction): string => {
  const amountOfRocketrubles = transaction.change / 100
  return `+ ${amountOfRocketrubles} ${decl(amountOfRocketrubles)}`
}
