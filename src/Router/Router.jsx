import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../Page/Home/Home';
import Error from "../Page/Error/Error";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";

import PrivateRoute from "../Page/PrivateRoute/PrivateRoute";

import Profile from "../Page/Profile/Profile";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
       
        
        
       
        {
          path: '/profile',
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
       
      ],
    },
  ]);

  export default router;