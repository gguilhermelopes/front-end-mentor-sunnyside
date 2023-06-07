import Logo from "../graphicElements/logo";
import MainTitle from "./components/mainTitle";
import NavBar from "./components/navbar";

const Header = () => {
  return (
    <header className="bg-headerImgMobile lg:bg-headerImg bg-no-repeat bg-center bg-cover w-full h-[650px] lg:h-[740px] lg:px-10 px-5 py-8 ">
      <div className="flex justify-between items-center w-full">
        <Logo />
        <NavBar />
      </div>
      <MainTitle />
    </header>
  );
};

export default Header;
