import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import misologo from "../assets/img/alt_logo.png";
import logo1 from "../assets/img/company1.png";
import logo2 from "../assets/img/company2.png";
import logo3 from "../assets/img/company3.png";
import logo4 from "../assets/img/company4.png";
import copyright from "../assets/img/copyright.png";
import social1 from "../assets/img/social-fb.png";
import social4 from "../assets/img/social-ig.png";
import social2 from "../assets/img/social-li.png";
import social3 from "../assets/img/social-tw.png";
import social5 from "../assets/img/social-yt.png";
import "../css/Home.css";
import Navbar from "./Navbar";

function Home() {
  useEffect(() => {
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("subshow");
        } else {
          entry.target.classList.remove("subshow");
        }
      });
    });

    const hiddenPtags = document.querySelectorAll(".subhidden");
    hiddenPtags.forEach((el) => observer2.observe(el));

    const cleanup2 = () => {
      hiddenPtags.forEach((el) => observer2.unobserve(el));
    };

    return () => {
      cleanup2();
    };
  }, []);

  return (
    <div className="container-fluid homecontainer">
      <div className="homeslide1">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="container-fluid carousel-container">
          {/* <Carousel
            slide={true}
            fade={true}
            controls={false}
            indicators={false}
            interval={5000}
            pause={false}
          >
            <Carousel.Item className="carousel">
              <img src={dummy1} alt="dummy1" className="image w-100" />
              <p className="heading">INNOVATION&nbsp;AND&nbsp;TECHNOLOGY</p>
              <p className="subheading col-md-7">
                Engineering&nbsp;breakthroughs&nbsp;for&nbsp;a&nbsp;better&nbsp;tomorrow.
              </p>
            </Carousel.Item>
            <Carousel.Item className="carousel">
              <img src={dummy2} alt="dummy2" className="image w-100" />
              <p className="heading">INNOVATION&nbsp;AND&nbsp;TECHNOLOGY</p>
              <p className="subheading col-md-7">
                Engineering&nbsp;breakthroughs&nbsp;for&nbsp;a&nbsp;better&nbsp;tomorrow.
              </p>
            </Carousel.Item>
            <Carousel.Item className="carousel">
              <img src={dummy3} alt="dummy3" className="image w-100" />
              <p className="heading">INNOVATION&nbsp;AND&nbsp;TECHNOLOGY</p>
              <p className="subheading col-md-7">
                Engineering&nbsp;breakthroughs&nbsp;for&nbsp;a&nbsp;better&nbsp;tomorrow.
              </p>
            </Carousel.Item>
            <Carousel.Item className="carousel">
              <img src={dummy4} alt="dummy4" className="image w-100" />
              <p className="heading">INNOVATION&nbsp;AND&nbsp;TECHNOLOGY</p>
              <p className="subheading col-md-7">
                Engineering&nbsp;breakthroughs&nbsp;for&nbsp;a&nbsp;better&nbsp;tomorrow.
              </p>
            </Carousel.Item>
          </Carousel> */}
          <div className="content">
            <p className="heading">
              INNOVATION
              <br />
              <span style={{ color: "white" }}>AND</span>
              <br />
              TECHNOLOGY
            </p>
            <a
              href="https://www.google.com"
              target="_blank"
              className="learnmorebtn"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid homeslide2">
        <p className="slide2text">
          DESIGN
          <br />
          <span style={{ color: "white" }}>AND</span>
          <br />
          DEVELOPMENT
        </p>
        <a
          href="https://www.google.com"
          target="_blank"
          className="learnmorebtn"
        >
          LEARN MORE
        </a>
      </div>
      <div className="container-fluid homeslide3 position-relative">
        <div className="content">
          <p className="heading">
            ON
            <br />
            <span style={{ color: "white" }}>DEMAND</span>
            <br />
            MANUFACTURING
          </p>
          <a
            href="https://www.google.com"
            target="_blank"
            className="learnmorebtn"
          >
            LEARN MORE
          </a>
        </div>
      </div>
      <div className="container-fluid homeslide4 position-relative">
        <div className="content">
          <p className="heading">
            ON
            <br />
            <span style={{ color: "white" }}>DEMAND</span>
            <br />
            SOURCING
          </p>
          <a
            href="https://www.google.com"
            target="_blank"
            className="learnmorebtn"
          >
            LEARN MORE
          </a>
        </div>
      </div>
      <div className="homeslide5">
        <div className="row">
          <p className="heading">
            OUR
            <br />
            <span style={{ color: "white" }}>CUSTOMERS</span>
          </p>
        </div>
        <div className="logos subhidden row">
          <img src={logo1} alt="company-logo 1" className="col-md-3 logo1" />
          <img src={logo2} alt="company-logo 2" className="col-md-3 logo2" />
          <img src={logo3} alt="company-logo 3" className="col-md-3 logo3" />
          <img src={logo4} alt="company-logo 4" className="col-md-3 logo4" />
        </div>
      </div>
      <div className="container-fluid homeslide6">
        <div className="row footer">
          <div className="col-md-4">
            <div className="misologo row">
              <img
                src={misologo}
                alt="Misochain logo"
                className="complogo col-md-12"
              />
            </div>
            <div className="row textcontent">
              <p className="heading">MANUFACTURING&nbsp;TRANSFORMED</p>
              <p className="subheading">
                Misochain offers software-driven
                <br />
                Manufacturing as a Serivce (MaaS),
                <br />
                Product as a Service (PaaS), and
                <br />
                Software as a Service (SaaS) solutions <br />
                to streamline your manufacturing process
                <br />
                and reduce costs.
              </p>
            </div>
            <div className="row socialsimages">
              <a
                href="https://www.facebook.com/Misochain/"
                target="_blank"
                className="col-md-2"
              >
                <img
                  src={social1}
                  alt="social1"
                  className="social1 img-fluid"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/82587192/admin/feed/posts/"
                target="_blank"
                className="col-md-2"
              >
                <img
                  src={social2}
                  alt="social2"
                  className="social2 img-fluid"
                />
              </a>
              <a
                href="https://twitter.com/misochain"
                target="_blank"
                className="col-md-2"
              >
                <img
                  src={social3}
                  alt="social3"
                  className="social3 img-fluid"
                />
              </a>
              <a
                href="https://www.instagram.com/misochain/"
                target="_blank"
                className="col-md-2"
              >
                <img
                  src={social4}
                  alt="social4"
                  className="social4 img-fluid"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCjSdGPH2YiG2QcHOc06GyNw"
                target="_blank"
                className="col-md-2"
              >
                <img
                  src={social5}
                  alt="social5"
                  className="social5 img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="links col-md-4">
            <div className="row col-md-12">
              <a
                className="anchor1"
                href="https://www.google.com"
                target="_blank"
              >
                Partner with us
              </a>
            </div>
            <div className="row col-md-12">
              <a
                className="anchor2"
                href="https://www.google.com"
                target="_blank"
              >
                About Us
              </a>
            </div>
            <div className="row col-md-12">
              <a
                className="anchor3"
                href="https://www.google.com"
                target="_blank"
              >
                MisoLens
              </a>
            </div>
            <div className="row col-md-12">
              <a
                className="anchor4"
                href="https://www.google.com"
                target="_blank"
              >
                Careers
              </a>
            </div>
            <div className="row col-md-12">
              <a
                className="anchor5"
                href="https://www.google.com"
                target="_blank"
              >
                Quality Assurance
              </a>
            </div>
            <div className="row col-md-12">
              <a
                className="anchor6"
                href="https://www.google.com"
                target="_blank"
              >
                Terms and Conditions
              </a>
            </div>
            <div className="row col-md-12">
              <a
                className="anchor7"
                href="https://www.google.com"
                target="_blank"
              >
                Privacy
              </a>
            </div>
          </div>
          <div className="businesshours col-md-4">
            <div className="row col-md-12">
              <p className="heading">Business Hours</p>
            </div>
            <div className="row col-md-12">
              <p className="timings">Mon-Fri: 10AM - 7PM</p>
            </div>
            <div className="row col-md-12">
              <p className="timings">Sat: 10AM - 5PM</p>
            </div>
            <div className="row col-md-12">
              <p className="number">
                Call:{" "}
                <a
                  href="https://wa.me/7510172061"
                  target="_blank"
                  className="number"
                >
                  7510172061
                </a>
              </p>
            </div>
            <div className="row col-md-12">
              <p className="emailheading">E-mail:</p>
            </div>
            <div className="row col-md-12">
              <p className="email">
                For New Queries:{" "}
                <a
                  href="mailto:sales@misochain.in"
                  target="_blank"
                  className="emaillink"
                >
                  sales@misochain.in
                </a>
              </p>
            </div>
            <div className="row col-md-12">
              <p className="email">
                For Support:{" "}
                <a
                  href="mailto:contactus@misochain.in"
                  target="_blank"
                  className="emaillink"
                >
                  contactus@misochain.in
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row copyrightinfo">
          <p className="copyrighttext">
            <img src={copyright} alt="copyright symbol" className="copyright" />
            2023-24 Misochain Technologies Pvt Ltd
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
