import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Products from '../components/Products'
import SIngleProduct from '../components/SIngleProduct'
import Cart from '../components/Cart'
import Login from '../components/Login'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/products' element={<PrivateRoute><Products/></PrivateRoute> } />
        <Route path='/products/:id' element={<PrivateRoute><SIngleProduct/> </PrivateRoute>} />
        <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute> } />
        <Route path='/login' element={<Login/> } />
    </Routes>
  )
}

export default AllRoutes