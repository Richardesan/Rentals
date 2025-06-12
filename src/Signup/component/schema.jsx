// schema.ts
import * as Yup from "yup";

const passwordRules = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{13,}$/;

export const userSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Full Name must be at least 3 characters")
    .required("Required"),
  lastName: Yup.string()
    .min(3, "Full Name must be at least 3 characters")
    .required("Required"),
  email: Yup.string().email("Please enter a valid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(passwordRules, { message: "Upper, lower, number, (!@#$%^&*()_+)" })
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Required"),
  ninNumber: Yup.string()
    .matches(/^\d{11}$/, "NIN must be exactly 11 digits")
    .required("Required"),
    occupation: Yup.string().required("Occupation is required"),
  dateOfBirth: Yup.date()
    .required("Required")
    .max(new Date(), "Date of birth cannot be in the future"),
});
