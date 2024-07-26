import React, { ComponentProps, FC, ReactNode } from "react";

interface LabelProps extends ComponentProps<"label"> {
  children: ReactNode;
}

const InputLabel: FC<LabelProps> = (labelProps) => {
  const { children, id, ...props } = labelProps;

  return (
    <label
      className="block text-base font-secondary-400 font-Montserrat font-medium text-primary-text"
      htmlFor={id}
      {...props}
    >
      {children}
    </label>
  );
};

export default InputLabel;
