import React from 'react';
import { formattedCurrency } from './Formatter'
import Transaction from './Transaction'

const data = {
  transactions: [
    {
        "activity_id": "1",
        "date": "2014-10-01T01:00:29+00:00",
        "type": "DEPOSIT",
        "method": "ACH",
        "amount": 1003.75,
        "balance": 1003.75,
        "requester": {
            "type": "INVESTMENT"
        },
        "source": {
            "type": "EXTERNAL",
            "id": 18238147,
            "description": "Chase ** 9867"
        },
        "destination": {
            "type": "INVESTOR",
            "id": 76510190788,
            "description": "Michael Daugherty"
        }
    },
    {
        "activity_id": "2",
        "date": "2014-10-01T01:00:30+00:00",
        "type": "INVESTMENT",
        "amount": -999.50,
        "balance": 4.25,
        "requester": {
            "type": "INVESTMENT"
        },
        "source": {
            "type": "INVESTOR",
            "id": 76510190788,
            "description": "Investor description"
        },
        "destination": {
            "type": "CAMPAIGN_FUND",
            "id": "899b188040fd01315c6206cbae434dcb",
            "description": "Uber Technologies"
        }
    }
  ],
}

export default () => {
  return (
    <>
      <div className="heading">
        <h1 className="heading_text">Investing Account</h1>
      </div>

      <section className="balance_info_container">
        <div className="balance_info">
          <h1 className="balance_info_amount">
            { formattedCurrency(data.transactions.slice(-1)[0].balance) }
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
                  <Transaction transaction={transaction} key={transaction.activity_id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
};
