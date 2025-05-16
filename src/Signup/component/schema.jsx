// schema.ts
import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const userSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Full Name must be at least 3 characters")
    .required("Required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
  ninNumber: Yup.string()
    .matches(/^\d{11}$/, "NIN must be exactly 11 digits")
    .required("Required"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Required"),
  dateOfBirth: Yup.date()
    .required("Required")
    .max(new Date(), "Date of birth cannot be in the future"),
});
