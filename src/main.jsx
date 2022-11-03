import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Links from './components/links';
import App from "./App"

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children : [
        {
            path: "/",
            element: <Links />
        },


      ]
    },
  ]);

export default router;