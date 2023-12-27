import {  useState } from "react"
import './form.css'
export default function Login() {
    const [usernam,setUsernam]=useState('')
    const [pws,setPws]=useState('')
    const [display,setDisplay]=useState(true)
    const [style,setStyle]=useState(false)
    const [dataArray,setDataArray]=useState([])
    const [login,setLogin]=useState(false)
    const [feild,setFeild]=useState(false)
    let isvalide=true
    const [error,setError]=useState({
        email:false,
        password:false,
        nam:false
    })
    const [formData, setFormData] = useState({
        nam: '',
        email: '',
        password: '',
      });
      const handleInputChange=(e)=>{
        const { name, value } = e.target;

        setFormData({
          ...formData,
          [name]: value,
        });
      }
      console.log(formData)
    const handleClick=()=>{
        setDisplay(false)
    }
    const handleClicks=()=>{
        setDisplay(true)
    }

    const validationEmail=()=>{
        if(!formData.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) || formData.email.trim()===''){
            setError(p=>{return{...p,email:true}})
            isvalide=false
        }else{
            setError(p=>{return{...p,email:false}})
        }
        if(formData.nam.trim()===''){
            setError(p=>{return{...p,nam:true}})
            isvalide=false
        }else{
            setError(p=>{return{...p,nam:false}})
        }
        
        if(formData.password.trim()===''){
            setError(p=>{return{...p,password:true}})
            isvalide=false
        }else{
            setError(p=>{return{...p,password:false}})
        }
        return isvalide
    }
    
    const handleLoginSubmit=(e)=>{
        e.preventDefault()
        for(let i=0;i<dataArray.length;i++){
            let data= dataArray[i]
            if(data.usernam === usernam && data.psw){
                setLogin(true)
            }else{
                setFeild(true)
            }
        }
    }
    const handleSubmit=(e)=>{
        if(!validationEmail()){
            e.preventDefault()
        }else{
            e.preventDefault()
            const newData={
                usernam:formData.nam,
                email:formData.email,
                psw:formData.password
            }
            setDataArray([...dataArray,newData])
            setDisplay(true)
        }
    }
    
    // console.log(valus)
    return (
        <div className="form-login">
            <main >
            {login ? <h1 className='green'>login succes</h1> :
            <form  >
                {display ?
                <>
                {feild ? <p className="red">account not found</p>:null}
                <h4>Login</h4>
                <label htmlFor="">Email or Usernam</label>
                <input type="text" value={usernam} onChange={e=>{
                    setUsernam(e.target.value)
                }}/>
                <label >Password</label>
                <input type="password" value={pws} onChange={e=>{
                    setPws(e.target.value)
                }}/>
                <input type="submit" onClick={handleLoginSubmit} value="Login" className="btn-submit" />
                <span  onClick={handleClick}>I dont have account ?</span>
                </>
                :
                <>
                <h4>sign up</h4>
                    <label >Name</label>
                    <input type="text" value={formData.nam} name="nam" onChange={handleInputChange}/>
                    {error.nam && <p className='red'>name not valide</p>}
                    <label >Email</label>
                    <input className={style ?'pswError':null}
                    type="text" value={formData.email} name="email" onChange={handleInputChange}/>
                    {error.email && <p className='red'>email not valide</p>}
                    <label >Password</label>
                    <input type="password" value={formData.password} name="password" onChange={handleInputChange}/>
                    {error.password && <p className="red">password not valide</p>}
                    <input type="submit"value="Sign Up" className="btn-submit" onClick={handleSubmit}/>
                    <span  onClick={handleClicks}>I have already acount</span>
                </>
            }
            </form>
        }
        </main>
        </div>
)
}
