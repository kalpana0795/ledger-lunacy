# frozen_string_literal: true

module Types
  module Transactions
    class TransactionTypeEnum < Types::BaseEnum
      value 'DEPOSIT', value: 'DEPOSIT'
      value 'INVESTMENT', value: 'INVESTMENT'
      value 'REFUND', value: 'REFUND'
      value 'TRANSFER', value: 'TRANSFER'
      value 'WITHDRAWAL', value: 'WITHDRAWAL'
    end
  end
end
