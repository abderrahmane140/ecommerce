import { useContext } from "react"
import { CartContext } from "../context/CartContext"
// import data from '../data/data'
export default function AddCard() {
    const {cart}= useContext(CartContext)

    return (
        <div className="container">
            {cart.map((item)=>(
                <div className="card mb-3" key={item} style={{height: "160px"}}>
                <div className="row g-0">
                    <div className="col-md-4 mt-3">
                    <img src={item.imgUrl} style={{width: "120px"}} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-4 mt-3">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p>{item.price}</p>
                    </div>
                    </div>
                    <div className="col-md-4 mt-5 connt">
                        <p className="number">{item.counte}</p>
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
}

