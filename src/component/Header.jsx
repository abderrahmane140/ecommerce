import {Link} from 'react-router-dom'
import '../assets/fontawesome-free-6.4.2-web/css/all.css'
import '../App.css'
export default function Header() {
  return (
    <header>
        <Link to='/' className='logo'>Easy</Link>
        <div className="links">
          <Link className='about' to='/about'>About</Link>
          <Link className='contact' to='/contact'>Contact</Link>
          <Link className='' to='/addCard'><i className="fa-solid fa-cart-plus"></i></Link>
          <Link className='login' to='/login'><i className="fa-solid fa-user"></i></Link>
        </div>
    </header>
  )
}
