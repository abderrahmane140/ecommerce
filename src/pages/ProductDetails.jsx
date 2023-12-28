import { useParams,Link } from "react-router-dom"
import data from '../data/data'
import { useContext } from "react"
import {CartContext} from '../context/CartContext'
// import data from "./data"
export default function ProductDetails() {
    const {id}=useParams()
    const {AddToCard}=useContext(CartContext)
    // useEffect(()=>{
    //     fetch(" http://localhost:8000/products").then(res=>res.json()).then(dat=>setData(dat))
    // },[])
    let mydata=data && data.filter(res=>res.id.toString()=== id)
    return (
        <>
        <div className="back-button">
            <Link
                    to={'/'}
                    relative="path"
                >&larr; <span>Back</span>
            </Link>
        </div>
        <div className="container">
        {mydata && mydata.map(({id,imgUrl,title,description,price})=>(
        <div className="mb-3 mt-5" key={id}>
            <div className="card-productdetail">
            <div className="card-img">
                <img src={imgUrl} className="card-image" alt="" />
            </div>
            <div className="card-content">
                <h4>{title}</h4>
                <p className="parag-desc">About this item</p>
                <p>{description}</p>
                <span>{price}</span>
                <button style={{display:'block'}} onClick={()=>AddToCard(id)}>Add to card</button>
                <button className="mt-3">Buy Now</button>
            </div>
            </div>            
            </div>
        ))}
        </div>
        </>
    )
}
