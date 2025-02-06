import * as Yup from "yup";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const appointmentValidationSchema = Yup.object().shape({
  address: Yup.string()
    .required("Please, provide an address")
    .min(2, "Address must be 2 characters or more")
    .max(35, "Address has to be less than 35 characters"),
  tel: Yup.string()
    .required("Please, provide a phone number")
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
      "Please, provide a valid phone number"
    ),
  childAge: Yup.number()
    .required("Please, provide a child age")
    .min(0, "Child age must be 0 or more")
    .max(18, "Child age must be less than 18"),
  time: Yup.date().required("Please, provide a time"),
  email: Yup.string()
    .required("Please, provide an email")
    .matches(emailRegex, "Please, provide a valid email"),
  parentName: Yup.string()
    .required("Please, provide a parent name")
    .min(2, "Parent name must be 2 characters or more")
    .max(35, "Parent name has to be less than 35 characters"),
  comment: Yup.string().max(500, "Comment has to be less than 500 characters"),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please, provide an email")
    .matches(emailRegex, "Please, provide a valid email"),
  password: Yup.string().required("Please, provide a password"),
});

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please, provide a name")
    .min(2, "Name must be 2 characters or more")
    .max(35, "Name has to be less than 35 characters"),
  email: Yup.string()
    .required("Please, provide an email")
    .matches(emailRegex, "Please, provide a valid email"),
  password: Yup.string()
    .required("Please, provide a password")
    .min(8, "Password must be 8 characters or more")
    .max(50, "Password must be less than 50 characters"),
});
