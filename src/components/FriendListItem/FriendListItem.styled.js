import styled from 'styled-components';

const getStatusColor = props => {
  switch (props.isOnline) {
    case 'true':
      return 'green';
    case 'false':
      return 'red';
    default:
      return null;
  }
};

export const Status = styled.span`
  display: block;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: ${({ online }) => (online ? 'green' : 'red')};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  height: 75px;
  padding-left: 12px;
  gap: 8px;
`;

export const Name = styled.p`
  font-weight: bold;
`;
