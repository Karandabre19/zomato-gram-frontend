"use client";

import styles from "@/styles/page/login.module.scss";
import FormWrapper from "@/components/common/FormWrapper";
import Image from "next/image";
import logo from "../../../../public/logo/logo.jpg";

const Login = () => {
  const handleOnLogin = async () => {};

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginForm}>
        <div className={styles.formLogo}>
          <Image src={logo} alt="logo" />
          <span>ZomatoGram</span>
        </div>
        <div className={styles.formTitle}>
          <h2>Login to your Foodic World </h2>
          <p></p>
        </div>
        <FormWrapper onSubmit={handleOnLogin}>login</FormWrapper>
      </div>
    </div>
  );
};

export default Login;
