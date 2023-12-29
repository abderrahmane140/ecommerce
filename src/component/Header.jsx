import {Link} from 'react-router-dom'
import {useContext} from 'react'
import '../assets/fontawesome-free-6.4.2-web/css/all.css'
import '../App.css'
import { CartContext } from "../context/CartContext"
export default function Header() {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.length;
  //reduce((count, item) => count + item.count, 0)
  return (
    <header>
        <Link to='/' className='logo'>Easy</Link>
        <div className="links">
          <Link className='about' to='/about'>About</Link>
          <Link className='contact' to='/contact'>Contact</Link>
          <div className="addet">
            <Link className='' to='/addCard'><i className="fa-solid fa-cart-plus"></i><p className='counter'>{cartItemCount}</p></Link>
          </div>
          <Link className='login' to='/login'><i className="fa-solid fa-user"></i></Link>
        </div>
    </header>
  )
}
