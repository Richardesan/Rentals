import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { loginSchema } from "./schema";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { baseAPI } from "../../services/authenticatedapi";
import { apiEndpoints } from "../../services/apiEndpoint";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../utils/route";
import { toast } from "react-toastify";

const LoginForm = ({ userState }) => {
  const [focusedField, setFocusedField] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setToken, setAuthUser, user, setUserType, userType } = useAuth();
  const navigate = useNavigate();
  const routeType =
    userType === "landlord" ? AppRoutes.landlordDashboard : AppRoutes.dashboard;

  useEffect(() => {
    if (user) {
      navigate(routeType);
    }
  }, [user, routeType]);

  const inputClass =
    "text-darkText   w-full outline-none border rounded-2xl px-4 py-4 shadow-sm";
  const inputDanger =
    "border-danger shadow-sm focus:border-danger focus:shadow-danger";
  const inputFocus = "focus:shadow-renatal-blue";
  const borderStyle =
    " bg-[linear-gradient(90deg,_#0C2D5B_18.75%,_rgba(212,175,55,0.7)_100%)] rounded-2xl p-[1px]";

  const formik = useFormik({
    initialValues: {
      email: "",
      loginPassword: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setLoading(true);
      try {
        await handleformSubmit(values);
      } finally {
        setLoading(false);
        setSubmitting(false);
      }
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
  const accountType = userState ? "landlord" : "tenant";
  const handleformSubmit = async (values) => {
    setLoading(true);
    const details = {
      accountType,
      email: values.email,
      password: values.loginPassword,
    };
    try {
      const { data } = await baseAPI.post(apiEndpoints.LOGIN, details);

      const myUser = data?.data?.account;
      const usertoken = data?.data?.jwt;
      console.log(usertoken)
      if (myUser) {
        setAuthUser(myUser);
        setToken(usertoken);
        setUserType(accountType);
        toast.success("Logged in successfully!", {
          style: {
            backgroundColor: "#0C2D5B",
            color: "#fff",
            fontSize: "0.8rem",
            padding: "8px 12px",
          },
        });
        navigate(routeType);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message, {
        style: {
          backgroundColor: "#C8170D",
          color: "#fff",
          fontSize: "0.8rem",
          padding: "8px 12px",
        },
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-2">
      <label className="block text-sm font-bold">
        <span
          className={`${errors.email && touched.email ? "text-danger" : ""}${
            focusedField === "email" ? " text-renatal-blue" : ""
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
          className={` ${
            errors.loginPassword && touched.loginPassword ? "text-danger" : ""
          }${focusedField === "loginPassword" ? " text-renatal-blue" : ""} ${
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
          className="w-4 absolute right-5 top-10 cursor-pointer text-renatal-blue"
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
      
      <p className="text-end capitalize max-sm:text-sm">
        <Link to={AppRoutes.forgot}>
        forgot password</Link></p>

      <div className="w-fit mx-auto">
        <button
          type="submit"
          disabled={loading}
          className={` ${
            loading
              ? "bg-renatal-blue/70 py-3 px-[4.5rem] cursor-not-allowed"
              : "bg-renatal-blue py-2  px-16"
          } text-white  lato-regular rounded-md flex justify-center items-center `}
        >
          {loading ? (
            <span className="w-5 h-5 max-sm:w-4 max-sm:h-4 border-2 border-white border-t-transparent rounded-full  animate-spin inline-block"></span>
          ) : (
            <span>Log in</span>
          )}
        </button>
      </div>

      <p className="text-lg text-center max-sm:text-sm mt-4 mb-6">
        Don&apos;t have an account?{" "}
        <Link to={userState ? "/signup/landlord" : "/signup/tenant"}>
          <span className="font-semibold text-rental-yellow transition-all duration-100  lato-regular">
            Sign up
          </span>
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
