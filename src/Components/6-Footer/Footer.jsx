import "./footer.css";

const Footer = () => {
  return (
    <footer className="flex">
      <div className="  right">
        <h3>get in touch</h3>
        <a href="">
          <i className="fa-regular fa-envelope"></i> mazenmagdy337@gmail.com
        </a>
        <a href="">
          <i className="fa-solid fa-address-book"></i> 01154707436
        </a>
      </div>

      <button className="">Contect Me</button>

      <div className=" left">
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
        <p>Copyright &copy; 2024 MM</p>
      </div>
    </footer>
  );
};

export default Footer;
