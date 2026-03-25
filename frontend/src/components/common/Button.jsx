function Button({
  text,
  type = "button",
  onClick,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-primary ${className}`.trim()}
    >
      {text}
    </button>
  );
}

export default Button;