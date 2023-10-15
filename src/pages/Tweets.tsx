import { useDispatch } from "react-redux";
import CardList from "../components/CardList/CardList";
import { useEffect } from "react";
import { fetchUsers } from "../redux/operations";
import Filter from "../components/Filter/Filter";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { User } from "../Types/types";
import { useLocation } from "react-router-dom";
import { Link } from "../components/BaackBtn/BackBtn.styled";
import { HiArrowLeft } from "react-icons/hi";

function Tweets() {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/tweets-cards/";
  const dispatch: ThunkDispatch<User, User, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers()), [dispatch];
  });
  return (
    <>
      <Link to={backLinkHref}>
        <HiArrowLeft size="16" style={{ marginRight: "16px" }} />
        Back
      </Link>
      <Filter />
      <CardList />
    </>
  );
}

export default Tweets;
