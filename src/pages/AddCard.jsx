import { useContext } from "react"
import { CartContext } from "../context/CartContext"
// import data from '../data/data'
export default function AddCard() {
    const { cart } = useContext(CartContext);
    const{handledelete}=useContext(CartContext);
    console.log(cart.length)
    const handleDelete = (id) => {
        handledelete(id)
    };
    return (
        <div data-testid="div1" className="container">
            {cart.map((item)=>(
                <div  className="card mb-3" key={item.id} style={{height: "160px"}}>
                <div className=" ha row g-0">
                    <div className="col-md-3 mt-3">
                    <img data-testid="img"  src={item.imgUrl} style={{width: "120px"}} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-3 mt-3">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p>{item.price}</p>
                    </div>
                    </div>
                    <div className="col-md-3 mt-5 connt">
                        <p className="number">{item.counte}</p>
                    </div>
                    <div className="col-md-3 trash">
                    <span data-testid="span" onClick={()=>handleDelete(item.id)}><i className="fa-solid fa-trash"></i></span>
                    </div>
                        
                </div>
                </div>
            ))}
        </div>
    )
}

