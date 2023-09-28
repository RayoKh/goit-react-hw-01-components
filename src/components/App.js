import { Profile } from './Profile/Profile';
import userInfo from '../components/Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../components/Statistics/data.json';
import { FriendList } from './FriendList/FriendList';
import FriendInfo from './FriendList/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';
import { Wrapper } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <Profile props={userInfo} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={FriendInfo} />
      <TransactionHistory items={transactions} />
    </Wrapper>
  );
};
