import { Link } from "react-router-dom"
import img from '../assets/img/not-found.jpg'
export default function PageNotFound() {
  return (
    <div className="container container-not-found">
        <div className="not-found">
            <div className="title-not-found">
                <img src={img} style={{width:'200px',marginLeft:"70px"}} alt="" />
                <h1>ops!! Page not Found</h1>
            </div>
            <div className="button-not-found">
                <Link to='/'>Go back to home</Link>
            </div>
        </div>
    </div>
  )
}
