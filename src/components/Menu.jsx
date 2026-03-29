import BookmarkLogo from "./BookmarkLogo";
import Button from "./Button";

import closeIcon from "/images/icon-close.svg";
import facebookIcon from "/images/icon-facebook.svg";
import twitterIcon from "/images/icon-twitter.svg";

function Menu({ closeMenu }) {
  return (
    <div className="desktop:hidden fixed inset-0 z-20">
      <div className="opacity-95 bg-blue-950 fixed inset-0" />

      <div className="relative z-30 h-full px-8 py-10 flex flex-col justify-between">
        <div className="flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <BookmarkLogo textColor="white" bgColor="white" iconColor="#242A45" />

            <button type="button" onClick={closeMenu}>
              <img src={closeIcon} alt="Close icon" />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            <ul className="flex flex-col text-center text-white uppercase leading-4.25 tracking-[2.31px]">
              <li className="py-6 border-b border-[rgba(255,255,255,0.15)] border-t"><a>Features</a></li>
              <li className="py-6 border-b border-[rgba(255,255,255,0.15)]"><a>Pricing</a></li>
              <li className="py-6 border-b border-[rgba(255,255,255,0.15)]"><a>Contact</a></li>
            </ul>

            <Button className="uppercase text-white border-2 border-white text-[20px] leading-4.25 tracking-[2.31px] py-0.5!">
              Login
            </Button>
          </div>
        </div>

        <div className="flex justify-center items-center gap-10">
          <img src={facebookIcon} alt="Facebook icon" />
          <img src={twitterIcon} alt="Twitter icon" />
        </div>
      </div>
    </div>
  )
}

export default Menu;