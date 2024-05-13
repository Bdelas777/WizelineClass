import React from "react";

interface LabelProps extends React.AllHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
}

export function Label({ className, htmlFor, ...props }: LabelProps) {
  return (
    <label
      {...props}
      htmlFor={htmlFor}
      className={`flex flex-col py-1 ${className ?? ""}`}
    >
      {props.children}
    </label>
  );
}
