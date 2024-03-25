import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import ListedBooks from './ListedBooks';
import PagesToRead from './PagesToRead';
import BestBooks from './BestBooks';
import Library from './Library';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element:  <Home></Home> ,
      },
      {
        path: "/Listed",
        element:  <ListedBooks></ListedBooks> ,
      },
      {
        path: "/pages",
        element:   <PagesToRead></PagesToRead> ,
      },
      {
        path: "/best",
        element:  <BestBooks></BestBooks> ,
      },
      {
        path: "/library",
        element:  <Library></Library> ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
