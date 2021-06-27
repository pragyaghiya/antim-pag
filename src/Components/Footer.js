import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white flex flex-row w-full justify-between px-10 pt-9">
        <div className="">
          <div className=""></div>
          <h4>Quick Links</h4>
          <ul>
            <li>About us</li>
            <li>Courses</li>
            <li>Videos</li>
            <li>Success Stories</li>
          </ul>
        </div>

        <div className="">
          <h4>Our Services</h4>
          <ul>
            <li>
              <a href="https://joinindianarmy.nic.in/index.htm">Indian Army</a>
            </li>
            <li>Indian Airforce</li>
            <li>Indian Navy</li>
          </ul>
        </div>

        <div className="">
          <h3> Contact Us</h3>
          <p>
            "Gokuldham society"
            <br></br>
            "Powder Galli"
            <br></br>
            "Goregaon East"
            <br></br>
            <br></br>
            <strong>Landline:</strong>
            "+91 9000000000"
            <br></br>
            <strong>Email:</strong>
            "abhishek0art@gmail.com"
            <br></br>
          </p>
        </div>
      </div>
      <div className="footer-copyright text-center py-3 justify-items-end bg-black  text-white mt-1">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
      </div>
    </div>
    // </MDBFooter>
  );
};

export default Footer;
