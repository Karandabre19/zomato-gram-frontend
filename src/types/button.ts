import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: ReactNode;
  type: "submit" | "button" | "reset" | undefined;
  isLoading?: boolean;
  loadingText?: string;
}
