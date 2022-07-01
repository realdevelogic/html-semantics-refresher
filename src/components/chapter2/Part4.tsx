import "./part4.styles.css";

const Part4 = () => (
  <>
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
      <code>&lt;dl&gt;</code> element in a <code>&lt;div&gt;</code> element.
      This can be useful when using microdata, or when global attributes apply
      to a whole group, or for styling purposes.
    </p>

    <dl>
      <div className="part4-div">
        <dt className="part4-dt">Fruit</dt>
        <dd className="part4-dd">Apple</dd>
      </div>
      <div className="part4-div">
        <dt className="part4-dt">Vegetables</dt>
        <dd className="part4-dd">Broccoli</dd>
        <dd className="part4-dd">Spinach</dd>
        <dd className="part4-dd">Squash</dd>
      </div>
      <div className="part4-div">
        <dt className="part4-dt">Disgusting</dt>
        <dt className="part4-dt">Revolting</dt>
        <dt className="part4-dt">Inedible</dt>
        <dd className="part4-dd">Lima beans</dd>
      </div>
      <div className="part4-div">
        <dt className="part4-dt">Yummy</dt>
        <dt className="part4-dt">More Please</dt>
        <dd className="part4-dd">Avocado</dd>
        <dd className="part4-dd">Garden-grown tomato</dd>
        <dd className="part4-dd">Sugar snap peas</dd>
      </div>
    </dl>
  </>
);

export default Part4;
