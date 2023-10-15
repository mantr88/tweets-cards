import { useDispatch } from "react-redux";
import CardList from "../components/CardList/CardList";
import { useEffect } from "react";
import { fetchUsers } from "../redux/operations";
import Filter from "../components/Filter/Filter";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { User } from "../Types/types";

function Tweets() {
  const dispatch: ThunkDispatch<User, User, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers()), [dispatch];
  });
  return (
    <>
      <Filter />
      <CardList />
    </>
  );
}

export default Tweets;
