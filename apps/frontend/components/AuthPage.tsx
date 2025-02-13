"use client";
import google from "@/assets/google-signin.png";
// import github from "@/assets/github-signin.png";
import { IconUserEdit, IconPassword, IconSignature } from "@tabler/icons-react";
import Image from "next/image";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { CreateUserSchema, SigninSchema } from "@repo/common/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { HTTP_BACKEND } from "@/config";

type AuthPageProps = {
  isSignin: boolean;
};

type InputFormType = {
  username?: string;
  name?: string;
  password?: string;
};

const AuthPage = ({ isSignin }: AuthPageProps) => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState<InputFormType>({
    username: "",
    name: "",
    password: "",
  });

  const changeHandler: ChangeEventHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async () => {
    if (isSignin) {
      const { username, password } = inputValue;
      const signinParsedData = SigninSchema.safeParse({ username, password });

      if (!signinParsedData.success) {
        return;
      }
      console.log("This is the signin data", signinParsedData);
      try {
        const response = await axios.post(`${HTTP_BACKEND}/signin`, {
          username,
          password,
        });

        if (response.data.token) {
          localStorage.setItem("authorization", response.data.token);
          router.push("/");
        }

        console.log("This is the response form signinParsedData : ", response);
      } catch (e) {
        console.log("Something went wrong in the submitHandler Signin : ", e);
      }
    } else {
      const { name, username, password } = inputValue;
      const signupParsedData = CreateUserSchema.safeParse({
        name,
        username,
        password,
      });

      if (!signupParsedData.success) {
        return;
      }

      try {
        const response = await axios.post(`${HTTP_BACKEND}/signup`, {
          name,
          username,
          password,
        });

        console.log(
          "This is the response form the signupParsedData : ",
          response
        );

        router.push("/signin");

        console.log("This is the signup parsed data : ", signupParsedData);
      } catch (e) {
        console.log("something went wrong in the submitHandler Signup : ", e);
      }
    }
  };
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
                  value={inputValue.name}
                  onChange={changeHandler}
                  name="name"
                  className="bg-neutral-700  py-2 placeholder:text-neutral-400 focus:outline-none text-neutral-300"
                />
              </div>
            )}
            <div className="w-fit bg-neutral-700 px-4 rounded-full inline-flex items-center justify-center gap-4">
              <IconUserEdit color="#d4d4d4" />
              <input
                type="text"
                placeholder="username"
                value={inputValue.username}
                onChange={changeHandler}
                name="username"
                className="bg-neutral-700 py-2 placeholder:text-neutral-400 focus:outline-none text-neutral-300"
              />
            </div>
            <div className="w-fit bg-neutral-700 px-4 rounded-full inline-flex items-center justify-center gap-4">
              <IconPassword color="#d4d4d4" />
              <input
                type="password"
                placeholder="password"
                value={inputValue.password}
                onChange={changeHandler}
                name="password"
                className="bg-neutral-700 py-2 placeholder:text-neutral-400 focus:outline-none text-neutral-300"
              />
            </div>
          </div>
          <div className="mt-8 mb-4 flex flex-col gap-2">
            <button
              className="bg-neutral-300 hover:bg-rose-600 transition rounded-full py-1 tracking-wide font-medium w-full"
              onClick={submitHandler}
            >
              {isSignin ? "Sign in" : "Sign up"}
            </button>
            <button className="border border-neutral-500 hover:border-neutral-300 transition text-neutral-300 rounded-full py-1 w-full font-medium">
              Cancel
            </button>
          </div>
          <hr />
          <div className="">
            <button className="hover:bg-neutral-300 rounded-full py-1 w-full mt-4 inline-flex justify-center items-center gap-4 px-4 text-neutral-300 bg-black border hover:text-black transition font-medium">
              <Image src={google} alt="google-logo-image" className="w-6" />{" "}
              <span>Signin with Google</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
