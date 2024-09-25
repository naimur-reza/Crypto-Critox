/* eslint-disable react/prop-types */
const Button = ({
  children,
  className = "btn-primary-container",
  onClick,
  variant = "primary",
}) => {
  return (
    <div className={className}>
      <button className={`btn-${variant}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
