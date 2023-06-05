import IconPinterest from "@/app/graphicElements/icon-pinterest";
import IconFacebook from "../../graphicElements/icon-facebook";
import IconInstagram from "@/app/graphicElements/icon-instagram";
import IconTwitter from "@/app/graphicElements/icon-twitter";

const IconsFooter = () => {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        <li>
          <a href="/">
            <IconFacebook />
          </a>
        </li>
        <li>
          <a href="/">
            <IconInstagram />
          </a>
        </li>
        <li>
          <a href="/">
            <IconTwitter />
          </a>
        </li>
        <li>
          <a href="/">
            <IconPinterest />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default IconsFooter;
