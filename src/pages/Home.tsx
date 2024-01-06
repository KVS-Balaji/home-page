import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { ArrowUpCircleFill, CaretDownFill } from "react-bootstrap-icons";
import misologo from "../assets/img/alt_logo.png";
import certifications from "../assets/img/cetifications.png";
import logo1 from "../assets/img/company1.png";
import logo2 from "../assets/img/company2.png";
import logo3 from "../assets/img/company3.png";
import logo4 from "../assets/img/company4.png";
import copyright from "../assets/img/copyright.png";
import social1 from "../assets/img/social1-fb.png";
import social4 from "../assets/img/social1-ig.png";
import social2 from "../assets/img/social1-li.png";
import social3 from "../assets/img/social1-x.png";
import social5 from "../assets/img/social1-yt.png";
import "../css/Home.css";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHeadingHovered, setIsHeadingHovered] = useState(false);
  const [isHeadingSpanHovered, setIsHeadingSpanHovered] = useState(false);
  const [isRArrHovered, setIsRArrHovered] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

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

    return () => {
      hiddenPtags.forEach((el) => observer2.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });

      const hoveredElement = event.target as HTMLElement;

      const isHeading = hoveredElement.matches(".heading");
      const isHeadingSpan = hoveredElement.matches(".heading span");
      const isArr = hoveredElement.matches(".visible");
      const isLmBtn = hoveredElement.matches(".learnmorebtn");

      if (isHeading) {
        setIsHeadingHovered(true);
      } else if (!isHeading) {
        setIsHeadingHovered(false);
      }
      if (isHeadingSpan) {
        setIsHeadingSpanHovered(true);
      } else if (!isHeadingSpan) {
        setIsHeadingSpanHovered(false);
      }
      if (isLmBtn) {
        setIsBtnHovered(true);
      } else if (!isLmBtn) {
        setIsBtnHovered(false);
      }
      if (isArr) {
        setIsRArrHovered(true);
      } else if (!isArr) {
        setIsRArrHovered(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="container-fluid homecontainer">
      <div className="homeslide1">
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
          <div className="arrow">
            <CaretDownFill size={30} />
          </div>
        </div>
      </div>
      <div className="homeslide2">
        <div className="content">
          <p className="heading">
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
          <div className="arrow">
            <CaretDownFill size={30} />
          </div>
        </div>
      </div>
      <div className="homeslide3">
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
          <div className="arrow">
            <CaretDownFill size={30} />
          </div>
        </div>
      </div>
      <div className="homeslide4">
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
          <div className="arrow">
            <CaretDownFill size={30} />
          </div>
        </div>
      </div>
      <div className="homeslide5">
        <div className="col-md-6">
          <p className="heading">
            OUR
            <br />
            <span style={{ color: "white" }}>CUSTOMERS</span>
          </p>
          <a
            href="https://www.google.com"
            target="_blank"
            className="learnmorebtn"
          >
            LEARN MORE
          </a>
        </div>
        <div className="logos col-md-6">
          <div className="row logorow subhidden">
            <img src={logo1} alt="company-logo 1" className="logo1" />
            <img src={logo2} alt="company-logo 2" className="logo2" />
          </div>
          <div className="row logorow subhidden">
            <img src={logo3} alt="company-logo 3" className="logo3" />
            <img src={logo4} alt="company-logo 4" className="logo4" />
          </div>
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
                href="https://www.linkedin.com/company/82587192/admin/feed/posts/"
                target="_blank"
                className="col-md-2"
              >
                <img
                  src={social2}
                  alt="social2"
                  className="social1 img-fluid"
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
                  className="social2 img-fluid"
                />
              </a>
              <a
                href="https://www.facebook.com/Misochain/"
                target="_blank"
                className="col-md-2"
              >
                <img
                  src={social1}
                  alt="social1"
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
            <div className="row col-md-12 certifications">
              <img src={certifications} alt="certification images" />
            </div>
          </div>
        </div>
        <div className="row copyrightinfo">
          <p className="headtag">MANUFACTURING TRANSFORMED</p>
          <p className="copyrighttext">
            Misochain&nbsp;
            <img src={copyright} alt="copyright symbol" className="copyright" />
            &nbsp;2023
          </p>
        </div>
      </div>
      <div
        className={`startofpage ${isVisible ? "visible" : "hidden"}`}
        onClick={scrollToTop}
      >
        <ArrowUpCircleFill size={40} />
      </div>
      <div
        className={`cursor-shadow 
                    ${isHeadingHovered ? "yellow-bg" : ""}
                    ${isHeadingSpanHovered ? "white-bg" : ""}
                    ${isBtnHovered ? "btnblack-bg" : ""}
                    ${isRArrHovered ? "arrblack-bg" : ""}`}
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      ></div>
    </div>
  );
}

export default Home;
