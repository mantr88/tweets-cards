import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import {
  MainText,
  OtherText,
  PageWrap,
  Link,
  PageContainer,
} from "../Welcome/Welcome.styled";
import { SlActionRedo } from "react-icons/sl";

function ErrorComponenet() {
  const error = useRouteError();
  console.log(error);

  function errorMessage(error: unknown): string {
    if (isRouteErrorResponse(error)) {
      return `${error.status} ${error.statusText}`;
    } else if (error instanceof Error) {
      return error.message;
    } else if (typeof error === "string") {
      return error;
    } else {
      console.error(error);
      return "Unknown error. Maybe you took a non-existent route";
    }
  }

  return (
    <PageWrap>
      <PageContainer>
        <MainText>We caught error 😱!</MainText>
        <OtherText>
          The text of the error is as follows: "{errorMessage(error)}"
        </OtherText>
      </PageContainer>
      <Link to={"/tweets-cards/"}>
        <SlActionRedo />
        Please go to home page
        <SlActionRedo />
      </Link>
    </PageWrap>
  );
}

export default ErrorComponenet;
