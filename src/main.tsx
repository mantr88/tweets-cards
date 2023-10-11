import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Tweets from "./pages/Tweets.tsx";
import ErrorComponenet from "./components/ErrorComponent/ErrorComponenet.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./helpers/theme.ts";

const router = createBrowserRouter([
  {
    path: "/tweets-cards/",
    element: <App />,
    errorElement: <ErrorComponenet />,
    children: [
      {
        path: "/tweets-cards/",
        element: <Home />,
      },
      {
        path: "/tweets-cards/tweets",
        element: <Tweets />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
