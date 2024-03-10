import InputErrorMessage from "../../components/InputErrorMessage";
import Button from "../../components/schema/Button";
import Input from "../../components/schema/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { REGISTER_FORM } from "../../data";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validation";
import axiosInstance from "../../config/axios.config";
import toast from "react-hot-toast";
import { useState } from "react";
import { AxiosError } from "axios";
import { IErrorResponse } from "../../interfaces";
import { Link, useNavigate } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface IFormInput {
  first_name: string;
  last_name: string;
  phone?: string;
  email: string;
  password: string;
  confirm_password: string;
  telegram: string;
  usdt_address: string;
}

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");

  const router = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(registerSchema),
  });

  // Handlers
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);
    try {
      const requestData = {
        ...data,
        phone,
        username: `${data.first_name} ${data.last_name}`,
      };
      console.log(requestData);
      const { status, data: resData } = await axiosInstance.post(
        "auth/signup",
        requestData
      );
      console.log(resData);
      if (status === 200) {
        toast.success("Register is done, you will navigate after 2 seconds!", {
          position: "bottom-center",
          duration: 4000,
        });
        setTimeout(() => {
          router("/login");
        }, 1500);
      }
    } catch (error) {
      const errorObj = error as AxiosError<IErrorResponse>;
      const message = errorObj.response?.data.error.message;
      toast.error(`${message}`, {
        position: "bottom-center",
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Renders
  const renderRegisterForm = REGISTER_FORM.map(
    ({ name, placeholder, type, forl, placel, validation }, idx) => (
      <div key={idx}>
        <div className="space-y-2 pb-1">
          <label htmlFor={forl} className="text-black text-xl">
            {placel}
          </label>
          {name === "phone" ? (
            <div className="space-y-2">
              <PhoneInput
                value={phone}
                defaultCountry="eg"
                onChange={(phone) => setPhone(phone)}
              />
              {(phone.trim() === "" || phone.trim().length <= 2) && (
                <InputErrorMessage msg={"Phone is Required!"} />
              )}
            </div>
          ) : (
            <Input
              id={forl}
              type={type}
              placeholder={placeholder}
              {...register(name, validation)}
            />
          )}
          {errors[name] && <InputErrorMessage msg={errors[name]?.message} />}
        </div>
      </div>
    )
  );

  return (
    <section className="w-[800px] my-24 mx-auto">
      <h2 className="text-hover text-2xl pb-6">Register with a new account!</h2>
      <form
        className="w-[800px] space-y-3 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        {renderRegisterForm}
        <Button fullWidth isLoading={isLoading}>
          Register
        </Button>
        <div className="flex flex-col space-y-2">
          <Link to={"/login"} className="text-black">
            Having an account here?
            <span className="underline ml-1 text-hover">Login now!</span>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default RegisterPage;
