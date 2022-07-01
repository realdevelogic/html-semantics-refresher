const Part3 = () => (
  <section>
    <h2>
      <code>~</code> vs <code>+</code>
    </h2>

    <div id="plus">
      <h3>ul + p</h3>
      <ul>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>
      <p>This will be red</p>
      <p>This will be black</p>
      <p>This will be black</p>
    </div>

    <div id="tilde">
      <h3>ul ~ p</h3>
      <ul>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>
      <p>This will be red</p>
      <p>This will be black</p>
      <p>This will be black</p>
    </div>
  </section>
);

export default Part3;
