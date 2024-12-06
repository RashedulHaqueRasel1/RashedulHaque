import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../component/Home/Home";
import About from "../component/About/About";


export  const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <Main></Main>, 
    children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/about",
            element: <About></About>,
        },
    ]
    }, 
   ]); 