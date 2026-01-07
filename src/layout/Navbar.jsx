import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/news", label: "News" },
    { path: "/squadre", label: "Squadre" },
    { path: "/contatti", label: "Contatti" },
  ];

  return (
    <nav className="fixed top-0 w-full h-20 bg-linear-to-b from-(--color-bg-main) to-(--color-bg-alt) border-b border-(--color-border) z-50">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <NavLink to="/" className="font-bold text-xl text-(--color-primary)">
          Asd Monferrato Volley
        </NavLink>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
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

        <button
          className="md:hidden text-(--color-text)"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-(--color-bg-alt) border-t border-(--color-border)">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end
                onClick={() => setOpen(false)}
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
      )}
    </nav>
  );
};

export default Navbar;
