const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`${className} bg-blue-500 text-white px-4 py-2 rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
