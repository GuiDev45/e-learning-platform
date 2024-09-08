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
      <div className={className}>
        <div className="">
          <label htmlFor={id}>{label}</label>
          <input
            ref={ref}
            type={type}
            role="textbox"
            id={id}
            placeholder={label}
            {...rest}
          />
          {!!errorMessage && <span>{errorMessage}</span>}
        </div>
      </div>
    );
  },
);

Input.displayName = "Input";
