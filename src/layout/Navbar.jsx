import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/squadre", label: "Squadre" },
    { path: "/contatti", label: "Contatti" },
  ];

  return (
    <nav className="fixed top-0 w-full h-20 bg-(--color-bg-main) border-b border-(--color-border) z-50">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <NavLink to="/" className="font-bold text-xl text-(--color-primary)">
          Asd Monferrato Volley
        </NavLink>

        <div className="flex gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end
              className={({ isActive }) =>
                isActive
                  ? "text-(--color-primary) font-semibold"
                  : "text-(--color-text-muted) hover:text-(--color-text)"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
