import React from "react";
import "../Footer/footer.css"

const Footer = () => {
  
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-info">
              <img src="/src/assets/img/logo1.png" alt="VERTIGO" />
              <p>
                What is Vertigo. Vertigo is a page who can find events or historical places. 
                With Vertigo it is more easy learn about your country which you already into.
                You can check out which events are exist in your town, learn its location, and even
                You can online reservate it! We are Vertigo.
              </p>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="fa fa-angle-right"></i> <a href="/">Home</a>
                </li>
                <li>
                  <i class="fa fa-angle-right"></i> <a href="#">About us</a>
                </li>
                <li>
                  <i class="fa fa-angle-right"></i> <a href="#">Services</a>
                </li>
                <li>
                  <i class="fa fa-angle-right"></i>{" "}
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i class="fa fa-angle-right"></i>{" "}
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="fa fa-angle-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i class="fa fa-angle-right"></i> <a href="#">About us</a>
                </li>
                <li>
                  <i class="fa fa-angle-right"></i> <a href="#">Services</a>
                </li>
                <li>
                  <i class="fa fa-angle-right"></i>{" "}
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i class="fa fa-angle-right"></i>{" "}
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                Lefkosada bir yerde <br />
                Lefkosa, CY 99010
                <br />
                Cyprus <br />
                <strong>Phone:</strong> +90 533 870 87 98
                <br />
                <strong>Email:</strong> VertigoAPP@gmail.com
                <br />
              </p>

              <div class="social-links">
                <a href="#" class="twitter">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#" class="facebook">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#" class="instagram">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="#" class="google-plus">
                  <i class="fa fa-google-plus"></i>
                </a>
                <a href="#" class="linkedin">
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright <strong>TheEvent</strong>. All Rights Reserved
        </div>
        <div class="credits">
          Designed by Verti-go Team
        </div>
      </div>
    </footer>
  );
};
export default Footer;
