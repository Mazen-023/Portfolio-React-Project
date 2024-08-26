import "./about.css";

const About = () => {
  return (
    <section className="about flex">
      <h1>About me</h1>
      <div className="flex">
        <p>
          I am a senior undergraduate computer science student at BSU,
          passionate about sustainable web development and green tech and their
          positive impact on society. I am currently seeking internship and
          co-op opportunities in software development
        </p>
        <button>Download Resume</button>
      </div>
    </section>
  );
};

export default About;
