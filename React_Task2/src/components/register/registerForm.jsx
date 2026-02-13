import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Hero from "../heroSection/hero";
import styles from "./registerForm.module.css";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      confirmPassword: Yup.string()
        .min(6, "Must be at least 6 characters")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      terms: Yup.bool().oneOf([true], "You must accept the Terms & Conditions"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Hero />
      <div className={styles.registerWrapper}>
        <div className={styles.registerCard}>
          <h1 className={styles.registerTitle}>Create Account</h1>
          <form className={styles.registerForm} onSubmit={formik.handleSubmit}>
            <div className={styles.nameRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="firstName">
                  First Name
                </label>
                <input
                  className={`${styles.formInput} ${
                    formik.touched.firstName && formik.errors.firstName
                      ? styles.errorInput
                      : ""
                  }`}
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className={styles.errorText}>
                    ⚠ {formik.errors.firstName}
                  </div>
                ) : null}
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className={`${styles.formInput} ${
                    formik.touched.lastName && formik.errors.lastName
                      ? styles.errorInput
                      : ""
                  }`}
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Smith"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className={styles.errorText}>
                    ⚠ {formik.errors.lastName}
                  </div>
                ) : null}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="email">
                Email
              </label>
              <input
                className={`${styles.formInput} ${
                  formik.touched.email && formik.errors.email
                    ? styles.errorInput
                    : ""
                }`}
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className={styles.errorText}>⚠ {formik.errors.email}</div>
              ) : null}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="password">
                Password
              </label>
              <div className={styles.inputWrapper}>
                <input
                  className={`${styles.formInput} ${
                    formik.touched.password && formik.errors.password
                      ? styles.errorInput
                      : ""
                  }`}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className={styles.errorText}>
                  ⚠ {formik.errors.password}
                </div>
              ) : null}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="confirmPassword">
                Confirm password
              </label>
              <div className={styles.inputWrapper}>
                <input
                  className={`${styles.formInput} ${
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? styles.errorInput
                      : ""
                  }`}
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  placeholder="Enter password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowConfirm((prev) => !prev)}
                  tabIndex={-1}
                >
                  {showConfirm ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className={styles.errorText}>
                  ⚠ {formik.errors.confirmPassword}
                </div>
              ) : null}
            </div>

            <div className={styles.termsRow}>
              <label className={styles.termsLabel}>
                <input
                  type="checkbox"
                  name="terms"
                  className={styles.termsCheckbox}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.terms}
                />
                Agree with{" "}
                <a href="#" className={styles.termsLink}>
                  Terms &amp; Conditions
                </a>
              </label>
              {formik.touched.terms && formik.errors.terms ? (
                <div className={styles.errorText}>⚠ {formik.errors.terms}</div>
              ) : null}
            </div>

            <button className={styles.submitBtn} type="submit">
              Sign Up
            </button>

            <p className={styles.loginLinkText}>
              Already have an account?{" "}
              <a href="/login" className={styles.loginLinkAnchor}>
                Login
              </a>
            </p>

            <div className={styles.divider}>
              <span className={styles.dividerLine}></span>
              <span className={styles.dividerText}>or</span>
              <span className={styles.dividerLine}></span>
            </div>

            <button type="button" className={styles.socialBtn}>
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className={styles.socialIcon}
              />
              Sign up with Google
            </button>

            <button type="button" className={styles.socialBtn}>
              <img
                src="https://www.svgrepo.com/show/448224/facebook.svg"
                alt="Facebook"
                className={styles.socialIcon}
              />
              Sign up with Facebook
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
