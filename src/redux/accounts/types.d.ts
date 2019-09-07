declare module 'Accounts' {
  export enum Type {
    OUT = 'OUT',
    IN = 'IN',
  }

  export enum Currency {
    RUB = 'RUB',
    USD = 'USD',
    EUR = 'EUR',
  }

  export type Transaction = {
    id: string
    date: number
    text: string
    change: number
    currency: Currency
    type: Type
  }

  export type Account = {
    image: string
    id: string
    amount: number
    percent: number
    creationDate: number
    currency: Currency
    feed: Transaction[]
  }
}
