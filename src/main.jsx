import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Links from './components/links';
import App from "./App"
import Contact from './components/contact';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children : [
        {
            path: "/",
            element: <Links />
        },
        {
            path: "/contact",
            element: <Contact />
        },


      ]
    },
  ]);

export default router;