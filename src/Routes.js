import { createBrowserRouter } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import Main from "./Components/layouts/Main";
import QuizDetail from "./Components/QuizDetail/QuizDetail";
import Rechart from "./Components/Rechart/Rechart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "cart/:cartId",
        loader: async ({ params }) => {
          console.log(params.cartId);
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.cartId}`
          );
        },

        element: <QuizDetail></QuizDetail>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "rechart",
        element: <Rechart></Rechart>,
      },
    ],
  },
]);
export default router;
