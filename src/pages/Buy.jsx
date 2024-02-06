import { useParams } from "react-router-dom"
import data from '../data/data'

export default function BuyNow() {
  const {id}=useParams()
  let mydata=data.filter(res=>res.id.toString()=== id)
  let newDAta={...mydata[0]}
  console.log(mydata);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h3 className="mb-5">Shopping </h3>
          {/* <p>the product : {newDAta.title}</p> */}
          <img src={newDAta.imgUrl} width={400} alt="" />
        </div>
        <div className="col-lg-6">
          <div className="order-Summary">
          <p>Choose a shipping address to continue checking out. Youll still have a chance to review and edit your order before its final.</p>
          <hr />
            <h4>order summary</h4>
            <p>total item (1 item): {newDAta.price}</p>
            <p>Standard shipping:   20$</p>
            <p className="total-red">Order Total: {`${newDAta.price+20}$`}</p>
            <button className="btn btn-Shipping">Shipping</button>
          </div>
        </div>
      </div>
    </div>
  )
}
