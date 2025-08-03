import React from "react"
import ReactDom from "react-dom/client" 
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";




const AppLayout= () =>{
    return(
        <div className="app">
            <Header />
            <Outlet/>
        </div>
    )
}
const approuter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
        {
            path:"/about",
            element:<About/>,
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/",
            element:<Body/>
        },
        {
            path:"/resturant/:resid",
            element:<ResturantMenu />
        }
    ],
    errorElement:<Error/>
    },
])

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter}/>);