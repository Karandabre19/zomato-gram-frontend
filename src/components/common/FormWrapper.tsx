"use client";

import { formProps } from "@/types/form";
import React from "react";
import styles from "@/styles/common/form.module.scss";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

const FormWrapper = <TFieldValues extends FieldValues>({
  children,
  onSubmit,
  defaultValues,
}: formProps<TFieldValues>) => {
  const methods = useForm<TFieldValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: true,
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className={styles.children}>{children}</div>
      </form>
    </FormProvider>
  );
};

export default FormWrapper;
