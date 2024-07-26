import React, { ComponentProps, FC, ReactNode } from "react";

interface OutlinedButton extends ComponentProps<"button"> {
  children: ReactNode;
}

const OutlinedButton: FC<OutlinedButton> = (props) => {
  const { children, ...other } = props;

  return (
    <button
      {...other}
      className="px-4 py-3 border border-[#293478] font-Montserrat font-medium text-[#293478] rounded-md"
    >
      {children}
    </button>
  );
};

export default OutlinedButton;
