import { Link } from "react-router-dom";
import Image from "../image/crypto 2.jpg";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h1>Build your international money transfer product</h1>
          <h3>
            Bitsans is the payment-as-service API <br />
            platform that enables you to build your international payment
            application. Build in <br />
            sandbox & launch in 6 weeks.
          </h3>
          <Link to="/signin" className="btn lg">
            Get Started
          </Link>
          {/* <Link to='/platform' className='btn lg'>Explore More</Link/> */}
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="crypto 2" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
