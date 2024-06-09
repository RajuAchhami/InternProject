import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './ui/RootLayout'
import Home from './features/Home';
import About from './features/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {index:true, element: <Home />},
      {path:'about', element: <About />}
    ]
    
  }
]);


const App = () => {

  return <RouterProvider router={router} />
    
  
}

export default App