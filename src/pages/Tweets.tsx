import { useDispatch } from "react-redux";
import CardList from "../components/CardList/CardList";
import { useEffect } from "react";
import { fetchUsers } from "../redux/operations";

function Tweets() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers()), [dispatch];
  });
  return (
    <>
      <CardList />
    </>
  );
}

export default Tweets;
