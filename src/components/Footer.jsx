import facebookIcon from "/images/icon-facebook.svg";
import twitterIcon from "/images/icon-twitter.svg";

import BookmarkLogo from "./BookmarkLogo";

function Footer() {
  return (
    <footer className="bg-blue-950 py-8 flex flex-col items-center gap-12 text-white tablet:flex-row tablet:px-20 tablet:justify-between desktop:px-41.25">
      <div className="contents desktop:flex desktop:gap-16">
        <BookmarkLogo textColor="white" />

        <nav>
          <ul className="flex flex-col text-center gap-6 text-[15px] leading-[165%] uppercase tablet:flex-row tablet:text-[14px] tablet:leading-[200%] desktop:gap-12">
            <li><a href="#" className="transition-all hover:text-red-400">Features</a></li>
            <li><a href="#" className="transition-all hover:text-red-400">Pricing</a></li>
            <li><a href="#" className="transition-all hover:text-red-400">Contact</a></li>
          </ul>
        </nav>
      </div>

      <div className="flex justify-center items-center gap-10 tablet:gap-6 desktop:gap-10">
        <img src={facebookIcon} alt="Facebook icon" />
        <img src={twitterIcon} alt="Twitter icon" />
      </div>
    </footer>
  )
}

export default Footer;