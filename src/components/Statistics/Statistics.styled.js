import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatisticsWrapper = styled.section`
  background-color: white;
`;

export const Title = styled.h2`
  margin: 24px 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
`;

export const List = styled.ul`
  padding: 0;
  display: flex;
  margin-bottom: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: ${getRandomHexColor};
  height: 63px;
  width: 63px;
  gap: 4px;
`;

export const Label = styled.span`
  color: white;
  font-size: 12px;
`;

export const Percentage = styled.span`
  color: white;
  font-size: 20px;
`;
