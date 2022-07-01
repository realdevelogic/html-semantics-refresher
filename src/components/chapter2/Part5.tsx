import styled from "styled-components";

const Container = styled.div`
  menu,
  nav {
    border: 2px solid purple;
    background-color: #ffeeff;
  }
  /* menu button group styling - selectors begin with .group.

Navbar styling shares so many of these properties!
 */
  .group,
  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  .group button,
  nav a {
    background-color: purple;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    border: none;
    padding: 0.5rem;
    margin: 1rem 0;
  }
  .group button:hover,
  nav a:hover {
    background-color: thistle;
    color: purple;
  }
  .group li:first-child button,
  nav li:first-child a {
    padding-left: 1rem;
    border-radius: 7px 0 0 7px;
  }
  .group li:last-child button,
  nav li:last-child a {
    padding-right: 1rem;
    border-radius: 0 7px 7px 0;
  }
  /* two additional styles needed for links - make a big clickable area, turn off the underline */
  nav a {
    display: block;
    text-decoration: none;
  }
`;

const Part5 = () => (
  <Container>
    <h1>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu"
        target="_blank"
      >
        Menu lists
      </a>
    </h1>
    <p>
      Use this one for a group of <strong>interactive</strong> elements, like
      buttons.{" "}
    </p>
    <menu>
      <li>
        <button onclick="copy()">Copy</button>
      </li>
      <li>
        <button onclick="cut()">Cut</button>
      </li>
      <li>
        <button onclick="paste()">Paste</button>
      </li>
    </menu>
    <p>Menus may also be styled in wonderful ways. No Bootstrap required!</p>

    <menu class="group">
      <li>
        <button onclick="copy()">Copy</button>
      </li>
      <li>
        <button onclick="cut()">Cut</button>
      </li>
      <li>
        <button onclick="paste()">Paste</button>
      </li>
    </menu>

    <p>
      A navigation bar may be styled in the same way, but the markup is very
      different.
    </p>

    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  </Container>
);

export default Part5;
