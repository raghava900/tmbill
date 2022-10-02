import {AiOutlineMenu} from 'react-icons/ai'
import './index.css'

const Header2 = () => (
  <div className="Header2">
    <img src="https://tmbill.com/img/tmbill-logo.svg" alt="logo" />
    <div className="options">
      <p className="header-para1">Home</p>
      <p className="header-para">Products</p>
      <div className="dropdown">
        <p className="header-para">BUY COURSES</p>
        <div className="dropdown-content">
          <p>
            <a
              href="https://tmbill.com/qsr-restaurant-management-software"
              className="para"
            >
              QSR
            </a>
          </p>

          <p>
            <a
              href="https://tmbill.com/dine-in-restaurant-management-software"
              className="para"
            >
              Dine-in
            </a>
          </p>

          <p>
            <a
              href="https://tmbill.com/cafe-management-software"
              className="para"
            >
              Cafes
            </a>
          </p>

          <p>
            <a
              href="https://tmbill.com/cafe-management-software"
              className="para"
            >
              Cafes
            </a>
          </p>

          <p>
            <a
              href="https://tmbill.com/cloud-kitchen-management-software"
              className="para"
            >
              Cloud-kitchens
            </a>
          </p>

          <p>
            <a
              href="https://tmbill.com/cloud-kitchen-management-software"
              className="para"
            >
              Food Trucks
            </a>
          </p>

          <p>
            <a
              href="https://tmbill.com/bakery-management-software"
              className="para"
            >
              Bakery
            </a>
          </p>

          <p>
            <a
              href="https://tmbill.com/bakery-management-software"
              className="para"
            >
              Ice Cream
            </a>
          </p>

          <p>
            <a
              href="https://tmbill.com/restaurant-and-bar-management-software"
              className="para"
            >
              Pubs & Bars
            </a>
          </p>
        </div>
      </div>
      <div className="dropdown">
        <p className="header-para">Why TMBill</p>
        <div className="dropdown-content">
          <a href="https://tmbill.com/why-tmbill#franchisees" className="para">
            For Multiples Outlets & FRANCHISEES
          </a>
          <p>
            <a href="https://tmbill.com/why-tmbill#owner" className="para">
              For Owner
            </a>
          </p>
          <p>
            <a href="https://tmbill.com/why-tmbill#staff" className="para">
              For Staff
            </a>
          </p>
        </div>
      </div>
      <p className="header-para">
        <a href="https://tmbill.com/where-we-are-now" className="header-para">
          Our Presence
        </a>
      </p>
      <p className="header-para">
        <a
          href="https://tmbill.com/want-to-become-a-reseller-of-tmbill"
          className="header-para"
        >
          Become a Partner
        </a>
      </p>
      <p className="header-para">
        <a href="https://tmbill.com/contact" className="header-para">
          Contact Us
        </a>
      </p>
    </div>
    <div className="drop-final">
      <div className="dropdown">
        <button className="dropbtn" type="button">
          <AiOutlineMenu />
        </button>
        <div className="dropdown-content">
          <p className="para">Home</p>
          <p className="para">Products</p>
          <p className="para">
            <a href="https://tmbill.com/where-we-are-now" className="para">
              Our Presence
            </a>
          </p>
          <p className="header-para">
            <a
              href="https://tmbill.com/want-to-become-a-reseller-of-tmbill"
              className="para"
            >
              Become a Partner
            </a>
          </p>
          <p className="header-para">
            <a href="https://tmbill.com/contact" className="para">
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Header2
