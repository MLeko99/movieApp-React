const Button = ({ value, onClick, className = "" }) => {
  return (
    <div className={`button ${className}`} onClick={() => onClick(value)}>
      {value}
    </div>
  );
};

export default Button;
