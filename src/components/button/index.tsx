interface ButtonProps {
  label: string;
  handleClick: () => void;
  customClass?: string;
}
export default function Button({
  label,
  handleClick,
  customClass = "",
}: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={`btn btn-dark w-100 ${customClass}`}
    >
      {label}
    </button>
  );
}
