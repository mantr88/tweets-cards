import { SlActionRedo } from "react-icons/sl";
import {
  Link,
  MainText,
  OtherText,
  PageContainer,
  PageWrap,
} from "./Welcome.styled";
function Welcome() {
  return (
    <PageWrap>
      <PageContainer>
        <MainText>
          Welcome to our whiteboard service for viewing and interacting with
          your Twitter followers!
        </MainText>
        <OtherText>
          To interact with your followers on Twitter (now X 🤦‍♂️), we have created
          interactive cards that allow you to subscribe or unsubscribe by
          clicking on the "FOLLOW/FOLLOWING" button
        </OtherText>
      </PageContainer>
      <Link to={"/tweets-cards/tweets"}>
        <SlActionRedo /> Go to the tweet cards
        <SlActionRedo />
      </Link>
    </PageWrap>
  );
}

export default Welcome;
