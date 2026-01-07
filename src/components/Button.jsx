import { Link } from "react-router-dom";

const Button = ({ to, children, variant = "primary" }) => {
  const baseClasses =
    "px-8 py-4 rounded-full font-semibold transition-all duration-300";

  const variants = {
    primary: `bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-[var(--color-text)]`,
    outline: `border border-[var(--color-border)] hover:border-[var(--color-primary)] text-[var(--color-text)]`,
  };

  return (
    <Link to={to} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
};

export default Button;
