import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Tweets from "./pages/Tweets.tsx";
import ErrorComponenet from "./components/ErrorComponent/ErrorComponenet.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./helpers/theme.ts";
import MainLayout from "./layouts/MainLayout/MainLayout.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/tweets-cards/",
    element: <MainLayout />,
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
      {
        path: "*",
        element: <ErrorComponenet />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
