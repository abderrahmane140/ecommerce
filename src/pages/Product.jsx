import { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../data/data'
import '../assets/bootstrap-5.3.0-alpha3-dist/css/bootstrap.min.css'
function Product() {
    const [value,setValue]=useState('')
    const [catgFilter,setCatgFilter]=useState('')
    let result={}
    console.log(catgFilter)
    // useEffect(()=>{
    //     fetch("http://localhost:8000/products").then(item=>item.json()).then(dat=>setData(dat))
    // },[])
    


    //     fetchData();
    // }, []);
    if(value){
        result = data && data.filter(item=>
            item.title.toUpperCase().includes(value.toUpperCase()))
    }else if(catgFilter){
        result =data && data.filter(item=>
            item.type === catgFilter)
    }else{
        result= data
    }

    // let result = value && catgFilter ? data && data.filter(item=>
    //     item.title.toUpperCase().includes(value.toUpperCase()) || item.type === catgFilter
    // ):data


    // item.title.toUpperCase().includes(value.toUpperCase())
    // || item.type.toUpperCase() === catgFilter

    const HandleClick=()=>{
        document.getElementById('text').value=''
        setValue('')
    }
    return (
        <div className="container cont-filter">
        <div className="search-nav col-lg-12">
                <select name="" id="" onClick={e=>setCatgFilter(e.target.value)}>
                    <option value="" >All</option>
                    <option value="shirt" >Shirt</option>
                    <option value="book" >Book</option>
                    <option value="Electronic">Electronic</option>
                </select>
          <form onSubmit={e=>e.preventDefault()}>
            <div className="input-container">
                <input type="text" id='text' onChange={e=>setValue(e.target.value)} className='search-input' placeholder={`search for ${catgFilter?catgFilter:"anything"}`} />
                {value && <i className="fa-solid fa-x" onClick={HandleClick} ></i>}
            </div>
          </form>
        </div>
        <div className="row">
        {result.length>0 ? result.map(item=>(
            <div className="col-lg-4 mb-4" key={item.id}>
                <Link to={`/productDetails/${item.id}`}>
                <div className={`card`} style={{width: "18rem"}}  >
                    <div className="card-img">
                    <img src={item.imgUrl} className={`crd-${item.type}`} height="170px" width="180px"/>
                    </div>
                <div className="card-body">
                    <h5 className="card-title">{item.title.slice(0,60)+'...'}</h5>
                    <p>{item.price}</p>
                </div>
            </div>
                </Link>
            </div>
        )):<p className='red'>no iteam</p>}
        </div>
    </div>
    )
}

export default Product