import React from 'react';
import { formattedCurrency } from './Formatter'
import Transaction from './Transaction'
import { useQuery, gql } from '@apollo/client'

const GET_TRANSACTIONS = gql`
  query transactions {
    transactions{
      activityId
      date
      amount
      balance
      type
      description
    }
  }
`

const Transactions = () => {
  const {data, loading, error} = useQuery(GET_TRANSACTIONS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <>
      <div className="heading">
        <h1 className="heading_text">Investing Account</h1>
      </div>

      <section className="balance_info_container">
        <div className="balance_info">
          <h1 className="balance_info_amount">
            { formattedCurrency(data.transactions[0].balance) }
          </h1>
          <p className="balance_info_label">balance</p>
        </div>
      </section>

      <section className="transactions_container">
        <div className="transactions_info">
          <h2 className="transactions_info_label">Past Transactions</h2>
          <div className="transactions_table_container">
            <table className="transactions_table">
              <thead>
                <tr>
                  <th className="transactions_table_heading">Date</th>
                  <th className="transactions_table_heading">Transaction</th>
                  <th className="transactions_table_heading">Description</th>
                  <th className="transactions_table_heading">Amount</th>
                  <th className="transactions_table_heading">Balance</th>
                </tr>
              </thead>
              <tbody>
                { data.transactions.map((transaction) => (
                  <Transaction transaction={transaction} key={transaction.activityId} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
};

export default Transactions
