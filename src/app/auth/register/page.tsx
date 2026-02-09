import Register from "@/components/pages/auth/Register";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Sign Up | ZomatoGram",
    description: "Sign in to your ZomatoGram account.",
  };
}


const Page = () => {
  return (
    <>
      <Register />
    </>
  );
};

export default Page;
