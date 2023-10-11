interface IButton {
  title?: string;
  mode?: "primary" | "secondary" | "regular";
  onClickFn?: () => void;
}

const Button = ({
  title = "Button title",
  mode = "regular",
  onClickFn,
}: IButton) => {
  // Style picker
  const styles = {
    primary: "bg-blue-600",
    secondary: "bg-textColor text-backgroundColor",
    regular: "border-[1px] border-textColor bg-transparent text-textColor",
  };

  return (
    <button
      className={`rounded-full px-4 py-1 ${styles[mode]}`}
      onClick={onClickFn ?? onClickFn}
    >
      {title}
    </button>
  );
};

export default Button;
