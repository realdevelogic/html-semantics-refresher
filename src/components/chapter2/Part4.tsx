import styled from "styled-components";

const Container = styled.div`
  div {
    max-width: 400px;
    display: grid;
    grid-template-columns: 2fr 3fr;
    margin: 1rem;
    border-bottom: 1px solid #666;
    padding-bottom: 0.5rem;
  }
  /* use the intrinsic grid layout to set the dt elements in the first column always, one after the other */
  dt {
    font-weight: bold;
    grid-column-start: 1;
    padding: 0.5rem;
  }
  /* use the intrinsic grid layout to set the dt elements in the second column always, one after the other. However, the column will start after all DT elements appear on the page */
  dd {
    margin: 0;
    grid-column-start: 2;
    padding: 0.5rem;
  }
  /* see JS box for :first-of-type explanation 

The first dd element will be placed at the first row. All other dd elements will follow after because of the previous style.

*/
  dd:first-of-type {
    grid-row-start: 1;
  }
`;

const Part4 = () => (
  <Container>
    <h1>
      Description lists with <code>&lt;div&gt;</code>
    </h1>
    <p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl#wrapping_name-value_groups_in_div_elements"
        target="_blank"
      >
        MDN:
      </a>
      WHATWG HTML allows wrapping each name-value group in a{" "}
      <code>&lt;dl&gt;</code> element in a <code>&lt;div&gt;</code> element. This
      can be useful when using microdata, or when global attributes apply to a
      whole group, or for styling purposes.
    </p>

    <dl>
      <div>
        <dt>Fruit</dt>
        <dd>Apple</dd>
      </div>
      <div>
        <dt>Vegetables</dt>
        <dd>Broccoli</dd>
        <dd>Spinach</dd>
        <dd>Squash</dd>
      </div>
      <div>
        <dt>Disgusting</dt>
        <dt>Revolting</dt>
        <dt>Inedible</dt>
        <dd>Lima beans</dd>
      </div>
      <div>
        <dt>Yummy</dt>
        <dt>More Please</dt>
        <dd>Avocado</dd>
        <dd>Garden-grown tomato</dd>
        <dd>Sugar snap peas</dd>
      </div>
    </dl>
  </Container>
);

export default Part4;
