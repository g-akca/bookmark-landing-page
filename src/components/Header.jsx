import BookmarkLogo from "./BookmarkLogo";

import hamburgerIcon from "/images/icon-hamburger.svg";

function Header({ openMenu }) {
  return (
    <header className="flex justify-between items-center px-8 py-10 tablet:px-20">
      <a href="#">
        <BookmarkLogo />
      </a>
      
      <button type="button" onClick={openMenu} className="cursor-pointer">
        <img src={hamburgerIcon} alt="Menu icon" />
      </button>
    </header>
  )
}

export default Header;