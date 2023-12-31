import { useSelector } from "react-redux";
import { State, User, Users } from "../../Types/types";
import CardItem from "../CardItem/CardItem";
import { GridContainer } from "./CardList.styled";
import Button from "../../ui/Button/Button";
import { useState } from "react";
import { statusFilters } from "../../redux/constants";

const getFilteredUsers = (users: Users, filterStatus: string) => {
  switch (filterStatus) {
    case statusFilters.follow:
      return users.filter((user: User) => !user.isFollowed);
    case statusFilters.followings:
      return users.filter((user: User) => user.isFollowed);
    default:
      return users;
  }
};

function CardList() {
  const users: Users = useSelector((state: State) => state.users.items);
  const filterStatus: string = useSelector(
    (state: State) => state.filter.status
  );
  const [visibleItems, setVisibleItems] = useState(3);

  const filteredUsers = getFilteredUsers(users, filterStatus);

  const loadMoreHandler = () => {
    setVisibleItems((pervState) => pervState + 3);
  };

  return (
    <>
      <GridContainer>
        {filteredUsers.slice(0, visibleItems).map((user) => (
          <CardItem key={user.id} user={user} />
        ))}
      </GridContainer>
      {visibleItems < users.length && filteredUsers.length > 3 && (
        <div style={{ position: "relative" }}>
          <Button
            onClick={loadMoreHandler}
            style={{
              position: "absolute",
              top: "0",
              left: "50%",
              transform: "translate(-50%)",
              backgroundColor: "#5cd3a8",
              display: "block",
              marginTop: "36px",
            }}
          >
            Load more
          </Button>
        </div>
      )}
    </>
  );
}

export default CardList;
