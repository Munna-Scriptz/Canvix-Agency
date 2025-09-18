import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import About from './pages/About'
import LayoutTwo from './layout/LayoutTwo'

const App = () => {
  const MyRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>}></Route>
      </Route>
      
      <Route path='/about' element={<LayoutTwo/>}>
        <Route index element={<About/>}></Route>
      </Route>
    </Route>
  ))
  return (
    <>
      <RouterProvider router={MyRoute}/>
    </>
  )
}

export default App