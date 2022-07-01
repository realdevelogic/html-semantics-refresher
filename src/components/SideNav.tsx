import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  nav {
    max-width: 30px;
    position: sticky;
    top: 0;
    bottom: 0;
    padding-top: 60px;
    height: 100vh;
    color: rgb(248, 248, 248);
    background-color: rgb(19, 18, 18);
    border-right: 1px solid rgb(52, 53, 41);
    box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.12);
    z-index: 99;
    transition: max-width 200ms ease-in;
  }

  nav * {
    margin: 0;
    padding: 0;
  }

  nav.open {
    max-width: 140px;
    transition: max-width 200ms ease-out;
  }

  nav .toggle__icon {
    height: 20px;
    width: 20px;
  }

  nav .toggle__icon svg {
    color: white;
  }

  nav ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 10px 0px;
    z-index: 2;
    transition: transform 200ms ease-in-out, opacity 150ms ease-in;
    opacity: 0;
    transform-origin: top;
    pointer-events: none;
    transform: translateX(-110px);
  }

  nav.open ul {
    pointer-events: auto;
    opacity: 1;
    transform: translateX(0);
  }

  .nav__toggle {
    font-size: 2rem;
    position: absolute;
    top: 10px;
    right: 5px;
  }

  nav.open .nav__toggle {
    transform: rotate(180deg);
  }

  .nav__link {
    display: flex;
    text-align: left;
    align-items: center;
    padding: 10px 30px;
    padding-left: 10px;
  }

  nav ul .nav__link:not(:empty) {
    border-bottom: 1px solid rgb(39, 38, 38);
  }

  .nav__link--active {
    color: rgb(17, 16, 16);
    background: linear-gradient(to bottom, hsl(48, 100%, 60%), hsl(48, 100%, 35%));
    width: 100%;
    height: 100%;
  }
`;

const SideNavLink = ({ to, title }) => (
  <li>
    <NavLink
      className={({ isActive }) =>
        isActive ? "nav__link nav__link--active" : "nav__link"
      }
      to={to}
      title={title}
    >
      {title}
    </NavLink>
  </li>
);

const SideNav = () => {
  const [open, setOpen] = useState<boolean>(true);

  const handleToggleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Container>
      <nav className={`nav ${open ? "open" : ""}`}>
        <div className="nav__toggle" onClick={handleToggleClick}>
          <svg
            className="toggle__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z"
            />
          </svg>
        </div>
        <ul>
          <SideNavLink to={"/"} title={"Homepage"} />
          {/* <SideNavLink to={"/chapter/1"} title={"Chapter 1"} /> */}
          <SideNavLink to={"/chapter/lists"} title={"Lists"} />
          {/* <SideNavLink to={"/chapter/3"} title={"Chapter 3"} />
        <SideNavLink to={"/chapter/4"} title={"Chapter 4"} /> */}
        </ul>
      </nav>
    </Container>
  );
};

export default SideNav;
