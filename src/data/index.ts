import { ILoginInput, IRegisterInput, IResetInput } from "../interfaces";

export const REGISTER_FORM: IRegisterInput[] = [
  {
    name: "first_name",
    placeholder: "Type your FirstName ..",
    type: "text",
    forl: "firstname",
    placel: "FirstName :",
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    name: "last_name",
    placeholder: "Type your LastName ..",
    type: "text",
    forl: "lastname",
    placel: "LastName :",
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    name: "phone",
    placeholder: "Type your Phone number ..",
    type: "text",
    forl: "name",
    placel: "Phone :",
  },
  {
    name: "email",
    placeholder: "Type your Email ..",
    type: "email",
    forl: "email",
    placel: "Email :",
    validation: {
      required: true,
      pattern: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
    },
  },
  {
    name: "password",
    placeholder: "Type your Password ..",
    type: "password",
    forl: "password",
    placel: "Password :",
    validation: {
      required: true,
      minLength: 6,
    },
  },
  {
    name: "confirm_password",
    placeholder: "Type your password Confirmation ..",
    type: "password",
    forl: "confirm_password",
    placel: "Password Confirmation :",
    validation: {
      required: true,
      minLength: 6,
    },
  },
  {
    name: "telegram",
    placeholder: "Type your Telegram username ..",
    type: "text",
    forl: "telegram_username",
    placel: "Telegram username :",
    validation: {
      required: true,
      minLength: 6,
    },
  },
  {
    name: "usdt_address",
    placeholder: "Type your USDT ..",
    type: "text",
    forl: "USDT",
    placel: "USDT :",
    validation: {
      required: true,
      minLength: 6,
    },
  },
];

export const LOGIN_FORM: ILoginInput[] = [
  {
    name: "username",
    placeholder: "Type your Username ..",
    type: "text",
    forl: "username",
    placel: "Username :",
    validation: {
      required: true,
      minLength: 3,
    },
  },
  {
    name: "password",
    placeholder: "Type your Password ..",
    type: "password",
    forl: "password",
    placel: "Password :",
    validation: {
      required: true,
      minLength: 6,
    },
  },
];

export const RESET_FORM: IResetInput[] = [
  {
    name: "email",
    placeholder: "Type your Email ..",
    type: "email",
    forl: "email",
    placel: "Email :",
    validation: {
      required: true,
      pattern: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
    },
  },
];
