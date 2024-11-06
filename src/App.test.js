import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { ReactDOM, RouterProvider } from 'react-router-dom';
import React from 'react';
import './index.css';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/about';

 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: " ",
        element: <Home />,
      },
      {
        path: "about ",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

     <React.StrictMode>
     <RouterProvider router = {router} />
     </React.StrictMode>
    );
