import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'

import Products from './pages/Products';
import Product from './pages/Product';
import CreateProduct from './pages/admin/CreateProduct'
import ManageProducts from './pages/admin/ManageProducts'
import UpdateProduct from './pages/admin/UpdateProduct'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
  },
  {
    path:"/product",
    element: <Product />,
  },
  {
    path:"/admin/manage-products",
    element: <ManageProducts />,
  },
  {
    path:"/admin/create-product",
    element: <CreateProduct />,
  },
  {
    path:"/admin/Update-product",
    element: <UpdateProduct />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
