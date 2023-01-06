import { createBrowserRouter } from "react-router-dom";
import axios from "axios";
import App from "./App";
import Form from "./Form";
import Shortcode from "./Shortcode";
import Error from "./Error";
import Stats from "./Stats";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Form />,
      },
      {
        path: ":shortcode",
        element: <Shortcode />,
        loader: async ({ params }) => {
          return axios.get(`/api/${params.shortcode}`);
        },
        errorElement: <Error />,
      },
      {
        path: ":shortcode/stats",
        element: <Stats />,
        loader: async ({ params }) => {
          return axios.get(`/api/${params.shortcode}/stats`);
        },
        errorElement: <Error />,
      },
    ],
  },
]);
