import React from 'react';
import PropTypes from 'prop-types';
import transaction from './transaction.module.scss';

const TransactionHistory = ({ items }) => {
  return (
    <table className={transaction.transactionHistory}>
      <thead className={transaction.tableThead}>
        <tr>
          <th className={transaction.th}>Type</th>
          <th className={transaction.th}>Amount</th>
          <th className={transaction.th}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={transaction.th}>{type}</td>
            <td className={transaction.th}>{amount}</td>
            <td className={transaction.th}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
