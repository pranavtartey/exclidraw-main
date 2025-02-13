"use client";
import google from "@/assets/google-signin.png";
// import github from "@/assets/github-signin.png";
import { IconUserEdit, IconPassword, IconSignature } from "@tabler/icons-react";
import Image from "next/image";

type AuthPageProps = {
  isSignin: boolean;
};

const AuthPage = ({ isSignin }: AuthPageProps) => {
  const submitHandler = () => {
    
  }
  return (
    <section className="fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <div className="container">
        <div className="w-fit mx-auto p-8 rounded-lg">
          <div className="py-4">
            <h2 className="text-neutral-300 text-3xl font-semibold tracking-wide mb-1">
              {isSignin ? "Sign in" : "Sign up"}
            </h2>
            {isSignin ? (
              <p className="text-neutral-400 text-lg">Welcome back</p>
            ) : (
              <p className="text-neutral-400 text-lg">Let&apos;s get started</p>
            )}
          </div>
          <div className="flex flex-col gap-4">
            {!isSignin && (
              <div className="w-fit bg-neutral-700 px-4 rounded-full inline-flex items-center justify-center gap-4">
                <IconSignature color="#d4d4d4" />
                <input
                  type="text"
                  placeholder="name"
                  className="bg-neutral-700 rounded-full py-2 placeholder:text-neutral-400 focus:outline-none text-neutral-300"
                />
              </div>
            )}
            <div className="w-fit bg-neutral-700 px-4 rounded-full inline-flex items-center justify-center gap-4">
              <IconUserEdit color="#d4d4d4" />
              <input
                type="text"
                placeholder="username"
                className="bg-neutral-700 rounded-full py-2 placeholder:text-neutral-400 focus:outline-none text-neutral-300"
              />
            </div>
            <div className="w-fit bg-neutral-700 px-4 rounded-full inline-flex items-center justify-center gap-4">
              <IconPassword color="#d4d4d4" />
              <input
                type="password"
                placeholder="password"
                className="bg-neutral-700 rounded-full py-2 placeholder:text-neutral-400 focus:outline-none text-neutral-300"
              />
            </div>
          </div>
          <div className="mt-8 mb-4 flex flex-col gap-2">
            <button className="bg-neutral-300 hover:bg-rose-600 transition rounded-full py-1 tracking-wide font-medium w-full" onClick={submitHandler}>
              {isSignin ? "Sign in" : "Sign up"}
            </button>
            <button className="border border-neutral-500 hover:border-neutral-300 transition text-neutral-300 rounded-full py-1 w-full ">
              Cancel
            </button>
          </div>
          {/* <p className="text-center text-neutral-300">OR</p> */}
          <hr />
          <div className="">
            <button className="hover:bg-neutral-300 rounded-full py-1 w-full mt-4 inline-flex justify-center items-center gap-4 px-4 text-neutral-300 bg-black border hover:text-black transition">
              <Image src={google} alt="google-logo-image" className="w-6" />{" "}
              <span>Signin with Google</span>
            </button>
            {/* <button className="hover:bg-neutral-300 rounded-full py-1 w-full mt-4 inline-flex justify-center items-center gap-4 px-4 text-neutral-300 bg-black border hover:text-black transition">
              <Image src={google} alt="google-logo-image" className="w-6" />{" "}
              <span>Signin with Google</span>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
