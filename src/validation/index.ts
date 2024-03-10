import * as yup from "yup";

export const registerSchema = yup
  .object({
    first_name: yup
      .string()
      .required("First name is required!")
      .min(3, "Username should be at least 3 characters!"),
    last_name: yup
      .string()
      .required("Last name is required!")
      .min(3, "Username should be at least 3 characters!"),
    // phone: yup.string().required("Phone is required!"),
    email: yup
      .string()
      .required("Email is required!")
      .matches(/^[^@]+@[^@]+\.[^@ .]{2,}$/, "Email address is not Valid!"),
    password: yup
      .string()
      .required("Password is required!")
      .min(6, "Password should be at least 6 characters!"),
    confirm_password: yup
      .string()
      .required("Password confirmation is required!")
      .oneOf([yup.ref("password")], "Passwords must match"),
    telegram: yup
      .string()
      .required("Telegram username is required!")
      .matches(/^[a-zA-Z0-9_]+$/, "Invalid characters in the username")
      .min(5, "Username should be at least 5 characters!"),
    usdt_address: yup
      .string()
      .required("USDT is required!")
      .min(3, "USDT should be at least 16 characters!"),
  })
  .required();

export const loginSchema = yup
  .object({
    username: yup
      .string()
      .required("Username is required!")
      .min(3, "Username should be at least 3 characters!"),
    password: yup
      .string()
      .required("Password is required!")
      .min(6, "Password should be at least 6 characters!"),
  })
  .required();

export const resetSchema = yup
  .object({
    email: yup
      .string()
      .required("Email is required!")
      .matches(/^[^@]+@[^@]+\.[^@ .]{2,}$/, "Email address is not Valid!"),
  })
  .required();