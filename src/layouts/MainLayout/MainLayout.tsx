import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Container } from "./MainLayout.styles";

function MainLayout() {
  return (
    <Container>
      <Navigation />
      <Outlet />
    </Container>
  );
}

export default MainLayout;
