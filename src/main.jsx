import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import axios from 'axios'
import ProductPage from './Components/ProductPage.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const res = await axios.get("/data.json")
          return res.data;
        },

      },
      {
        path: "/idea/:id",
        element: <ProductPage></ProductPage>,
        loader: async ({params})=>{
          const res = await axios.get("/data.json");
          const idea = res.data.find(product => product.id === params.id)
          return idea;
        }
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
