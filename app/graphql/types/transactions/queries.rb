# frozen_string_literal: true

module Types
  module Transactions
    module Queries
      extend ActiveSupport::Concern

      included do
        field :transactions, [TransactionType], null: false,
          description: 'Returns a list of transactions'

        def transactions
          records = JSON.parse(File.read('../../data/complicated_ledger.json'))
          records.uniq! { |transaction| transaction['activity_id'] }
                 .sort_by! { |transaction| transaction['date'] }

          fix_transactions_order(records)
        end

        private

        def fix_transactions_order(transactions)
          total_count, balance, index = transactions.length, 0, 0

          while index < total_count - 1
            current_txn, next_txn = transactions[index], transactions[index + 1]
            if current_txn['date'] != next_txn['date']
              balance = transactions[index]['balance']
              index += 1
              next
            end

            # Find the next transaction that makes sense
            next_valid_index = index
            while (next_valid_index < total_count - 1) && not_next_valid_txn?(transactions, balance, next_valid_index)
              next_valid_index += 1
            end

            # Reorder transaction
            transactions[index], transactions[next_valid_index] = transactions[next_valid_index], transactions[index]
            balance = transactions[index]['balance']
            index += 1
          end

          # Latest transaction should be at first
          transactions.reverse
        end

        def not_next_valid_txn?(transactions, balance, index)
          (transactions[index]['date'] == transactions[index + 1]['date']) && \
            (balance + transactions[index]['amount'] != transactions[index]['balance'])
        end
      end
    end
  end
end
