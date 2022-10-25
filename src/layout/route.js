import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "./Main";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element:<Home/>
            }
        ]
    }
])