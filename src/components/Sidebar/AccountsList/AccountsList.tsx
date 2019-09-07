import React from 'react'
import { useDispatch } from 'react-redux'

import { Account } from 'Accounts'
import AccountInformation from '../AccountInformation'

import { openAccountFeed } from '../../../redux/ui'
import { createHistory } from '../../../utils'

interface Props {
  accounts: Account[]
}

const AccountsList: React.FC<Props> = ({ accounts }) => {
  const dispatch = useDispatch()

  const openFeed = (id: string) => {
    dispatch(openAccountFeed(id))
    createHistory.push(`/accounts/${id}`)
  }

  return (
    <>
      {accounts.map(account => (
        <AccountInformation key={account.id} account={account} full onClick={openFeed} to={`/accounts/${account.id}`} />
      ))}
    </>
  )
}

export default AccountsList
