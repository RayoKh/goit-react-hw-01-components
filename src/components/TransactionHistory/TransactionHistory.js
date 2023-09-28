import {
  TransactionTable,
  TableHead,
  TableBoady,
  TableStroke,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <TableBoady>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <TableStroke>{type}</TableStroke>
              <TableStroke>{amount}</TableStroke>
              <TableStroke>{currency}</TableStroke>
            </tr>
          );
        })}
      </TableBoady>
    </TransactionTable>
  );
};
