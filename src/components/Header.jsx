import bookmarkLogo from "/images/logo-bookmark.svg";
import hamburgerIcon from "/images/icon-hamburger.svg";

function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-10">
      <img src={bookmarkLogo} alt="Logo saying bookmark" />
      <img src={hamburgerIcon} alt="Menu icon" />
    </header>
  )
}

export default Header;