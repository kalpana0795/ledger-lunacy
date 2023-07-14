import React from 'react';
import { formattedDate, formattedCurrency } from './Formatter' 

export default ({transaction}) => {
  return (
    <tr className='transaction_details'>
      <td className='transaction_data'>{ formattedDate(transaction.date) }</td>
      <td className='transaction_data transaction_data--type'>{ transaction.type }</td>
      <td className='transaction_data'>{ transaction.description }</td>
      <td className='transaction_data'>{ formattedCurrency(transaction.amount) }</td>
      <td className='transaction_data'>{ formattedCurrency(transaction.balance) }</td>
    </tr>
  )
};
