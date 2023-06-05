import Logo from "../graphicElements/logo";
import MainTitle from "./components/mainTitle";
import NavBar from "./components/navbar";

const Header = () => {
  return (
    <header className="bg-headerImg bg-no-repeat bg-center bg-cover w-full h-[740px] px-10 py-8">
      <div className="flex justify-between items-center w-full">
        <Logo />
        <NavBar />
      </div>
      <MainTitle />
    </header>
  );
};

export default Header;
