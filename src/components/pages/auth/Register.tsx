"use client";

import React from "react";
import styles from "@/styles/page/register.module.scss"
import FormWrapper from "@/components/common/FormWrapper";
import Image from "next/image";
import logo from "../../../../public/logo/logo.jpg";
import Input from "@/components/ui/Input";
import { Mail, PersonStanding, PersonStandingIcon } from "lucide-react";
import PrimaryButton from "@/components/ui/PrimaryButton";

const Register = () => {

  const handleOnRegister = async () => {};

  return (
    <div className={styles.registerWrapper}>
      <div className={styles.registrationForm}>
        <div className={styles.formLogo}>
          <Image src={logo} alt="logo" />
          <span>ZomatoGram</span>
        </div>
        <div className={styles.formTitle}>
          <h2>Create your account in your Foodic World </h2>
          <p></p>
        </div>
        <FormWrapper onSubmit={handleOnRegister}>
          <div className={styles.nameContainer}>
            <Input
              label="First Name"
              id="firstName"
              inputName="firstName"
              placeholder="Karan..."
              alertText="*"
              icon={PersonStanding}
              validation={{
                required: "First name is required",
                minLength: {
                  value: 3,
                  message: "please enter valid name",
                },
              }}
            />
            <Input
              label="Last Name"
              id="lastName"
              inputName="lastName"
              placeholder="Dabare..."
              icon={PersonStandingIcon}
              validation={{
                required: "Last name is required",
                minLength: {
                  value: 3,
                  message: "please enter valid name",
                },
              }}
            />
          </div>
          <Input
            label="Email"
            id="email"
            type="email"
            inputName="email"
            icon={Mail}
            placeholder="karanDabare198@gmail.com"
            validation={{
              required: "Email is required",
            }}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            inputName="password"
            icon={Mail}
            placeholder="Enter your secret key to connect Foodics"
            validation={{
              required: "Password is required",
            }}
          />
          <div className={styles.submitButton}>
            <PrimaryButton
              type="submit"
              loadingText="Creating your account please wait ..."
            >
              Create Account
            </PrimaryButton>
          </div>
        </FormWrapper>
      </div>
    </div>
  );
};

export default Register;
