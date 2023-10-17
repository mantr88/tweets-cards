import { useDispatch } from "react-redux";
import { User } from "../../Types/types";
import Button from "../../ui/Button/Button";
import {
  Avatar,
  AvatarWrap,
  BtnWrap,
  GridItems,
  InfoText,
  InfoWrap,
  Wrap,
} from "./CardItem.styled";
import { toggleFollowed } from "../../redux/operations";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
type Props = {
  user: User;
};
function CardItem({ user }: Props) {
  const dispatch: ThunkDispatch<User, User, AnyAction> = useDispatch();

  const clickBtnHandler = () => {
    dispatch(toggleFollowed(user));
  };

  const btnBgChoosingColor = user.isFollowed
    ? { backgroundColor: "#5CD3A8" }
    : { backgroundColor: "#EBD8FF" };

  const visibleNumberFollowers = user.followers.toLocaleString("en-US", {
    useGrouping: true,
  });

  return (
    <GridItems>
      <Wrap>
        <AvatarWrap>
          <Avatar src={user.avatar} alt={user.user} />
        </AvatarWrap>
        <InfoWrap>
          <InfoText>{user.tweets} TWEETS</InfoText>
          <InfoText>{visibleNumberFollowers} FOLLOWERS</InfoText>
        </InfoWrap>
        <BtnWrap onClick={clickBtnHandler}>
          <Button style={btnBgChoosingColor}>
            {user.isFollowed ? "Following" : "Follow"}
          </Button>
        </BtnWrap>
      </Wrap>
    </GridItems>
  );
}

export default CardItem;
