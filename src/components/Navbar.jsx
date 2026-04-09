import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Portraits", path: "/portraits" },
  { name: "Acrylic", path: "/acrylic" },
  { name: "Murals", path: "/murals" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link 
          to="/" 
          className="nav-brand"
        >
          NISHA
        </Link>
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path ? "active" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}