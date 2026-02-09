import React from "react";
import { PrimaryButtonProps } from "@/types/button";
import styles from "@/styles/ui/primaryButton.module.scss";

const PrimaryButton = ({
  label,
  children,
  isLoading = false,
  loadingText = "Loading...",
  disabled,
  type = "button",
  className,
  ...rest
}: PrimaryButtonProps) => {
  const content = isLoading
    ? loadingText
    : (children ?? label ?? "PrimaryButton");
  const buttonClassName = [styles.primaryButton, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={buttonClassName}
      disabled={disabled || isLoading}
      data-loading={isLoading ? "true" : undefined}
      aria-busy={isLoading || undefined}
      type={type}
      {...rest}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;
