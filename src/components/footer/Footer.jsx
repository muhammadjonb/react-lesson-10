import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer_center">
            <div className="footer_center_logo">
              <h2>Funiro.</h2>
              <p>
                400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
              </p>
            </div>
            <div className="footer_center_links">
              <span>Links</span>
              <p>Home</p>
              <p>Shop</p>
              <p>About</p>
              <p>Contact</p>
            </div>
            <div className="footer_center_links">
              <span>Help</span>
              <p>Payment Options</p>
              <p>Returns</p>
              <p>Privacy Policies</p>
            </div>
            <div className="footer_center_links">
              <span>Newsletter</span>
              <div className="footer_center_underline">
                <input type="email" placeholder="Enter Your Email Address" />
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <p>2023 furino. All rights reverved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer