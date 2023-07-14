import React from 'react';
import { formattedDate, formattedCurrency } from './Formatter' 

export default ({transaction}) => {
  const negativeAmountModifier = transaction.amount < 0 ? 'transaction_data--negative-amount' : ''
  const zeroBalanceModifier = transaction.balance == 0 ? 'transaction_data--zero-balance' : ''
  return (
    <tr className='transaction_details'>
      <td className='transaction_data'>{ formattedDate(transaction.date) }</td>
      <td className='transaction_data transaction_data--type'>{ transaction.type }</td>
      <td className='transaction_data'>{ transaction.description }</td>
      <td className={ `transaction_data ${negativeAmountModifier}` }>{ formattedCurrency(transaction.amount) }</td>
      <td className={ `transaction_data ${zeroBalanceModifier}` }>{ formattedCurrency(transaction.balance) }</td>
    </tr>
  )
};
