import { createBrowserRouter } from "react-router-dom";
import Store from "../Pages/Store/Store";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import OrderDetails from "../Pages/OrderDetails/OrderDetails";

export const Router=createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Store></Store>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
            ,{
                path:"/signUp",
                element:<SignUp></SignUp>
            },
            {
                path:"/orderDetails",
                element:<OrderDetails></OrderDetails>
            }
        ]
    }
])

