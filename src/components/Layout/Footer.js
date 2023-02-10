import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Footer = ({ onLinkClick }) => {
  return (
    <div className="footer">
      <div class="footer-container">
        <div className="footer-item">
          <a
            href="#"
            onClick={() => {
              onLinkClick(2);
            }}
          >
            About
          </a>
          <a
            href="#"
            onClick={() => {
              onLinkClick(3);
            }}
          >
            Contact
          </a>
        </div>
        <div>
          <div className="icons-container">
            <FontAwesomeIcon icon={faCoffee} className="icons" />
            <FontAwesomeIcon icon={faCoffee} className="icons" />
            <FontAwesomeIcon icon={faCoffee} className="icons" />
          </div>
        </div>
        <div>3</div>
      </div>
    </div>
  );
};

export default Footer;
