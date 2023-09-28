import {
  StatisticsWrapper,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <StatisticsWrapper>
      <Title>Upload stats</Title>
      <List>
        {stats.map(stat => {
          return (
            <Item key={stat.id}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </Item>
          );
        })}
      </List>
    </StatisticsWrapper>
  );
};
