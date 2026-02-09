import React from "react";
import type { Metadata } from "next";
import Login from "@/components/pages/auth/Login";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Login | ZomatoGram",
    description: "Sign in to your ZomatoGram account.",
  };
}

const Page = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default Page;
