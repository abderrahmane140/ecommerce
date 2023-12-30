import img from '../images/About3.jpg'
export default function About() {
  return (
    <>
    <section id="about-section">
            <div className="about-left">
                <img src={img} alt="About Img"/>
            </div>
            <div className="about-right">
                <h1>About </h1><br></br>
                <p>Welcome to <b>EASY</b> your ultimate destination for premium
                   products at your fingertips. Explore our curated selection spanning fashion, gadgets
                  ,and lifestyle essentials. Enjoy a seamless shopping experience, secure transactions
                  ,and swift delivery. Join us and redefine the way you shop.
                </p><br></br>
                <div className="address">
                    <ul>
                        <li>
                            <span className="address-logo">
                                <i className="fas fa-paper-plane"></i>
                            </span>
                            <p>Address</p>
                            <span className="saprater">:</span>
                            <p>Safi,Salame, Morroco</p>
                        </li>
                        <li>
                            <span className="address-logo">
                                <i className="fas fa-phone-alt"></i>
                            </span>
                            <p>Phone No</p>
                            <span className="saprater">:</span>
                            <p>+91 987-654-4321</p>
                        </li>
                        <li>
                            <span className="address-logo">
                                <i className="far fa-envelope"></i>
                            </span>
                            <p>Email ID</p>
                            <span className="saprater">:</span>
                            <p>crowncoder@gmail.com</p>
                        </li>
                    </ul>
                </div><br></br>
                <div className="expertise">
                    <h3>Expertise</h3><br></br>
                    <ul>
                        <li>
                            <span className="expertise-logo">
                                <i className="fab fa-html5"></i>
                            </span>
                            <p>HTML</p>
                        </li>
                        <li>
                            <span className="expertise-logo">
                                <i className="fab fa-css3-alt"></i>
                            </span>
                            <p>CSS</p>
                        </li>
                        <li>
                            <span className="expertise-logo">
                                <i className="fab fa-node-js"></i>
                            </span>
                            <p>Java Script</p>
                        </li>
                        <li>
                            <span className="expertise-logo">
                                <i className="fab fa-react"></i>
                            </span>
                            <p>React Js</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}
