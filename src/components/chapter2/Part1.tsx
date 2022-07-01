const Part1 = () => (
  <section>
    <h1>(Ordered, Unordered, Definition) List</h1>
    <h2>Nested lists and family relationship selectors</h2>
    <ul>
      <li>
        Here's an{" "}
        <a href="#" target="_blank" title="unguessable">
          unguessable thing
        </a>
      </li>
      <li class="nested">
        Another thing
        <ol>
          <li>The first thing to do</li>
          <li>
            The second thing
            <ul class="nested">
              <li>Here's a thing</li>
              <li>
                Another{" "}
                <a href="#" target="_blank">
                  thing
                </a>
                <ol>
                  <li>Here's a sub-thing that comes first</li>
                  <li>
                    Another <a href="https://www.google.com">Google link</a> of
                    secondary importance
                  </li>
                </ol>
              </li>
              <li>More things</li>
            </ul>
          </li>
          <li>The last thing</li>
        </ol>
      </li>
      <li>More things</li>
      <li>
        <a href="https://www.frontendmasters.com">Frontend Masters link</a>
      </li>
      <li>
        Here's a{" "}
        <a href="about.html" title="Guess">
          thing
        </a>
      </li>
      <li>
        Another thing
        <ol>
          <li>
            Don't forget{" "}
            <a href="https://static.frontendmasters.com/assets/legal/MasterServicesAgreement.pdf">
              terms and conditions
            </a>{" "}
            apply
          </li>
          <li>
            The{" "}
            <a href="https://static.frontendmasters.com/assets/legal/PrivacyPolicy.pdf">
              privacy policy
            </a>{" "}
            is always of interest
          </li>
        </ol>
      </li>
      <li>
        Here's an{" "}
        <a href="about.html" title="Guess this">
          about page again
        </a>
      </li>
      <li id="last">Another thing</li>
    </ul>
  </section>
);

export default Part1;
