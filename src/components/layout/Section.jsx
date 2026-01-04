import { clsx } from "clsx";

const Section = ({
  children,
  className = "",
  variant = "default",
  padding = "md",
  id,
  ...props
}) => {
  const variantClasses = {
    default: "bg-cream-50",
    dark: "bg-burgundy-900 text-cream-50",
    accent: "bg-gradient-to-br from-burgundy-800 to-burgundy-900 text-cream-50",
    light: "bg-white",
    cream: "bg-cream-100",
  };

  const paddingClasses = {
    sm: "py-12",
    md: "py-16 md:py-20",
    lg: "py-20 md:py-28",
    xl: "py-24 md:py-32",
  };

  return (
    <section
      id={id}
      className={clsx(
        "relative",
        variantClasses[variant],
        paddingClasses[padding],
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
