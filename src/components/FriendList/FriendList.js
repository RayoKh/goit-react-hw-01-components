import { List } from 'components/FriendList/FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, avatar, name }) => {
        return <FriendListItem key={id} avatar={avatar} name={name} />;
      })}
    </List>
  );
};
