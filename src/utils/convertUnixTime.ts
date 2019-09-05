import fromUnixTime from 'date-fns/fromUnixTime'
import ruLocale from 'date-fns/locale/ru'
import format from 'date-fns/format'

const options = {
  locale: ruLocale,
}

export const convertUnixTime = (timeStamp: number): string => {
  return format(fromUnixTime(timeStamp), 'd MMMM HH:mm', options)
}
