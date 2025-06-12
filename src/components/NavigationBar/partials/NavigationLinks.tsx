import { faCircleInfo, faLink, faRss } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface Props {
  menuActive: boolean;
}

const links = [
  {
    title: "Fontes",
    icon: faLink,
    href: "/sources",
  },
  {
    title: "Sobre o /dev/All",
    icon: faCircleInfo,
    href: "/about",
  },
  {
    title: "RSS",
    icon: faRss,
    href: "#",
  },
];

const NavigationLinks = ({ menuActive }: Props) => {
  return (
    <div className="navbar-start">
      {links.map((link) => (
        <Link key={link.title} to={link.href} className="navbar-item">
          <span className={menuActive ? "mr-3" : "is-hidden"}>
            {link.title}
          </span>
          <FontAwesomeIcon icon={link.icon} />
          <span className={menuActive ? "is-hidden" : "px-0"}>
            {link.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default NavigationLinks;
