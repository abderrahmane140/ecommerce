import { useParams,Link, useNavigate } from "react-router-dom"
import data from '../data/data'
import { useContext, useState } from "react"
import {CartContext} from '../context/CartContext'
import { LoginContext } from "../context/loginContext"
// import data from "./data"
export default function ProductDetails() {
    const [done,setDone]=useState(false)
    const {id}=useParams()
    const {AddToCard}=useContext(CartContext)
    const { login } =useContext(LoginContext)
    const navigate =useNavigate()

    let mydata=data.filter(res=>res.id.toString()=== id)
    const newDAta={...mydata[0]}
    const handleBuy=() =>{
        if(!login){
            return  navigate(`/login?message=you must log in first&redirectTo=/buy/${newDAta.id}`)
        }
        navigate(`/buy/${newDAta.id}`)
    }
    console.log(login)
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
            <div className="row">
                <div className="mb-3 mt-5" key={newDAta.id}>
                    <div className="card-productdetail ">
                    <div className="card-img">
                        <img src={newDAta.imgUrl} className="card-image" alt="" />
                    </div>
                    <div className="card-content">
                        <h4>{newDAta.title}</h4>
                        <p className="parag-desc">About this item</p>
                        <p>{newDAta.description}</p>
                        <span>{`${newDAta.price}$`}</span>
                        <button className={done?'greenButton':'addButton'} onClick={()=>{
                            AddToCard(newDAta.id)
                            setDone(true)
                        }
                        
                            } disabled={done}>{done?'Done':'Add To Card'}</button>
                        {/* <button className="mt-3 buy-button"><Link to={`/buy/${newDAta.id}`}>Buy Now</Link></button> */}
                        <button className="mt-3 buy-button" onClick={handleBuy}>Buy Now</button>
                        
                    </div>
                    </div>            
                    </div>
            </div>
        </div>
        </>
    )
}
