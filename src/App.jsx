import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Car_Services from './components/Car_Services'
import Insurance_Claim from './components/Insurance_Claim'
import Vehicleai_Labs from './components/Vehicleai_Labs'
import Baleno_Petrol from './components/major_brands/maruti_suzuki/Baleno_Petrol'
import Altroz_Petrol from './components/major_brands/tata/Altroz_Petrol'
import City_Petrol from './components/major_brands/honda/City_Petrol'
import Innova_Petrol from './components/major_brands/toyota/Innova_Petrol'
import Creta_Petrol from './components/major_brands/hyundai/Creta_Petrol'
import Seltos_Petrol from './components/major_brands/kia/Seltos_Petrol'
import Hector_Petrol from './components/major_brands/mg/Hector_Petrol'
import Q3_Petrol from './components/major_brands/audi/Q3_Petrol'
import Xuv700_Petrol from './components/major_brands/mahindra/Xuv700_Petrol'
import Admin from './components/admin/adminroute/Admin'
import Blog from './components/blog/Blog'
import Login from './components/login/Login'
import Singup from './components/ragister/Singup'
import Layout from './components/layout/Layout'

import { ToastContainer } from 'react-toastify'
import Cart from './components/cart/Cart'

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route element = {<Layout />}>
            <Route path="/" element={<Car_Services />} />
            <Route path="/insurance-claim" element={<Insurance_Claim />} />
            <Route path="/vehicleai-labs" element={<Vehicleai_Labs />} />
            <Route path="/maruti-suzuki" element={<Baleno_Petrol />} />
            <Route path="/tata" element={<Altroz_Petrol />} />
            <Route path="/honda" element={<City_Petrol />} />
            <Route path="/toyota" element={<Innova_Petrol />} />
            <Route path="/hyundai" element={<Creta_Petrol />} />
            <Route path="/kia" element={<Seltos_Petrol />} />
            <Route path="/mg" element={<Hector_Petrol />} />
            <Route path="/audi" element={<Q3_Petrol />} />
            <Route path="/mahindra" element={<Xuv700_Petrol />} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/cart" element={<Cart/>} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
