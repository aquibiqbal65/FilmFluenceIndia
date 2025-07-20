import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
};

export default function FFButton({ 
  children, 
  to, 
  onClick, 
  variant = "primary", 
  className = "",
  disabled = false 
}: Props) {
  const baseClasses = "sm:inline-block hidden p-4 font-[550] rounded-xs transition-all duration-300 uppercase";
  
  const variantClasses = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground"
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${className} ${
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  }`;

  // If 'to' prop is provided, render as Link
  if (to) {
    return (
      <Link to={to} className={finalClasses}>
        <span className="animatedButton-underline">{children}</span>
      </Link>
    );
  }

  // Otherwise, render as button
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={finalClasses}
    >
      <span className="animatedButton-underline">{children}</span>
    </button>
  );
}
