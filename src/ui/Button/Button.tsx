import { MainButton } from "./Button.styled";

type Props = {
  children: string;
};

function Button({ children }: Props) {
  return <MainButton>{children}</MainButton>;
}

export default Button;
