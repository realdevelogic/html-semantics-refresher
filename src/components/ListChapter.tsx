import "./chapter2.style.css";
import Part1 from "./chapter2/Part1";
import Part2 from "./chapter2/Part2";
import Part3 from "./chapter2/Part3";
import Part4 from "./chapter2/Part4";
import Part5 from "./chapter2/Part5";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
ul,
ol {
  padding: initial;
}

main ul,
main ol {
  line-height: 1.6rem;
  padding-left: 30px;
}

main ul a,
main ol a {
  font-weight: 600;
  background: linear-gradient(
    to top,
    hsla(342, 100%, 50%, 0.4) -8%,
    transparent 60%
  );
}

main ul a:hover,
main ol a:hover {
  background: linear-gradient(
    to top,
    hsla(342, 100%, 50%, 0.6) 10%,
    transparent 50%
  );
}

/* simple attribute value */
[title] {
  background-color: rgb(19, 18, 18);
}
/* exact attribute value */
[title="unguessable"] {
  color: white;
}
/* arbitrary substring attribute value */
[title*="Guess"] {
  border: 2px dashed black;
}
/* beginning substring selector */
[title^="Guess"] {
  background-color: orange;
}
/* ending substring selector */
[title$="this"] {
  background-color: rgb(241, 167, 98);
  color: rgb(41, 41, 38);
}

[href]:hover::after {
  opacity: 1;
}

[href$=".pdf"]::after {
  content: "(PDF)";
  color: black;
}

#tilde ul ~ p {
  color: red;
}

#plus ul + p {
  color: red;
}

`;

const Chapter2 = () => (
  <>
    <GlobalStyles />
    <Part1 />
    <Part2 />
    <Part3 />
    <Part4 />
    <Part5 />
  </>
);

export default Chapter2;
