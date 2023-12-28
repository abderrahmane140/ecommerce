import { useEffect, useRef, useState } from "react"
export default function Contact(){

    const nameField = useRef()
    const emailField = useRef()
    const messageField = useRef()
    const acceptConditionsField = useRef()

    const [isFormSent,setIsFormSent] = useState(false)
    const [isFormsValid,setIsFormsValid]= useState(false)
    const [errors,setErrors] = useState({})

    const validateForm = () => {
        const nameValue = nameField.current.value
        const emailValue = emailField.current.value
        const messageValue = messageField.current.value
        const conditionValue = acceptConditionsField.current.checked
        let isFormValid = true

        setErrors([])

    if(nameValue.trim() === ''){
        setErrors(prevState => {
             return {
                ...prevState, ...{name:'field required !'}
             }
            })
        isFormValid = false
    }
    if(emailValue.trim() === ''){
        setErrors(prevState =>{
            return {...prevState, ...{email :'field required !'} 
        }
        })
        isFormValid = false
    }else if(!emailValue.match(/^\S+@\S+\.\S+$/)){
        setErrors(prevState =>{
            return {...prevState, ...{email :'email incorrect !'}
        }
        })
        isFormValid = false
    }
    if(messageValue.trim() === ''){
        setErrors(prevState =>{
            return {...prevState, ...{message :'field required !'} 
        }
        })
        isFormValid = false
    }else if(messageValue.length<200){
        setErrors(prevState =>{
            return {...prevState, ...{message :`Message should be greater than <200> (${messageValue.length}/200)`} 
        }
        })
        isFormValid = false
    }
    if(!conditionValue){
        setErrors(prevState =>{
            return {...prevState, ...{AcceptAllCondition :'the checkbox must be checked !'}
    }
    })
        isFormValid = false
    }

    setIsFormsValid(isFormValid)
    return isFormValid
    
    }
    const resetForm = () => {
        nameField.current.value=''
        emailField.current.value=''
        messageField.current.value=''
        acceptConditionsField.current.checked=false
    }
    const handleChange = () => {
        validateForm()
    }

    const submitForm = (e) => {
        e.preventDefault()
        setIsFormSent(false)
        if(validateForm()){
            setIsFormSent(true)
            resetForm()
        }
        
    }
    const getError = (fieldName) => {
        return errors[fieldName]
    }
    const hasError = (fieldName) => {
        return getError(fieldName) !== undefined
    }
    const displayError = (fieldName) => {
        const field = document.querySelector(`#${fieldName}`)
        if(hasError(fieldName) ){
            field.style.border = '1px solid red'
            return <div className="text-danger">{getError(fieldName)}</div>
        }
        if(field !==null){
            document.querySelector(`#${fieldName}`).removeAttribute('style')
        }
        
        
    }
    const displayErrors= () => {
        return Object.entries(errors).map((error,key)=> {
            const [field,message] = error
            return <li key={key}>{field} : {message}</li>
        })
    }

    return <>
    {isFormSent? 
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
            <h1 className="display-3">Message Sent Succefully</h1>
            <p className="lead">Thank you for your message</p>
            <hr className="my-2" />
            <p>More info</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="." role="button">Return to Home Page</a>
            </p>
            </div>
        </div>
    :
    <div className="container Contact">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <img src="img/location.png" className="icon" alt="" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <img src="img/email.png" className="icon" alt="" />
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <img src="img/phone.png" className="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

        <form onSubmit={submitForm} onChange={handleChange} >
            <h3 className="title">Contact us</h3>
            <div className="input-container">   
              <input placeholder="username" type="text" id="name" className="input" ref={nameField} />
              {displayError('name')}
            </div>
            <div className="input-container">
              <input placeholder="email" type="email" id="email" className="input" ref={emailField} />
              {displayError('email')}
            </div>
            <div className="input-container textarea">
              <textarea placeholder="message" id="message" className="input" ref={messageField}></textarea>
              {displayError('message')}
            </div>

            <div className="form-check mb-4">
            <div className="d-flex">
                <input className="form-check-input me-2" type="checkbox" id="AcceptAllCondition"
                 ref={acceptConditionsField} />
                <label className="form-check-label" htmlFor="acceptAllConditions">
                    Accept all conditions
                </label>
            </div>
            {displayError('AcceptAllCondition')}
            </div>
            <button disabled={!isFormsValid} type="submit" className="btn btn-primary w-100 mb-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
}
    </>
}
