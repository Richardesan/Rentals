import React, { useState } from "react";
import { useFormik } from "formik";
import { userSchema } from "./schema";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../utils/route";
import { baseAPI } from "../../services/authenticatedapi";
import { apiEndpoints } from "../../services/apiEndpoint";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const inputClass =
  "text-darkText   w-full outline-none border rounded-2xl px-4 py-4 shadow-sm";
const inputDanger =
  "border-danger shadow-sm focus:border-danger focus:shadow-danger";
const inputFocus = "focus:shadow-renatal-blue";
const borderStyle =
  " bg-[linear-gradient(90deg,_#0C2D5B_18.75%,_rgba(212,175,55,0.7)_100%)] rounded-2xl p-[1px]";

const SignupForm = ({ userType }) => {
  const [focusedField, setFocusedField] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      ninNumber: "",
      phoneNumber: "",
      dateOfBirth: "",
      occupation: "",
    },
validationSchema: userSchema,
validationSchema: userSchema,
validationSchema: userSchema,
onSubmit: async (values, { setSubmitting, resetForm }) => {
  try {
    setLoading(true);
    await handleformSubmit(values); 
    resetForm(); 
  } catch (error) {
    console.error(error);
  } finally {
    setSubmitting(false);
    setLoading(false);
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
  const formatDateToDDMMYYYY = (isoDate) => {
    const [year, month, day] = isoDate.split("-");
    return `${day}-${month}-${year}`;
  };

  const handleformSubmit = async (values) => {
    console.log("working..")
    setLoading(true);
    const details = {
      accountType: userType,
      firstname: values.firstName,
      lastname: values.lastName,
      occupation: values.occupation,
      identificationNumber: values.ninNumber,
      dob: formatDateToDDMMYYYY(values.dateOfBirth),
      email: values.email,
      password: values.password,
      
    };
    try {
      const { data } = await baseAPI.post(apiEndpoints.SIGNUP, details);

      toast.success(data.message, {
        style: {
          backgroundColor: "#0C2D5B",
          color: "#fff",
          fontSize: "0.8rem",
          padding: "8px 12px",
        },
      });

      navigate(AppRoutes.login);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Signup failed", {
        style: {
          backgroundColor: "#C8170D",
          color: "#fff",
          fontSize: "0.8rem",
          padding: "8px 12px",
        },
      });
      console.log(err);
    } finally {
      setLoading(false);
    }
  };


  console.log(userType);

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className="space-y-5 mb-2">
      <section className="space-y-3">
        <h1 className="text-2xl max-sm:text-xl text-renatal-blue lato-regular">
          Accounts info
        </h1>

        <label className="block text-sm font-bold">
          <span
            className={`${errors.email && touched.email ? "text-danger" : ""}${
              focusedField === "email" ? " text-renatal-blue" : ""
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

        <section className="flex w-full gap-x-3 max-sm:flex-col max-sm:gap-y-3 ">
          <label className="block text-sm font-bold relative w-full">
            <span
              className={`${
                errors.password && touched.password ? "text-danger" : ""
              }${focusedField === "password" ? " text-renatal-blue" : ""} ${
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
              className="w-4 absolute right-5 top-10 cursor-pointer text-renatal-blue"
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
              }${
                focusedField === "confirmPassword" ? " text-renatal-blue" : ""
              } ${
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
              className="w-4 absolute right-5 top-10 cursor-pointer text-renatal-blue"
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
        <h1 className="text-2xl max-sm:text-xl text-renatal-blue lato-regular">Identity</h1>
        <label className="block text-sm font-bold">
          <span
            className={`${
              errors.ninNumber && touched.ninNumber ? "text-danger" : ""
            }${focusedField === "ninNumber" ? " text-renatal-blue" : ""}`}
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
        <h1 className="text-2xl max-sm:text-xl text-renatal-blue lato-regular">
          Personal information
        </h1>
        <label className="block text-sm font-bold">
          <span
            className={`${
              errors.firstName && touched.firstName ? "text-danger" : ""
            }${focusedField === "firstName" ? " text-renatal-blue" : ""}`}
          >
            First Name{" "}
            {errors.firstName && touched.firstName && (
              <span className="text-danger text-xs">({errors.firstName})</span>
            )}
          </span>
          <div
            className={`$${
              errors.firstName && touched.firstName
                ? inputDanger
                : `${borderStyle} ${inputFocus}`
            }`}
          >
            <input
              type="text"
              name="firstName"
              placeholder="Enter your full name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlurField}
              onFocus={() => handleFocus("firstName")}
              className={`${inputClass} ${
                errors.firstName && touched.firstName ? inputDanger : inputFocus
              }`}
            />
          </div>
        </label>
        <label className="block text-sm font-bold">
          <span
            className={`${
              errors.lastName && touched.lastName ? "text-danger" : ""
            }${focusedField === "lastName" ? " text-renatal-blue" : ""}`}
          >
            Last Name{" "}
            {errors.lastName && touched.lastName && (
              <span className="text-danger text-xs">({errors.lastName})</span>
            )}
          </span>
          <div
            className={`$${
              errors.lastName && touched.lastName
                ? inputDanger
                : `${borderStyle} ${inputFocus}`
            }`}
          >
            <input
              type="text"
              name="lastName"
              placeholder="Enter your full name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlurField}
              onFocus={() => handleFocus("lastName")}
              className={`${inputClass} ${
                errors.lastName && touched.lastName ? inputDanger : inputFocus
              }`}
            />
          </div>
        </label>
        {/* <section className="flex gap-x-3">
          <label className="block text-sm font-bold w-full">
            <span
              className={`${
                errors.phoneNumber && touched.phoneNumber ? "text-danger" : ""
              }${focusedField === "phoneNumber" ? " text-renatal-blue" : ""}`}
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
                  className="border-r border-renatal-blue py-4 pr-4 "
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
        </section> */}
        <section className="flex  gap-x-3 max-sm:flex-col max-sm:gap-y-3">
          <label className="block text-sm font-bold w-full mb-4">
            <span
              className={`${
                errors.occupation && touched.occupation ? "text-danger" : ""
              }${focusedField === "occupation" ? " text-renatal-blue" : ""}`}
            >
              Occupation{" "}
              {errors.occupation && touched.occupation && (
                <span className="text-danger text-xs">
                  ({errors.occupation})
                </span>
              )}
            </span>{" "}
            <div
              className={`$${
                errors.occupation && touched.occupation
                  ? inputDanger
                  : `${borderStyle} ${inputFocus}`
              }`}
            >
              <select
                id="occupation"
                name="occupation"
                value={values.occupation}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${inputClass}  ${
                  errors.occupation && touched.occupation
                    ? inputDanger
                    : inputFocus
                }`}
              >
                <option value="" className="text-lightText">
                  --Occupation--
                </option>
                <option value="employed">Employed</option>
                <option value="self-employed">Self-Employed</option>
                <option value="student">Student</option>
                <option value="unemployed">Unemployed</option>
                <option value="retired">Retired</option>
              </select>
            </div>
          </label>

          <label className="block text-sm font-bold w-full">
            <span
              className={`${
                errors.dateOfBirth && touched.dateOfBirth ? "text-danger" : ""
              }${focusedField === "dateOfBirth" ? " text-renatal-blue" : ""}`}
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
              className={`${inputClass}  ${
                errors.dateOfBirth && touched.dateOfBirth
                  ? inputDanger
                  : inputFocus
              }`}
            />
          </label>
        </section>
      </section>
      <div className="w-fit mx-auto ">
        <button
          type="submit"
          disabled={loading}
          className={` ${
            loading
              ? "bg-renatal-blue/70 py-3 px-[4.5rem] cursor-not-allowed"
              : "bg-renatal-blue py-2 px-16"
          } text-white  lato-regular rounded-md flex justify-center items-center `}
        >
          {loading ? (
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full  animate-spin inline-block"></span>
          ) : (
            <span>Sign up</span>
          )}
        </button>
      </div>
      <p className="text-lg  text-center max-sm:text-sm">
        Already have an account?{" "}
        <Link to={AppRoutes.login}>
          <span className="font-semibold text-rental-yellow cursor-pointer">
            Log in
          </span>
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;
