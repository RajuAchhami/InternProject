import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './ui/RootLayout'
import Home from './features/Home';
import Services from './features/Services';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {index:true, element: <Home />},
      {path:'services', element: <Services />}
    ]
    
  }
]);


const App = () => {

  return <RouterProvider router={router} />
    
  
}

export default App