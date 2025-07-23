import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink
                className={(e) =>
                  e.isActive
                    ? "nav-link text-white"
                    : "nav-link text-white/[0.5]"
                }
                to={"/React-crud"}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(e) =>
                  e.isActive
                    ? "nav-link text-white"
                    : "nav-link text-white/[0.5]"
                }
                to={"/About"}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(e) =>
                  e.isActive
                    ? "nav-link text-white"
                    : "nav-link text-white/[0.5]"
                }
                to={"/React-crud/Products"}
              >
                Products
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
