import React, { useState } from "react";
import { useFormik } from "formik";
import { userSchema } from "./schema";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import {AppRoutes} from "../../utils/route"

const inputClass =
  "text-darkText   w-full outline-none border rounded-2xl px-4 py-4 shadow-sm";
const inputDanger =
  "border-danger shadow-sm focus:border-danger focus:shadow-danger";
const inputFocus = "focus:shadow-primaryCol";
const borderStyle =
  " bg-[linear-gradient(90deg,_#0C2D5B_18.75%,_rgba(212,175,55,0.7)_100%)] rounded-2xl p-[1px]";

const SignupForm = () => {
  const [focusedField, setFocusedField] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      ninNumber: "",
      phoneNumber: "",
      dateOfBirth: "",
    },

    validationSchema: userSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log("form submitted");
      console.log(values);
    },
  });

  const {
    values,
    handleBlur,
    errors,
    handleChange,
    touched,
    isSubmitting,
    handleSubmit,
  } = formik;

  const handleFocus = (field) => setFocusedField(field);
  const handleBlurField = (e) => {
    handleBlur(e);
    setFocusedField(null);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className="space-y-5 mb-2">
     

      <section className="space-y-3">
     <h1 className="text-2xl text-primaryCol lato-regular">Accounts info</h1>

      <label className="block text-sm font-bold">
        <span
          className={`${errors.email && touched.email ? "text-danger" : ""}${
            focusedField === "email" ? " text-primaryCol" : ""
          } ${
            ((focusedField === "email" && errors.email && touched.email) ||
              (errors.email && touched.email && "text-danger")) &&
            "text-danger"
          }`}
        >
          Email Address{" "}
          {errors.email && touched.email && (
            <span className={`text-danger text-xs `}>({errors.email})</span>
          )}
        </span>
        <div
          className={`$${
            errors.email && touched.email
              ? inputDanger
              : `${borderStyle} ${inputFocus}`
          }`}
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlurField}
            onFocus={() => handleFocus("email")}
            className={`${inputClass} ${
              errors.email && touched.email ? inputDanger : inputFocus
            }`}
          />
        </div>
      </label>

      <section className="flex w-full gap-x-3">
        <label className="block text-sm font-bold relative w-full">
          <span
            className={`${
              errors.password && touched.password ? "text-danger" : ""
            }${focusedField === "password" ? " text-primaryCol" : ""} ${
              ((focusedField === "password" &&
                errors.password &&
                touched.password) ||
                (errors.password && touched.password && "text-danger")) &&
              "text-danger"
            }`}
          >
            Password{" "}
            {errors.password && touched.password && (
              <span className={`text-danger text-xs `}>
                ({errors.password})
              </span>
            )}
          </span>
          <div
            className={`$${
              errors.password && touched.password
                ? inputDanger
                : `${borderStyle} ${inputFocus}`
            }`}
          >
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlurField}
              onFocus={() => handleFocus("password")}
              className={`${inputClass} ${
                errors.password && touched.password ? inputDanger : inputFocus
              }`}
            />
          </div>
          <div
            className="w-4 absolute right-5 top-10 cursor-pointer text-primaryCol"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {!showPassword ? (
              <FiEye className="text-xl " />
            ) : (
              <FiEyeOff className="text-xl" />
            )}
          </div>
        </label>

        <label className="block text-sm font-bold relative w-full">
          <span
            className={`${
              errors.confirmPassword && touched.confirmPassword
                ? "text-danger"
                : ""
            }${focusedField === "confirmPassword" ? " text-primaryCol" : ""} ${
              ((focusedField === "confirmPassword" &&
                errors.confirmPassword &&
                touched.confirmPassword) ||
                (errors.confirmPassword &&
                  touched.confirmPassword &&
                  "text-danger")) &&
              "text-danger"
            }`}
          >
            Confirm Password{" "}
            {errors.confirmPassword && touched.confirmPassword && (
              <span className={`text-danger text-xs `}>
                ({errors.confirmPassword})
              </span>
            )}
          </span>
          <div
            className={`$${
              errors.confirmPassword && touched.confirmPassword
                ? inputDanger
                : `${borderStyle} ${inputFocus}`
            }`}
          >
            <input
              type={confirmShowPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlurField}
              onFocus={() => handleFocus("confirmPassword")}
              className={`${inputClass} ${
                errors.confirmPassword && touched.confirmPassword
                  ? inputDanger
                  : inputFocus
              }`}
            />
          </div>
          <div
            className="w-4 absolute right-5 top-10 cursor-pointer text-primaryCol"
            onClick={() => setConfirmShowPassword((prev) => !prev)}
          >
            {!confirmShowPassword ? (
              <FiEye className="text-xl " />
            ) : (
              <FiEyeOff className="text-xl" />
            )}
          </div>
        </label>
      </section>
        </section>
        <section className="space-y-3">

        
      <h1 className="text-2xl text-primaryCol lato-regular">Identity</h1>
      <label className="block text-sm font-bold">
        <span
          className={`${
            errors.ninNumber && touched.ninNumber ? "text-danger" : ""
          }${focusedField === "ninNumber" ? " text-primaryCol" : ""}`}
        >
          NIN Number{" "}
          {errors.ninNumber && touched.ninNumber && (
            <span className="text-danger text-xs">({errors.ninNumber})</span>
          )}
        </span>
        <div
          className={`$${
            errors.ninNumber && touched.ninNumber
              ? inputDanger
              : `${borderStyle} ${inputFocus}`
          }`}
        >
          <input
            type="text"
            name="ninNumber"
            placeholder="Enter your 11-digit NIN"
            value={values.ninNumber}
            onChange={handleChange}
            onBlur={handleBlurField}
            onFocus={() => handleFocus("ninNumber")}
            className={`${inputClass} ${
              errors.ninNumber && touched.ninNumber ? inputDanger : inputFocus
            }`}
          />
        </div>
      </label>
      </section>
      <section className="space-y-3">

      
      <h1 className="text-2xl text-primaryCol lato-regular">Personal information</h1>
      <label className="block text-sm font-bold">
        <span
          className={`${
            errors.fullName && touched.fullName ? "text-danger" : ""
          }${focusedField === "fullName" ? " text-primaryCol" : ""}`}
        >
          Full Name{" "}
          {errors.fullName && touched.fullName && (
            <span className="text-danger text-xs">({errors.fullName})</span>
          )}
        </span>
        <div
          className={`$${
            errors.fullName && touched.fullName
              ? inputDanger
              : `${borderStyle} ${inputFocus}`
          }`}
        >
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlurField}
            onFocus={() => handleFocus("fullName")}
            className={`${inputClass} ${
              errors.fullName && touched.fullName ? inputDanger : inputFocus
            }`}
          />
        </div>
      </label>
      <section className="flex gap-x-3">
        <label className="block text-sm font-bold w-full">
          <span
            className={`${
              errors.phoneNumber && touched.phoneNumber ? "text-danger" : ""
            }${focusedField === "phoneNumber" ? " text-primaryCol" : ""}`}
          >
            Phone Number{" "}
            {errors.phoneNumber && touched.phoneNumber && (
              <span className="text-danger text-xs">
                ({errors.phoneNumber})
              </span>
            )}
          </span>
         
   <div
          className={` flex relative ${
            errors.phoneNumber && touched.phoneNumber
              ? inputDanger
              : `${borderStyle} ${inputFocus}`
          }`}
        >
          <div className="absolute flex top-0 left-0 rounded-2xl h-full px-4 items-center">
            <img
              src="/ngnFlag.png"
              className="border-r border-primaryCol py-4 pr-4 "
            />
            <p className="pl-1">+234</p>
          </div>

          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlurField}
            onFocus={() => handleFocus("phoneNumber")}
            className={`pl-24  ${inputClass} ${
              errors.phoneNumber && touched.phoneNumber
                ? inputDanger
                : inputFocus
            }`}
          />
        </div>


        </label>
        <label className="block text-sm font-bold w-full">
          <span
            className={`${
              errors.dateOfBirth && touched.dateOfBirth ? "text-danger" : ""
            }${focusedField === "dateOfBirth" ? " text-primaryCol" : ""}`}
          >
            Date of Birth{" "}
            {errors.dateOfBirth && touched.dateOfBirth && (
              <span className="text-danger text-xs">
                ({errors.dateOfBirth})
              </span>
            )}
          </span>
          <input
            type="date"
            name="dateOfBirth"
            value={values.dateOfBirth}
            onChange={handleChange}
            onBlur={handleBlurField}
            onFocus={() => handleFocus("dateOfBirth")}
            className={`${inputClass} ${
              errors.dateOfBirth && touched.dateOfBirth
                ? inputDanger
                : inputFocus
            }`}
          />
        </label>
      </section>
     </section>
<div className="w-fit mx-auto">

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-primaryCol  text-white py-3 px-16 lato-regular rounded-md "
      >
        Sign up
      </button>
</div>
      <p className="text-lg  text-center">Already have an account? <Link to={AppRoutes.login}>
      <span className="text-rental-yellow cursor-pointer">LOG IN</span>
      </Link></p>
    </form>
  );
};

export default SignupForm;
