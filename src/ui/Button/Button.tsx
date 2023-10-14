import { MainButton } from "./Button.styled";

type Props = {
  children: string;
  style: object;
  onClick?: () => void;
};

function Button({ children, ...otherProps }: Props) {
  return <MainButton {...otherProps}>{children}</MainButton>;
}

export default Button;
