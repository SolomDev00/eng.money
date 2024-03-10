/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Button from "../../components/schema/Button";
import Input from "../../components/schema/Input";
import { LOGIN_FORM } from "../../data";
import { yupResolver } from "@hookform/resolvers/yup";
import InputErrorMessage from "../../components/InputErrorMessage";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema } from "../../validation";
import axiosInstance from "../../config/axios.config";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { IErrorResponse } from "../../interfaces";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/store";
import { setToken } from "../../app/functions/token";

interface IFormInput {
  username: string;
  password: string;
}

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  // ** Cookies
  const cookie = new Cookies();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(loginSchema),
  });

  // ** Handlers
  const onSubmit: SubmitHandler<IFormInput> = async (data: any) => {
    setIsLoading(true);
    try {
      const { status, data: resData } = await axiosInstance.post(
        "/auth/login",
        data
      );
      console.log(resData);
      dispatch(setToken(resData.response));
      cookie.set("userLogged", resData.response);
      if (status === 200 || 201) {
        toast.success("Login is done, you will navigate after 2 seconds!", {
          position: "bottom-center",
          duration: 4000,
        });
        setTimeout(() => {
          window.location.replace("/");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      const errorObj = error as AxiosError<IErrorResponse>;
      const message =
        errorObj.response?.data.error.details?.message ||
        errorObj.response?.data.message;
      toast.error(`Login failed: ${message}`, {
        position: "bottom-center",
        duration: 1500,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // ** Renders
  const renderLoginForm = LOGIN_FORM.map(
    ({ name, placeholder, type, forl, placel, validation }, idx) => (
      <div key={idx}>
        <div className="space-y-2 pb-1">
          <label htmlFor={forl} className="text-black text-xl">
            {placel}
          </label>
          <Input
            id={forl}
            type={type}
            placeholder={placeholder}
            {...register(name, validation)}
          />
        </div>
        {errors[name] && <InputErrorMessage msg={errors[name]?.message} />}
      </div>
    )
  );

  return (
    <section className="w-[800px] my-20 mx-auto">
      <h2 className="text-black text-2xl pb-6">
        Login To <span className="text-[#ff6600]">E</span>
        <span className="text-font">F</span>
        <span className="text-[#ffc221]">M</span>hub.com
      </h2>
      <form
        className="w-[800px] space-y-3 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        {renderLoginForm}
        <Button fullWidth isLoading={isLoading}>
          Login
        </Button>
        <div className="flex flex-col space-y-1">
          <Link to={"/reset-password"} className="text-black">
            Forgot your password?
            <span className="underline ml-1 text-hover">Reset Password!</span>
          </Link>
          <Link to={"/register"} className="text-black">
            Don&#39;t have an account here?
            <span className="underline ml-1 text-hover">Register here!</span>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
