import { faCircleInfo, faLink, faRss } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  menuActive: boolean;
}

const links = [
  {
    title: "Fontes",
    icon: faLink,
    href: "#",
  },
  {
    title: "Sobre o /dev/All",
    icon: faCircleInfo,
    href: "#",
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
        <a key={link.title} href={link.href} className="navbar-item">
          <span className={menuActive ? "mr-3" : "is-hidden"}>
            {link.title}
          </span>
          <FontAwesomeIcon icon={link.icon} />
          <span className={menuActive ? "is-hidden" : "px-0"}>
            {link.title}
          </span>
        </a>
      ))}
    </div>
  );
};

export default NavigationLinks;
