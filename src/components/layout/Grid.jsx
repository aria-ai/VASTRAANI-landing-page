import { clsx } from "clsx";

const Grid = ({
  children,
  columns = 3,
  gap = "md",
  className = "",
  ...props
}) => {
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  const gapClasses = {
    sm: "gap-4",
    md: "gap-6 md:gap-8",
    lg: "gap-8 md:gap-12",
  };

  return (
    <div
      className={clsx(
        "grid",
        columnClasses[columns],
        gapClasses[gap],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;
