import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface inputFieldProps<T extends FieldValues = FieldValues> {
  id: string;
  inputName: string;
  label: string;
  type?: string;
  step?: number;
  placeholder?: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
  inputMainClassName?: string;
  mainContainer?: string;
  register?: UseFormRegister<T>;
  validation?: object;
  errors?: FieldErrors<T>;
  min?: number | string;
  max?: number | string;
  minLength?: number;
  maxLength?: number;
  acceptingTypes?: string;
  alertText?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}