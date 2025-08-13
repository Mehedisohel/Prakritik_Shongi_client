import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../Page/Home/Home';
import Error from "../Page/Error/Error";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import MyCrafts from "../Page/MyCrafts/MyCrafts";
import PrivateRoute from "../Page/PrivateRoute/PrivateRoute";
import AddCraft from "../Page/AddCraft/AddCraft";
import AllCrafts from "../Page/AllCrafts/AllCrafts";
import Craftdetails from "../Page/Craftdetails/Craftdetails";
import Updatecraftiteminfo from "../Page/Updatecraftiteminfo/Updatecraftiteminfo";
import Profile from "../Page/Profile/Profile";
import Subcategoryitem from "../Page/Subcategoryitem/Subcategoryitem";
import Craftiteminfo from "../Component/Craftiteminfo/Craftiteminfo";


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
  path: "/craftitem/:id",
  element: <Craftiteminfo />
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
          path: '/allcrafts',
          element: <PrivateRoute><AllCrafts></AllCrafts></PrivateRoute>,
          loader: () => fetch('https://prakritik-shongi-backend.vercel.app/craftlist')
        },
        {
          path: '/mycrafts',
          element: <PrivateRoute><MyCrafts></MyCrafts></PrivateRoute>,
          loader: () => fetch('https://prakritik-shongi-backend.vercel.app/craftlist')
        },
        {
          path: '/addcraft',
          element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>
        },
        {
          path: '/craftdetails/:id',
          element: <PrivateRoute><Craftdetails></Craftdetails></PrivateRoute>,
          loader: () => fetch('https://prakritik-shongi-backend.vercel.app/craftlist')
        },
        {
          path: '/mycrafts/updateinfo/:id',
          element: <PrivateRoute><Updatecraftiteminfo></Updatecraftiteminfo></PrivateRoute>,
          loader: ({params}) => fetch(`https://prakritik-shongi-backend.vercel.app/craftlist/${params.id}`)
        },
        {
          path: '/profile',
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path: '/subcategoryitem/:id',
          element: <PrivateRoute><Subcategoryitem></Subcategoryitem></PrivateRoute>,
          loader: ({params}) => fetch(`https://prakritik-shongi-backend.vercel.app/subcategorylist/${params.id}`)
        }
      ],
    },
  ]);

  export default router;