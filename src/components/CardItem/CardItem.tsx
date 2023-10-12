import { User } from "../../Types/types";
import Button from "../../ui/Button/Button";
import {
  Avatar,
  AvatarWrap,
  BtnWrap,
  GridItems,
  InfoText,
  InfoWrap,
  Line,
  Wrap,
} from "./CardItem.styled";
type Props = {
  user: User;
};
function CardItem({ user }: Props) {
  return (
    <GridItems>
      <Wrap>
        <Line></Line>
        <AvatarWrap>
          <Avatar src={user.avatar} alt={user.user} />
        </AvatarWrap>
        <InfoWrap>
          <InfoText>{user.tweets} TWEETS</InfoText>
          <InfoText>{user.followers} FOLLOWERS</InfoText>
        </InfoWrap>
        <BtnWrap>
          <Button>Follow</Button>
        </BtnWrap>
      </Wrap>
    </GridItems>
  );
}

export default CardItem;
