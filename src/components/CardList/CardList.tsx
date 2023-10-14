import { useSelector } from "react-redux";
import { Users } from "../../Types/types";
// import users from "../../mock/users.json";
import CardItem from "../CardItem/CardItem";
import { GridContainer } from "./CardList.styled";

function CardList() {
  const users: Users = useSelector((state) => state.users.items);

  return (
    <GridContainer>
      {users.map((user) => (
        <CardItem key={user.id} user={user} />
      ))}
    </GridContainer>
  );
}

export default CardList;
