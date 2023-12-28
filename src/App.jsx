// import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Product from './pages/Product'
import About from './pages/About'
import Layout from './component/Layout'
import Contact from './pages/Contact'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import AddCard from './pages/AddCard'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Product />}/>
              <Route path='/productDetails/:id' element={<ProductDetails />}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='/addCard' element={<AddCard />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='*' element={<PageNotFound />}/>
            </Route>

        </Routes>
         </BrowserRouter>
    </>
  )
}

export default App
