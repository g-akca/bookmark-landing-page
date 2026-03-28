import logo from "/images/logo-bookmark.svg";
import facebookIcon from "/images/icon-facebook.svg";
import twitterIcon from "/images/icon-twitter.svg";

function Footer() {
  return (
    <footer className="bg-blue-950 py-8 flex flex-col items-center gap-12 text-white">
      <img src={logo} alt="Bookmark logo" />

      <ul className="flex flex-col text-center gap-6 text-[15px] leading-[165%] uppercase">
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Contact</a></li>
      </ul>

      <div className="flex justify-center items-center gap-10">
        <img src={facebookIcon} alt="Facebook icon" />
        <img src={twitterIcon} alt="Twitter icon" />
      </div>
    </footer>
  )
}

export default Footer;