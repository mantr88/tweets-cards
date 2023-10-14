import { useSelector } from "react-redux";
import { Users } from "../../Types/types";
// import users from "../../mock/users.json";
import CardItem from "../CardItem/CardItem";
import { GridContainer } from "./CardList.styled";
import Button from "../../ui/Button/Button";
import { useState } from "react";

function CardList() {
  const users: Users = useSelector((state) => state.users.items);
  const [visibleItems, setVisibleItems] = useState(3);

  const loadMoreHandler = () => {
    setVisibleItems((pervState) => pervState + 3);
  };

  return (
    <>
      <GridContainer>
        {users.slice(0, visibleItems).map((user) => (
          <CardItem key={user.id} user={user} />
        ))}
      </GridContainer>
      {visibleItems < users.length && (
        <Button
          onClick={loadMoreHandler}
          style={{
            backgroundColor: "#5CD3A8",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            marginTop: "36px",
          }}
        >
          Load more
        </Button>
      )}
    </>
  );
}

export default CardList;
