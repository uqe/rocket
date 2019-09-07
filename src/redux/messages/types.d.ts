declare type Transaction = import('Accounts').Transaction

declare module 'Messages' {
  export type Message = {
    id: string
    text: string | null
    role: string
    showName: boolean
    transaction: Transaction | null
    type: string
  }
}
