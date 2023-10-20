import logo from "./../../../public/info-tech-logo.png";
const Footer = () => {
  return (
    <div className="bg-[#2222]">
      <footer className="footer p-10 text-base-content mt-10">
        <aside>
          <img src={logo} alt="" />
          <p>All in one technology store</p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Phone</a>
          <a className="link link-hover">Laptop</a>
          <a className="link link-hover">Camera</a>
          <a className="link link-hover">Headphone</a>
        </nav>

        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
