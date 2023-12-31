interface IButton {
  title?: string;
  mode?: "primary" | "secondary" | "regular";
  onClickFn?: () => void;
  className?: string;
}

const Button = ({
  title = "Button title",
  mode = "regular",
  onClickFn,
  className = "",
}: IButton) => {
  // Style picker
  const styles = {
    primary: "bg-blue-600 text-textColor",
    secondary: "bg-textColor text-backgroundColor",
    regular: "border-[1px] border-textColor bg-transparent text-textColor",
  };

  return (
    <button
      className={`rounded-full px-4 py-1 ${styles[mode]} ${className}`}
      onClick={onClickFn ?? onClickFn}
    >
      {title}
    </button>
  );
};

export default Button;
