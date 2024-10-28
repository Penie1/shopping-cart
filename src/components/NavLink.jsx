import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavLink({ link, setIsClicked, isClicked }) {
  const routerLink = link.split(" ")[0];

  return (
    <li className="border-b-2 border-neutral-600 py-4 sm:py-0 sm:border-none transition text-neutral-300 hover:text-neutral-50 sm:text-neutral-600  sm:hover:text-neutral-800">
      <Link
        to={`/${routerLink}`}
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        {link}
      </Link>
    </li>
  );
}
export default NavLink;

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
  setIsClicked: PropTypes.func.isRequired,
  isClicked: PropTypes.bool.isRequired,
};
