import { forwardRef } from "react";

type Props = {
  variant?: "btn-primary" | "btn-secondary" | "btn-danger" | "btn-success";
  type: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  label: string;
  onClick?: () => void;
  onFocus?: () => void;
  size?: "small" | "medium" | "large";
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      type,
      label,
      variant = "btn-primary",
      className = "",
      disabled,
      size = "medium",
      ...rest
    },
    ref,
  ) => {
    const sizeClass = `btn-${size}`;
    return (
      <button
        ref={ref}
        className={`btn ${variant} ${sizeClass} ${className}`}
        type={type}
        disabled={disabled}
        {...rest}
      >
        {label}
      </button>
    );
  },
);

Button.displayName = "Button";
