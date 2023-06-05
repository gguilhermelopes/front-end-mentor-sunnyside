import { fraunces } from "@/app/layout";
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
              className={`py-2 px-4 ${
                item.isButton &&
                `${fraunces.className} text-veryDarkDesaturatedBlue bg-white uppercase rounded-full py-4 px-6`
              }`}
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
