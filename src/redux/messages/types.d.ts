declare type Feed = import('Accounts').Feed

declare module 'Messages' {
  export type Message = {
    id: string
    text: string | null
    role: string
    showName: boolean
    feed: Feed | null
    type: string
  }
}
