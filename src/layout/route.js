import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "./Main";
import Register from "../pages/Form/Register"
import Login from "../pages/Form/Login";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/register',
                element:<Register/>
            },
            {
                path: '/login',
                element:<Login/>
            }
        ]
    }
])