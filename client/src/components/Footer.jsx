// import { NavLink } from "react-router-dom";
import './Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaPinterest} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className=" page-footer">
      <nav className="social">
        <h2>YOU ME TIME</h2>

        <div className="menu-social-link-haven"></div>
        <ul id="menu-social-links" className="menu">
          <li id="menu-item-27" className="facebook menu">
            <FaFacebook color="#af7439" size={30} />
            <a href="https://www.facebook.com/grace.fabric.771">Facebook</a>
          </li>
          <li id="menu-item-28" className="twitter menu-item menu">
            <FaTwitter color="#af7439" size={30} />
            <a href="https://twitter.com/Grace_Fabrics_Empire/">Twitter</a>
          </li>
          <li id="menu-item-30" className="instaram menu">
            <FaInstagram color="#af7439" size={30} />
            <a href="https://instagram.com/grace_fabrics_empire/">Instagram</a>
          </li>
          <li id="menu-item-31" className="pinterest menu">
            <FaPinterest color="#af7439" size={30} />
            <a href="https://www.pinterest.com/gracefabrics/">Pinterest</a>
          </li>
        </ul>
      </nav>

      <div className="footer-bottom">
        <ul>
          <li>
            <a href="https://ww.gracefabric.com/terms-condition/">
              Terms &amp; Condition
            </a>
          </li>
          {/* <li>
            <a href="https://ww.gracefabric.com/terms-condition/">
              Services
            </a>
          </li> */}

          <li id="menu-item-32" className="contact-us menu">
            <a href="http://ww.gracefabric.com/contact-us/">Contact Us</a>
          </li>
        </ul>
        <div className="service">Service Page</div>
      </div>
    </footer>
  )
}
export default Footer
