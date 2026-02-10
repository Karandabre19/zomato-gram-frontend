"use client";

import React from "react";
import styles from "@/styles/page/register.module.scss";
import FormWrapper from "@/components/common/FormWrapper";
import Image from "next/image";
import logo from "../../../../public/logo/logo.jpg";
import googleIcon from "../../../../public/logo/google.png";
import appleIcon from "../../../../public//logo/apple.png";
import Input from "@/components/ui/Input";
import {
  LockKeyhole,
  Mail,
  PersonStanding,
  PersonStandingIcon,
} from "lucide-react";
import PrimaryButton from "@/components/ui/PrimaryButton";
import type { registerUser } from "@/types/api";

const Register = () => {
  const handleOnRegister = async (data: registerUser) => {

    try {
      
    } catch (error) {
      console.error(error)
    }

  };

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
        <FormWrapper<registerUser> onSubmit={handleOnRegister}>
          <div className={styles.nameContainer}>
            <Input
              label="First Name"
              id="firstName"
              inputName="firstName"
              placeholder="What should we call you?"
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
              placeholder="Your family name?"
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
            placeholder="Best email for updates"
            validation={{
              required: "Email is required",
            }}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            inputName="password"
            icon={LockKeyhole}
            placeholder="Set your foodie password"
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
        <div className={styles.separator}>
          <div className={styles.line}></div>
          <div className={styles.orMessage}>Or sign up with</div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.redirectingSignUp}>
          <button className={styles.googleButton}>
            <Image src={googleIcon} alt="google-icon" />
            <span>Google</span>
          </button>
          <button className={styles.appleButton}>
            <Image src={appleIcon} alt="apple-icon" />
            <span>apple</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
