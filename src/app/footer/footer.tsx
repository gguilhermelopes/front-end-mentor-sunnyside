import Logo from "../graphicElements/logo";
import IconsFooter from "./components/iconsFooter";
import NavBarFooter from "./components/navbarFooter";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-[#57b7a2] w-full py-20">
      <Logo isFooter />
      <NavBarFooter />
      <IconsFooter />
    </div>
  );
};

export default Footer;
