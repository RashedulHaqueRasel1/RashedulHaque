import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../component/Home/Home";
import About from "../component/About/About";
import Skill from "../component/Skill/Skill";
import Project from "../component/Project/Project";
import Contact from "../component/Contact/Contact";


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
        {
            path: "/skill",
            element: <Skill></Skill>,
        },
        {
            path: "/project",
            element: <Project></Project>,
        },
        {
            path: "/contact",
            element: <Contact></Contact>,
        },
    ]
    }, 
   ]); 