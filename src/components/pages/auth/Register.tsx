"use client";

import React from "react";
import styles from "@/styles/page/register.module.scss"
import FormWrapper from "@/components/common/FormWrapper";
import Image from "next/image";
import logo from "../../../../public/logo/logo.jpg";

const Register = () => {

  const handleOnRegister = async () => {};

  return (
    <div className={styles.registerWrapper}>
      <div className={styles.registrationForm}>
        <div className={styles.formLogo}>
          <Image src={logo} alt="logo" />
          <span>ZomatoGram</span>
        </div>
        <FormWrapper onSubmit={handleOnRegister}>register</FormWrapper>
      </div>
    </div>
  );
};

export default Register;
