# frozen_string_literal: true

module Types
  module Transactions
    class TransactionType < Types::BaseObject
      field :activity_id, String, null: false
      field :date, GraphQL::Types::ISO8601DateTime, null: false
      field :type, TransactionTypeEnum, null: false
      field :amount , Float, null: false
      field :balance, Float, null: false
      field :description, String, null: false

      def description
        # TODO: Return a logical description
        [object['type'], object['source']['description']].join(' from ').humanize
      end
    end
  end
end
