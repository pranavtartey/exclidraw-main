"use client";
import { FC } from "react";

type AuthPageProps = {
  isSignin: boolean;
};

const AuthPage = ({ isSignin }: AuthPageProps) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="p-2 m-2 bg-white rounded-lg">
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button onClick={() => {}}>{isSignin ? "Sign in" : "Sign up"}</button>
      </div>
    </div>
  );
};

export default AuthPage;
