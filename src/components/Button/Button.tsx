import { PropsWithChildren } from "react";
import "./Button.css";

export interface ButtonProps {
  onClick: () => void;
  variant?: "primary" | "accent" | "success" | "danger";
}

export function Button({ children, onClick, variant }: PropsWithChildren<ButtonProps>) {
  const classNames = ["view-order-button"];

  if (variant && variant !== "primary") {
    classNames.push(variant);
  }

  return (
    <button className={classNames.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
}
