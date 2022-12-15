import React from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children }: IButtonProps) => {
  return <button>{children}</button>;
};
