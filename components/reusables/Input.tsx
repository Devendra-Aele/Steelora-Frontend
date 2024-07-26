import { ComponentProps, forwardRef } from "react";
import InputLabel from "./InputLabel";
import InputError from "./InputError";
// import { FieldError } from './Form'

interface InputProps extends ComponentProps<"input"> {
  label: string;
  error?: string;
  helperText?: string;
  capitalize?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    id,
    label,
    type = "text",
    error,
    required,
    helperText,
    capitalize,
    ...props
  },
  ref
) {
  const isEmailOrPassword =
    type === "email" || type === "password" || !capitalize;

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="w-full">
      <div className="w-full mb-3">
        <InputLabel id={id}>
          {label}
          {required ? "*" : ""}
        </InputLabel>
      </div>
      <div className="mb-1 w-full">
        <input
          id={id}
          className={`rounded-[4px] ${
            isEmailOrPassword ? "normal-case" : "capitalize"
          } h-10 text-black p-2 w-full font-Montserrat font-normal text-sm text-font-secondary-400 placeholder:text-para-text border border-[#8D8D8D] bg-transparent focus:outline-none outline-none focus:border focus:border-black`}
          type={type}
          ref={ref}
          {...props}
        />
        {helperText && (
          <p className="font-Montserrat text-xs text-tertiary">{helperText}</p>
        )}
      </div>
      {error && <InputError>{error}</InputError>}
    </div>
  );
});
