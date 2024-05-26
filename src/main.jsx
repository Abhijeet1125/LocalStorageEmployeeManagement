import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Employee from './components/Employee';




const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' >
      <Route path='' element={<Login/>}/>
      <Route path='/dashboard' element = { <Dashboard/>} />
      <Route path='/employees' element={<Employee/>}></Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
