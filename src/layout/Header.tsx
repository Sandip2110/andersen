import Logo from "../images/logo.png";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="company-logo" width={45} />
    </header>
  );
}
