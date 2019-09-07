import one from '../../images/accounts/1.svg'
import two from '../../images/accounts/2.svg'
import three from '../../images/accounts/3.svg'

import nanoid from 'nanoid'

const data = [
  {
    image: `${one}`,
    id: '57890456',
    percent: 8,
    creationDate: 1485204900,
    currency: 'RUB',
    amount: 69500,
    feed: [
      {
        date: 1552062060,
        text: 'Пополнение с карты',
        change: 3500,
        currency: 'RUB',
        id: nanoid(),
        type: 'IN',
      },
      {
        date: 1551956100,
        text: 'Макдоналдс',
        change: 6800,
        currency: 'RUB',
        id: nanoid(),
        type: 'OUT',
      },
      {
        date: 1551802560,
        text: 'Дикси',
        change: 6200,
        currency: 'RUB',
        id: nanoid(),
        type: 'OUT',
      },
      {
        date: 1551425100,
        text: 'Выплата процентов',
        change: 250,
        currency: 'RUB',
        id: nanoid(),
        type: 'IN',
      },
      {
        date: 1551421500,
        text: 'Антону Бондаренкову',
        change: 100,
        currency: 'RUB',
        id: nanoid(),
        type: 'OUT',
      },
    ],
  },
  {
    image: `${two}`,
    id: '57890398',
    percent: 4.5,
    creationDate: 1565777520,
    currency: 'USD',
    amount: 3502,
    feed: [
      {
        date: 1552062060,
        text: 'Пополнение с карты',
        change: 2000,
        currency: 'USD',
        id: nanoid(),
        type: 'IN',
      },
      {
        date: 1551956100,
        text: 'Макдоналдс',
        change: 4,
        currency: 'USD',
        id: nanoid(),
        type: 'OUT',
      },
      {
        date: 1551802560,
        text: 'Дикси',
        change: 10,
        currency: 'USD',
        id: nanoid(),
        type: 'OUT',
      },
      {
        date: 1551425100,
        text: 'Выплата процентов',
        change: 2.5,
        currency: 'USD',
        id: nanoid(),
        type: 'IN',
      },
      {
        date: 1551421500,
        text: 'Антону Бондаренкову',
        change: 5,
        currency: 'USD',
        id: nanoid(),
        type: 'OUT',
      },
    ],
  },
  {
    image: `${three}`,
    id: '57890239',
    percent: 8,
    creationDate: 1551421500,
    currency: 'RUB',
    amount: 10500,
    feed: [
      {
        date: 1552062060,
        text: 'Пополнение с карты',
        change: 300,
        currency: 'RUB',
        id: nanoid(),
        type: 'IN',
      },
      {
        date: 1551956100,
        text: 'Макдоналдс',
        change: 300,
        currency: 'RUB',
        id: nanoid(),
        type: 'OUT',
      },
      {
        date: 1551802560,
        text: 'Дикси',
        change: 666,
        currency: 'RUB',
        id: nanoid(),
        type: 'OUT',
      },
      {
        date: 1551425100,
        text: 'Выплата процентов',
        change: 100,
        currency: 'RUB',
        id: nanoid(),
        type: 'IN',
      },
      {
        date: 1551421500,
        text: 'Антону Бондаренкову',
        change: 500,
        currency: 'RUB',
        id: nanoid(),
        type: 'OUT',
      },
    ],
  },
]

export { data }
