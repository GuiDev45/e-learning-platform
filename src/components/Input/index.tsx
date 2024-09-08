import { ForwardedRef, forwardRef, InputHTMLAttributes, useId } from "react";

type Props = {
  label: string;
  type?: "text" | "password" | "email" | "number" | "date";
  className?: string;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(
  (
    { label, type = "text", className = "", errorMessage = "", ...rest }: Props,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const id = useId();

    return (
      <div>
        <div>
          <input
            ref={ref}
            type={type}
            className={className}
            role="textbox"
            id={id}
            placeholder={label}
            {...rest}
          />
          <label htmlFor={id}>{label}</label>
          {!!errorMessage && <span>{errorMessage}</span>}
        </div>
      </div>
    );
  },
);

Input.displayName = "Input";
