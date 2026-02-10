import type { ReactNode } from "react";
import type { DefaultValues, FieldValues, SubmitHandler } from "react-hook-form";

export interface formProps<TFieldValues extends FieldValues = FieldValues> {
  defaultValues?: DefaultValues<TFieldValues>;
  onSubmit: SubmitHandler<TFieldValues>;
  onChange?: (data: TFieldValues) => void;
  children: ReactNode;
  label?: string;
}
