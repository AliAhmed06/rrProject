import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const TextField = ({ type, Icon, placeholder, register, errorMessage }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="bg-gra-light h-[50px] md:w-[350px] rounded-full flex items-center px-8 gap-5 border border-gray1 focus-within:border-first relative">
        <Icon className="text-[20px] text-gray1 " />
        <input
          type={`${showPassword ? "text" : type}`}
          className="border-none outline-none text-gray-dark bg-transparent w-[220px]"
          placeholder={placeholder}
          {...register}
        />
        {type === "password" &&
          (showPassword ? (
            <AiFillEye
              className="text-gray1 cursor-pointer h-[40px] absolute right-[30px]"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ) : (
            <AiFillEyeInvisible
              className="text-gray1 cursor-pointer h-[20px] absolute right-[30px]"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ))}
      </div>
      <p className="text-two text-red">{errorMessage}</p>
    </div>
  );
};

export default TextField;
