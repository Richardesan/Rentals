import React, { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "./schema";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const [focusedField, setFocusedField] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const inputClass ="text-darkText   w-full outline-none border rounded-2xl px-4 py-4 shadow-sm";
  const inputDanger ="border-danger shadow-sm focus:border-danger focus:shadow-danger";
  const inputFocus = "focus:shadow-primaryCol";
  const borderStyle =" bg-[linear-gradient(90deg,_#0C2D5B_18.75%,_rgba(212,175,55,0.7)_100%)] rounded-2xl p-[1px]";
  const formik = useFormik({
    initialValues: {
      email: "",
      loginPassword: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log("✅ Form Submitted with values:", values);
      setTimeout(() => setSubmitting(false), 1000);
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
    <form onSubmit={handleSubmit} className="space-y-4 mb-2">
      {/* Email Field */}

      <label className="block text-sm font-bold">
        <span
          className={`${errors.email && touched.email ? "text-danger" : ""}${
            focusedField === "email" ? " text-primaryCol" : ""
          } ${
            focusedField === "email" &&
            errors.email &&
            touched.email &&
            "text-danger"
          } `}
        >
          Email Address
        </span>
        <div
          className={`${
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
        {errors.email && touched.email && (
          <p className="text-danger text-xs mt-1">{errors.email}</p>
        )}
      </label>

      {/* Password Field */}
      <label className="block text-sm font-bold relative ">
        <span
          className={`${
            errors.loginPassword && touched.loginPassword ? "text-danger" : ""
          }${focusedField === "loginPassword" ? " text-primaryCol" : ""} ${
            focusedField === "loginPassword" &&
            errors.loginPassword &&
            touched.loginPassword &&
            "text-danger"
          }`}
        >
          Password
        </span>
        <div
          className={`$${
            errors.loginPassword && touched.loginPassword
              ? inputDanger
              : `${borderStyle} ${inputFocus}`
          }`}
        >
          <input
            type={showPassword ? "text" : "password"}
            name="loginPassword"
            placeholder="Enter Password"
            value={values.loginPassword}
            onChange={handleChange}
            onBlur={handleBlurField}
            onFocus={() => handleFocus("loginPassword")}
            className={`${inputClass} ${
              errors.loginPassword && touched.loginPassword
                ? inputDanger
                : inputFocus
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
        {errors.loginPassword && touched.loginPassword && (
          <p className="text-danger text-xs mt-1">{errors.loginPassword}</p>
        )}
      </label>
      <p className="text-end capitalize">forgot password</p>
      <div className="w-fit mx-auto">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primaryCol  text-white py-3 px-16 lato-regular rounded-md "
        >
          Log in
        </button>
      </div>

      <p className="text-lg text-center mt-4 mb-6">
        Don&apos;t have an account?{" "}
        <span className="text-rental-yellow">SIGN UP</span>
      </p>
      <section className="flex justify-center items-center gap-x-4">
        <Link to={`/signup/property-owner`} className={borderStyle}>
          <p className="text-lg text-primaryCol px-4 py-2 uppercase bg-white rounded-2xl text-center">
            As a property owner
          </p>
        </Link>

        <Link to="/signup/tenant" className={borderStyle}>
          <p className="text-lg text-primaryCol px-4 py-2 uppercase bg-white rounded-2xl text-center">
            As a tenant
          </p>
        </Link>
      </section>
    </form>
  );
};

export default LoginForm;
