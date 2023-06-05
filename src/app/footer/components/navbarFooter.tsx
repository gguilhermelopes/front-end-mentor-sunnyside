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
];

const NavBarFooter = () => {
  return (
    <nav>
      <ul className="flex gap-12 text-[#32695c] mt-10 mb-20">
        {navBarContent.map((item) => (
          <a href="/" key={item.label}>
            {item.label}
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default NavBarFooter;
