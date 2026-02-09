import type { ReactNode } from "react";

export interface formProps {
  defaultValues?: unknown | null;
  onSubmit: (data: unknown) => void;
  onChange?: (data: unknown) => void;
  children: ReactNode;
  label?: string;
}
