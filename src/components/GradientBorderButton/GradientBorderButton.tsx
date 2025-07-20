import React from "react";
import "./GradientBorderButton.css";

type GradientBorderButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const GradientBorderButton = ({
  children,
  onClick,
  className = "",
}: GradientBorderButtonProps) => (
  <button className={`gradient-border-btn ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default GradientBorderButton;
