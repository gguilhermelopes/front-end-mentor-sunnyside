const navBarContent = [
  {
    label: "About",
    href: "/",
  },
  {
    label: "Services",
    href: "/",
  },
  {
    label: "Projects",
    href: "/",
  },
  {
    label: "Contact",
    href: "/",
    isButton: true,
  },
];

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-8 text-white">
        {navBarContent.map((item) => (
          <li key={item.label}>
            <a
              className={`py-2 px-4 ease-in-out duration-300 ${
                item.isButton
                  ? "font-serif text-veryDarkDesaturatedBlue bg-white uppercase rounded-full py-4 px-6 hover:bg-[#8cd6f5] hover:bg-opacity-50 hover:text-white"
                  : "hover:text-darkDesaturatedCyan"
              } `}
              href={item.href}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
