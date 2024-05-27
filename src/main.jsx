import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';
import { EmployeeProvider } from './contexts';




const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' >
      <Route path='' element={<Login/>}/>
      <Route path='dashboard' element = { <Dashboard/>} />
      <Route path='employee' element={<EmployeeProvider> <Employee/>  </EmployeeProvider> }></Route>
      <Route path='add' element = { <EmployeeProvider> <AddEmployee/> </EmployeeProvider> }> </Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
