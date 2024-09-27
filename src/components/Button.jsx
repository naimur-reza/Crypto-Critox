/* eslint-disable react/prop-types */
const Button = ({
  children,
  onClick,
  bg = "primary",
  variant = "primary",
  text = "white",
  hover,
}) => {
  return (
    <div className="btn-primary-container">
      <button
        className={`btn-${variant} bg-${bg}  text-${text} hover:${hover}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
