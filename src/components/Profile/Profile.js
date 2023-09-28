import {
  Wrapper,
  Description,
  Avatar,
  DescText,
  TitleName,
  StatsList,
  StatsItem,
  StatsTitle,
  StatsIndicators,
} from './Profile.styled';

export const Profile = ({
  props: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Wrapper>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <TitleName>{username}</TitleName>
        <DescText>@{tag}</DescText>
        <DescText>{location}</DescText>
      </Description>

      <StatsList>
        <StatsItem>
          <StatsTitle>Followers</StatsTitle>
          <StatsIndicators>{followers}</StatsIndicators>
        </StatsItem>
        <StatsItem>
          <StatsTitle>Views</StatsTitle>
          <StatsIndicators>{views}</StatsIndicators>
        </StatsItem>
        <StatsItem>
          <StatsTitle>Likes</StatsTitle>
          <StatsIndicators>{likes}</StatsIndicators>
        </StatsItem>
      </StatsList>
    </Wrapper>
  );
};
