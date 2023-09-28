import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: white;
  margin: 15px 0;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

export const Avatar = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 12px;
`;

export const DescText = styled.p`
  margin: 0;
  color: darkgrey;
`;

export const TitleName = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const StatsList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 103px;
  height: 65px;
  text-align: center;
  background: lightgrey;
  border: grey solid 0.1px;
  justify-content: center;
`;

export const StatsTitle = styled.span`
  color: navy;
`;

export const StatsIndicators = styled.span`
  font-weight: bold;
`;
