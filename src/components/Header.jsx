import BookmarkLogo from "./BookmarkLogo";
import Button from "./Button";

import hamburgerIcon from "/images/icon-hamburger.svg";

function Header({ openMenu }) {
  return (
    <header className="flex justify-between items-center px-8 py-10 tablet:px-20 desktop:py-12 desktop:px-42.75 desktop:mb-14">
      <a href="#">
        <BookmarkLogo />
      </a>
      
      <button type="button" onClick={openMenu} className="cursor-pointer desktop:hidden">
        <img src={hamburgerIcon} alt="Menu icon" />
      </button>

      <nav className="hidden desktop:block">
        <ul className="flex flex-row items-center gap-12 uppercase text-[14px] leading-[200%] tracking-[0.25px]">
          <li><a href="#" className="hover:text-red-400 transition-all">Features</a></li>
          <li><a href="#" className="hover:text-red-400 transition-all">Pricing</a></li>
          <li><a href="#" className="hover:text-red-400 transition-all">Contact</a></li>
          <li><Button 
            className="uppercase text-[14px] leading-[200%] tracking-[0.25px] font-normal text-white bg-red-400 
            px-8.25 py-1.25! hover:text-red-400 hover:outline-red-400"
          >
            Login
          </Button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;