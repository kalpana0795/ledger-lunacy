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
        case object['type']
        when 'DEPOSIT'
          "Deposit from #{ source } #{ requester_str } via #{ object['method'] }"
        when 'INVESTMENT'
          "Investment in #{ destination }"
        when 'REFUND'
          "Refund from #{ source }"
        when 'WITHDRAWAL'
          "Withdrawal by you for #{ destination } via #{ object['method'] }"
        when 'TRANSFER'
          description_for_transfer
        end
      end

      private

      def destination
        object['destination']['description']
      end

      def source
        (object['source']['description'] || "#{ object['source']['type'] } account").humanize
      end

      def requester_str
        "for your #{ object['requester']['type'] }".humanize if object['requester']
      end

      def description_for_transfer
        if object['amount'] < 0
          "Transfer for #{ destination }"
        else
          "Transfer from #{ source }"
        end
      end
    end
  end
end
