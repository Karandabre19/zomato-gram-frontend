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
        <FormWrapper onSubmit={handleOnLogin}>login</FormWrapper>
      </div>
    </div>
  );
};

export default Login;
