import "./header.css";

const Header = () => {
  return (
    <header className="flex">
      <div>
        <span className="logo">MM</span>
      </div>

      <nav>
        <ul className="flex">
          <li>
            <a href="Contact">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="flex icons">
        <a href="https://www.linkedin.com/in/mazenmagdy03/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/prince.mazen.35/">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://github.com/Mazen-023">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
