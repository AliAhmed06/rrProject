"use client";
import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";

import { SiMinutemailer } from "react-icons/si";
import { BsKeyFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";

import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

import TextField from "../login/TextField";
import useLoaderStore from "@/stores/loaderStore";
// import useLoaderStore from "@/src/stores/loaderStore";

const RegisterPage = ({ authProviders }) => {
  const setLoading = useLoaderStore((state) => state.setLoading);
  const router = useRouter();

  const { register, control, handleSubmit, formState, reset, watch } =
    useForm();
  const { errors } = formState;

  const registerHandler = async (data, e) => {
    e.preventDefault();
    console.log(data);
    try {
      setLoading(true);

      let res = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/register`,
        {
          headers: {
            "Content-type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            username: data.name,
            email: data.email,
            password: data.password,
          }),
        }
      );
      res = await res.json();
      // console.log(res);
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success(res.message);
        setTimeout(() => {
          router.push("/auth/login");
        }, 1500);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[800px] mt-[-50px]">
      <div className="space-y-3 border border-first rounded-sm shadow-md w-[500px] flex flex-col items-center justify-center p-10">
        <h2 className="text-4xl font-bold text-first">Register</h2>
        <p className="text-gray text-center">
          Get access to one of the best Ecommerce services in the world
        </p>
        <form
          onSubmit={handleSubmit(registerHandler)}
          noValidate
          className="space-y-5"
        >
          <TextField
            Icon={AiOutlineUser}
            type={"text"}
            placeholder={"Enter Name"}
            register={register("name", {
              required: "Name is required",
            })}
            errorMessage={errors?.name?.message}
          />

          <TextField
            Icon={SiMinutemailer}
            type={"email"}
            placeholder={"Enter Email"}
            register={register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Email is not in proper format",
              },
            })}
            errorMessage={errors?.email?.message}
          />

          <TextField
            Icon={BsKeyFill}
            type={"password"}
            placeholder={"Enter Password"}
            register={register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password should contain atleast 6 characters",
              },
            })}
            errorMessage={errors?.password?.message}
          />

          <TextField
            Icon={BsKeyFill}
            type={"password"}
            placeholder={"Confirm Password"}
            register={register("c_password", {
              required: "Please Confirm Password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            errorMessage={errors?.c_password?.message}
          />

          <button className="bg-first text-white py-3 px-5 w-full rounded-full">
            Register
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link href="/auth/login" className="text-first hover:underline">
            Login
          </Link>{" "}
        </p>
        {/* <DevTool control={control} /> */}
      </div>
    </div>
  );
};

export default RegisterPage;
