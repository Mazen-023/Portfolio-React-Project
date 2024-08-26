import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h1>Portfolio</h1>

      <div className="mainBox">
        <div className="flex box a">
          <h2>web desgin</h2>
        </div>
        <div className="flex box b">
          <h2>mobile desgin</h2>
        </div>
        <div className="flex box c">
          <h2>logo desgin</h2>
        </div>
        <div className="flex box d">
          <h2>web application development</h2>
        </div>
        <div className="flex box e">
          <h2>mobile application development</h2>
        </div>
        <div className="flex box f">
          <h2>pwa development</h2>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
