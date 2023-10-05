import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './index.css';
// import App from './App';

import Home from './routes/components/home/Home';
import Login from "./routes/components/UserRegistration/login_user/Login"
import Register from "./routes/components/UserRegistration/register/Register"
// import para usar o routes

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App />,
  //   children: [
  //       { Aqui vai fica pros proximos component no qual seguiram um padrao de layout de sidebar,footer e etc
  //           path: "",
  //           element: < />,
  //       },
  //    ]
  // },
  {
    path: "/",
    element: <Home />,
  },
  
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  
  

])
   

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);