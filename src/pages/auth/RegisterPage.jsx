import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";

import {
  HiOutlineUser,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
} from "react-icons/hi";
import {
  fetchCreateUser,
  selectUser,
} from "../../redux/feature/user/userSlice";
import { Metadata } from "../../lib/Metadata";
import { useTranslation } from "react-i18next";

const RegisterPage = () => {
  const { t } = useTranslation();
  const userResponse = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (userResponse?.status === 201) {
      navigate("/verify-code");
    }
  }, [userResponse?.status, navigate]);

  const initialValues = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    role: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    username: Yup.string().required("Required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
      )
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const payload = { ...values };
    console.log("Payload being sent to the API:", payload);
    dispatch(fetchCreateUser(payload));
    localStorage.setItem("email", values.email);
    resetForm();
  };

  const handleSignUpClick = () => {
    navigate("/login");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  return (
    <div className="flex justify-center mt-6 px-4">
      <div>
        <Metadata
          title="Register | TrovKa"
          description="Welcome to Service-TrovKa"
          author="SainaIna"
          keywords="services, trovka, home"
          thumbnail="https://i.ibb.co/s6D2gFC/trovka-icon.png"
        />
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-2xl p-8 dark:bg-gray-900">
        <div className="flex flex-col w-full md:w-1/2 px-4 md:px-8">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ touched, errors, values, setFieldValue }) => (
              <Form className="flex flex-col text-xl">
                <div className="flex items-center justify-center text-2xl font-Regular text-blue-900 mb-6">
                  <img
                    src=".//src/assets/logo/Trovka-logo-official.png"
                    alt="Logo"
                    className="h-12 rounded-full"
                  />
                </div>
                <label htmlFor="email" className="text-blue-900 ">
                  {t("Email")}
                </label>

                <div className="relative mt-4 mb-4 flex items-center">
                  <MdEmail className="absolute dark:text-gray-200 left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t("Email")}
                    className={`pl-10 pr-4 py-2 rounded-lg border ${
                      touched.email && errors.email
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:border-blue-500 w-full`}
                    required
                  />
                </div>
                {touched.email && errors.email && (
                  <div className="text-sm text-red-500 mt-1">
                    {errors.email}
                  </div>
                )}
                <label htmlFor="email" className="text-blue-900 dark:text-gray-200">
                  {t("Username")}
                </label>
                <div className="relative mt-4 mb-4 flex items-center">
                  <HiOutlineUser className="absolute dark:text-gray-200  left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    placeholder={t("Username")}
                    className={`pl-10 pr-4 py-2 rounded-lg border ${
                      touched.username && errors.username
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:border-blue-500 w-full`}
                    required
                  />
                </div>
                {touched.username && errors.username && (
                  <div className="text-sm text-red-500 mt-1">
                    {errors.username}
                  </div>
                )}
                <label htmlFor="email" className="text-blue-900 dark:text-gray-200">
                  {t("Password")}
                </label>
                <div className="relative mt-4 mb-4 flex items-center">
                  <HiOutlineLockClosed className="absolute dark:text-gray-200  left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                  <Field
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder={t("Password")}
                    className={`pl-10 pr-4 py-2 rounded-lg border ${
                      touched.password && errors.password
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:border-blue-500 w-full`}
                    required
                  />
                  <div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <HiOutlineEyeOff className="dark:text-gray-200 text-gray-500" />
                    ) : (
                      <HiOutlineEye className="dark:text-gray-200 text-gray-500" />
                    )}
                  </div>
                </div>
                {touched.password && errors.password && (
                  <div className="text-sm text-red-500 mt-1">
                    {errors.password}
                  </div>
                )}
                <label htmlFor="email" className="text-blue-900">
                  {t("Cf_Password")}
                </label>

                <div className="relative mt-4 flex items-center">
                  <HiOutlineLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                  <Field
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder={t("Cf_Password")}
                    className={`pl-10 pr-4 py-2 rounded-lg border ${
                      touched.confirmPassword && errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:border-blue-500 w-full`}
                    required
                  />
                  <div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? (
                      <HiOutlineEyeOff className="dark:text-gray-200 text-gray-500" />
                    ) : (
                      <HiOutlineEye className="dark:text-gray-200 text-gray-500" />
                    )}
                  </div>
                </div>
                {touched.confirmPassword && errors.confirmPassword && (
                  <div className="text-sm text-red-500 mt-1">
                    {errors.confirmPassword}
                  </div>
                )}

                <div className="flex justify-center mt-4">
                  <label className="mr-4 text-[18px]">
                    <Field
                      type="radio"
                      name="role"
                      value="user"
                      checked={values.role === "user"}
                      onChange={() => setFieldValue("role", "user")}
                      className="mr-2"
                    />
                    {t('User')}
                  </label>
                  <label className="text-[18px]">
                    <Field
                      type="radio"
                      name="role"
                      value="provider"
                      checked={values.role === "provider"}
                      onChange={() => setFieldValue("role", "provider")}
                      className="mr-2 "
                    />
                    {t('Providers')}
                  </label>
                </div>

                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    className="bg-Secondary w-full text-white text-[18px] rounded-lg px-6 py-2 h-12"
                  >
                    {t('Register')}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <div className="flex justify-center mt-4">
          <p className="text-black">Already have an account?</p>
            <button
              className="ml-2 text-[#FFB600]"
              onClick={handleSignUpClick}
            >
              {t('Sign In')}
            </button>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 px-4">
          <img
            src=".//src/assets/icon/register.png"
            alt="Register"
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
