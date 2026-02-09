import React from 'react'
import { inputFieldProps } from '@/types/input'
import styles from "@/styles/ui/input.module.scss";
import { FieldValues, useFormContext, useFormState } from "react-hook-form";

const Input = <T extends FieldValues>({
  id,
  inputName,
  type = "text",
  step,
  placeholder,
  icon: Icon,
  className = "",
  label,
  inputMainClassName = "",
  mainContainer = "",
  validation,
  min,
  max,
  minLength,
  maxLength,
  acceptingTypes,
  alertText = "",
  onClick,
  onChange,
}: inputFieldProps<T>) => {
  const { register, control } = useFormContext();
  const { errors } = useFormState({
    control,
    name: inputName,
  });
  const fieldError = errors[inputName]?.message;
  const validationWithOnChange = validation as
    | { onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void }
    | undefined;
  const registerOptions = {
    ...validationWithOnChange,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof validationWithOnChange?.onChange === "function") {
        validationWithOnChange.onChange(event);
      }
      onChange?.(event);
    },
  };

  return (
    <div className={styles.inputMainContainer}>
      <div className={styles.inputHeader}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        {fieldError ? (
          <span className={styles.inputError}>{String(fieldError)}</span>
        ) : (
          <div className={styles.alertTextContainer}>
            <span>{alertText}</span>
          </div>
        )}
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.iconContainer}>
          {Icon && <Icon className={styles.icons} />}
        </div>
        <input
          id={id}
          type={type}
          step={step}
          placeholder={placeholder}
          className={className}
          min={min}
          max={max}
          minLength={minLength}
          maxLength={maxLength}
          onClick={onClick}
          accept={acceptingTypes}
          {...register(inputName, registerOptions)}
        />
      </div>
    </div>
  );
};

export default Input;
