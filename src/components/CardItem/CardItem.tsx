import { User } from "../../Types/types";
import Logo from "../Logo";
import { GridItems, LogoWrap } from "./CardItem.styled";
type Props = {
  user: User;
};
function CardItem({ user }: Props) {
  return (
    <GridItems>
      <LogoWrap>
        <Logo />
      </LogoWrap>
    </GridItems>
  );
}

export default CardItem;
