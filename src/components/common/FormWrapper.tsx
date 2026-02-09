"use client";

import { formProps } from "@/types/form";
import React from "react";
import styles from "@/styles/common/form.module.scss";
import { FormProvider, useForm } from "react-hook-form";

const FormWrapper = ({ children, onSubmit, onChange }: formProps) => {
  const methods = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: true,
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
