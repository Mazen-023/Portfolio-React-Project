import "./skills.css";

const Skills = () => {
  return (
    <section className="skills flex">
      <div className="flex content">
        <h1>Skills</h1>
        <p></p>
      </div>

      <article className="flex">
        <ul className="flex">
          <li>My Focus</li>
          <li>UI/UX Design</li>
          <li>Responsice Design</li>
          <li>Web Desgin</li>
          <li>Mobile App Desing</li>
        </ul>
        <div className="tech flex">
          <label>
            <span className="flex">HTML</span>
            <progress id="file" value="90" max="100">
              {" "}
              90%{" "}
            </progress>
          </label>
          <label>
            <span className="flex">CSS</span>
            <progress id="file" value="90" max="100">
              {" "}
              90%{" "}
            </progress>
          </label>
          <label>
            <span className="flex">JavaScript</span>
            <progress id="file" value="75" max="100">
              {" "}
              75%{" "}
            </progress>
          </label>
          <label>
            <span className="flex">React</span>
            <progress id="file" value="75" max="100">
              {" "}
              75%{" "}
            </progress>
          </label>
          <label>
            <span className="flex">Photoshop</span>
            <progress id="file" value="90" max="100">
              {" "}
              90%{" "}
            </progress>
          </label>
          <label>
            <span className="flex">Adobe XD</span>
            <progress id="file" value="75" max="100">
              {" "}
              75%{" "}
            </progress>
          </label>
          <label>
            <span className="flex">Node.js</span>
            <progress id="file" value="60" max="100">
              {" "}
              60%{" "}
            </progress>
          </label>
          <label>
            <span className="flex">WordPress</span>
            <progress id="file" value="50" max="100">
              {" "}
              50%{" "}
            </progress>
          </label>
        </div>
      </article>
    </section>
  );
};

export default Skills;
