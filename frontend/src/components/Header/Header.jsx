import React, { useRef, useEffect, useContext } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./header.css";
import { AuthContext } from "../../context/AuthContext";

const nav_link = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
  {
    path: "/gallery",
    display: "Gallery",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logOut = () => {
    dispatch({ type: "LOG_OUT" });
    localStorage.removeItem('user');  
    navigate("/");
  };
  
  useEffect(() => {
    const stickyHeaderFunc = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    };

    window.addEventListener("scroll", stickyHeaderFunc);
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show_menu"); 
  }

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/* ============== Logo =============== */}
            <div className="logo">
              <Link to="/home"><img src={logo} alt="Logo" /></Link>
            </div>
            {/* ============== Menu =============== */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav_link.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => isActive ? "active_link" : ""}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* ============== Menu =============== */}

            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                {user ? (
                  <>
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className="btn btn-dark" onClick={logOut}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary__btn">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>
              <span className="mobile_menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
