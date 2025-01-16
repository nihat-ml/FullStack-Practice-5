import AddPage from "../Pages/AddPage";
import DetailPage from "../Pages/DetailPage";
import Favorites from "../Pages/Favorites";
import Features from "../Pages/Features";
import Home from "../Pages/Home";
import NoPage from "../Pages/NoPage";
import UserRoot from "../Pages/UserRoot";

export let ROUTES = [
    {
        path:"/",
        element:<UserRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/features",
                element:<Features/>
            },
            {
                path:"/:id",
                element:<DetailPage/>
            },
            {
                path:"/favorites",
                element:<Favorites/>
            },
            {
                path:"/addpage",
                element:<AddPage/>
            },
            {
                path:"*",
                element:<NoPage/>
            }
        ]
    }
]