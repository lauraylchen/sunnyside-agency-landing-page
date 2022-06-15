import logo from "../img/logo.svg";
import facebook from '../img/icon-facebook.svg';
import instagram from '../img/icon-instagram.svg';
import pinterest from '../img/icon-pinterest.svg';
import twitter from '../img/icon-twitter.svg';

const Footer = () => {
  return (
    <div>
      <img src={logo} alt="Company logo." />
      <div>
        <a href="/">About</a>
        <a href="/">Services</a>
        <a href="/">Projects</a>
      </div>
      <div>
        <a href="/">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="/">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="/">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="/">
          <img src={pinterest} alt="Pinterest" />
        </a>
      </div>
    </div>
  )
}

export default Footer;
