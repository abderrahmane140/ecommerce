import { useParams,Link } from "react-router-dom"
import data from '../data/data'
import { useContext, useState } from "react"
import {CartContext} from '../context/CartContext'
// import data from "./data"
export default function ProductDetails() {
    const [done,setDone]=useState(false)
    const {id}=useParams()
    const {AddToCard}=useContext(CartContext)
    // useEffect(()=>{
    //     fetch(" http://localhost:8000/products").then(res=>res.json()).then(dat=>setData(dat))
    // },[])

    let mydata=data.filter(res=>res.id.toString()=== id)
    let newDAta={...mydata[0]}
    return (
        <>
        {/* {done && <div className="alert alert-success" role="alert"> Done!</div>} */}
        <div className="back-button">
            <Link
                    to={'/'}
                    relative="path"
                >&larr; <span>Back</span>
            </Link>
        </div>
        <div className="container">
        <div className="mb-3 mt-5" key={newDAta.id}>
            <div className="card-productdetail">
            <div className="card-img">
                <img src={newDAta.imgUrl} className="card-image" alt="" />
            </div>
            <div className="card-content">
                <h4>{newDAta.title}</h4>
                <p className="parag-desc">About this item</p>
                <p>{newDAta.description}</p>
                <span>{newDAta.price}</span>
                <button className={done?'greenButton':'addButton'} onClick={()=>{
                    AddToCard(newDAta.id)
                    setDone(true)
                }
                    }>{done?'Done':'Add To Card'}</button>
                <button className="mt-3 buy-button"><Link to='/buynow'>Buy Now</Link></button>
                
            </div>
            </div>            
            </div>
        </div>
        </>
    )
}
