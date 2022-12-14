import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "./Main";
import Register from "../pages/Form/Register"
import Login from "../pages/Form/Login";
import Courses from "../pages/Courses/Courses";
import CourseDetails from "../pages/Courses/CourseDetails/CourseDetails";
import Blog from "../pages/Blog/Blog";
import NotFound from "../pages/NotFound/NotFound";
import Premium from "../Premium/Premium";
import Protected from "../pages/Protected/Protected";
import FAQ from "../pages/FAQ/FAQ";

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
                path: '/courses',
                element: <Courses />,
                loader:()=>fetch('https://learning-serverside.vercel.app/courses')
            },
            {
                path: '/course/:id',
                element: <CourseDetails />,
                loader:({params})=>fetch(`https://learning-serverside.vercel.app/course/${params.id}`)
            },
            {
                path: '/premium/:id',
                element: <Protected><Premium/></Protected>,
                loader:({params})=>fetch(`https://learning-serverside.vercel.app/premium/${params.id}`)
            },
            {
                path: '/blog',
                element:<Blog/>
            },
            {
                path: '/faq',
                element:<FAQ/>
            },
            {
                path: '/register',
                element:<Register/>
            },
            {
                path: '/login',
                element:<Login/>
            },
            {
                path: '*',
                element:<NotFound/>
            }
        ]
    }
])