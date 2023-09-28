import { Status, Item, Name } from './FriendListItem.styled';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <Item key={id}>
      <Status props={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
