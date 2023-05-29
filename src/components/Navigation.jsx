import "../styles/nav.css";
import LogoHome from "../assets/logoHome.png";

function Navigation() {
  return (
    <div className="header">
      <a href="/">
        <img src={LogoHome} alt="logo" className="HomeImage" />
      </a>
      <h3>Profile Summary</h3>
    </div>
  );
}

export default Navigation;
