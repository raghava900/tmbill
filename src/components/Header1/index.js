import {AiOutlineMail, AiOutlineInstagram, AiFillYoutube} from 'react-icons/ai'
import {BiPhone} from 'react-icons/bi'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import './index.css'

const Header1 = () => (
  <div className="header1">
    <div className="header-contact">
      <div>
        <p className="icons-space">
          <AiOutlineMail color="white" className="icons-space" />
          <span>
            <a href="mailto:contact@tmbill.com" className="a-tag">
              contact@tmbill.com
            </a>
          </span>
        </p>
      </div>
      <div className="header-contact">
        <p className="icons-space">
          <span>
            <BiPhone color="white" className="icons-space" />
          </span>
          <span className="a-tag">+91 9075-444-888</span>
        </p>
      </div>
    </div>

    <ul className="social-buttons">
      <li className="social-icons">
        <span>
          <a href="https://www.facebook.com/TMBill/" target="blank">
            <FaFacebookF color="#009900" />
          </a>
        </span>
      </li>
      <li className="social-icons">
        <span>
          <a href="https://www.instagram.com/TMBillApp/" target="blank">
            <AiOutlineInstagram color="#009900" />
          </a>
        </span>
      </li>
      <li className="social-icons">
        <span>
          <a
            href="https://www.youtube.com/playlist?list=PLOsLk94aH-q7lhMh7GB8gXP6XeJw6nIZJ"
            target="blank"
          >
            <AiFillYoutube color="#009900" />
          </a>
        </span>
      </li>
      <li className="social-icons">
        <span>
          <a href="https://www.linkedin.com/company/tmbill/" target="blank">
            <FaLinkedinIn color="#009900" />
          </a>
        </span>
      </li>
      <button type="button" className="header1-button">
        Download
      </button>
    </ul>
  </div>
)

export default Header1
