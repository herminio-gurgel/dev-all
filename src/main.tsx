import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./styles/GlobalStyle.ts";
import "bulma/css/bulma.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.tsx";
import ErrorPage from "./routes/error-page.tsx";
import Sources from "./routes/sources.tsx";
import About from "./routes/about.tsx";
import PostList from "./components/PostList/index.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Root element not found");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PostList />,
      },
      {
        path: "/sources",
        element: <Sources />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

createRoot(rootElement).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </StrictMode>,
);
