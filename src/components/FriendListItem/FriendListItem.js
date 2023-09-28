import { Status, Item, Name } from './FriendListItem.styled';

export const FriendListItem = ({ id, avatar, name, online }) => {
  return (
    <Item key={id}>
      <Status online={online}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
