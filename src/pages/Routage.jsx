import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Layout from '../component/Layout'
import Product from './Product'
import ProductDetails from './ProductDetails'
import About from './About'
import Contact from './Contact'
import AddCard from './AddCard'
import Login from './Login'
import BuyNow from './BuyNow'
import PageNotFound from './PageNotFound'


export default function Routage(){

    return(
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
                <Route path='/buynow' element={<BuyNow />}/>
                <Route path='*' element={<PageNotFound />}/>
              </Route>
           </Routes>
         </BrowserRouter>
        </>
    )
}