"use client";

import { formProps } from "@/types/form";
import React from "react";
import styles from "@/styles/common/form.module.scss";
import { FormProvider, useForm } from "react-hook-form";

const FormWrapper = ({ children }: formProps) => {

    const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form>
        <div className={styles.children}>{children}</div>
      </form>
    </FormProvider>
  );
};

export default FormWrapper;
