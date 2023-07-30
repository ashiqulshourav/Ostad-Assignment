import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container-fluid px-4 bg-slate-200 py-3">
        <div className="container mx-auto">
          <header className="header">
            <div className="header-inner flex justify-between items-center">
              <Link to="/" className="logo w-[30px] h-[30px] all-center">
                AI
              </Link>
              <nav>
                <ul className="flex items-center">
                  <li>
                    <NavLink to="/" className="nav-link p-2">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/income" className="nav-link p-2">
                      Income
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/expense" className="nav-link p-2">
                      Expense
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
