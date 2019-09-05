import { Currency } from 'Accounts'

export const formatMoney = (currency: Currency, amount: number): string =>
  new Intl.NumberFormat('ru-RU', { style: 'currency', currency: currency, minimumFractionDigits: 0 }).format(amount)
