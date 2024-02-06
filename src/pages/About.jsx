import img from '../images/About3.jpg'
export default function About() {
    return (
      <>
        <section data-testid="about-section" id="about-section">
          <div className="about-left">
            <img data-testid="img" src={img} alt="About Img" />
          </div>
          <div className="about-right">
            <h1 data-testid="abt">About</h1>
            <br />
            <p>
              Welcome to <b>EASY</b> your ultimate destination for premium products at your fingertips. Explore our curated selection spanning fashion, gadgets, and lifestyle essentials. Enjoy a seamless shopping experience, secure transactions, and swift delivery. Join us and redefine the way you shop.
            </p>
            <br />
            <div className="address" data-testid="div01">
              <ul>
                <li>
                  <span className="address-logo">
                    <i className="fas fa-paper-plane" />
                  </span>
                  <p>Address</p>
                  <span className="saprater">:</span>
                  <p>Safi, Salame, Morroco</p>
                </li>
                <li>
                  <span className="address-logo">
                    <i className="fas fa-phone-alt" />
                  </span>
                  <p>Phone No</p>
                  <span className="saprater">:</span>
                  <p>+91 987-654-4321</p>
                </li>
                <li>
                  <span className="address-logo">
                    <i className="far fa-envelope" />
                  </span>
                  <p>Email ID</p>
                  <span className="saprater">:</span>
                  <p>crowncoder@gmail.com</p>
                </li>
              </ul>
            </div>
            <br />
            <div className="expertise" data-testid="div02">
              <h3>Expertise</h3>
              <br />
              <ul>
                <li>
                  <span className="expertise-logo">
                    <i className="fab fa-html5" />
                  </span>
                  <p data-testid="html">HTML</p>
                </li>
                <li>
                  <span className="expertise-logo">
                    <i className="fab fa-css3-alt" />
                  </span>
                  <p data-testid="css">CSS</p>
                </li>
                <li>
                  <span className="expertise-logo">
                    <i className="fab fa-node-js" />
                  </span>
                  <p data-testid="java script">Java Script</p>
                </li>
                <li>
                  <span className="expertise-logo">
                    <i className="fab fa-react" />
                  </span>
                  <p data-testid="react">React Js</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
