import { css } from "../../styled-system/css";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonExample = (props: Props & { children: React.ReactNode }) => {
  const { children, ...buttonProps } = props;
  const type = buttonProps.type ?? "button";
  return (
    <button
      type={type}
      {...buttonProps}
      className={css({
        appearance: "none",
        border: "1px solid black",
        padding: "8px 12px",
        borderRadius: "3px",
        boxSizing: "border-box",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        },
        "&:focus": {
          outlineOffset: "2px",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          boxShadow: "focus",
        },
      })}
    >
      {children}
    </button>
  );
};
