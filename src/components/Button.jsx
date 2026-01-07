import { Link } from "react-router-dom";

const Button = ({
  to,
  children,
  variant = "primary",
  type,
  className = "",
  ...props
}) => {
  const baseClasses =
    "px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center text-center";

  const variants = {
    primary: `bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-[var(--color-text)]`,
    outline: `border border-[var(--color-border)] hover:border-[var(--color-primary)] text-[var(--color-text)]`,
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} role="button" className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type || "button"} className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
