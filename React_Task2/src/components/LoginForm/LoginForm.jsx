import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Hero from "../heroSection/hero";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Hero />
      <div className={styles.signupWrapper}>
        <div className={styles.signupCard}>
          <h1 className={styles.signupTitle}>Welcome Back!</h1>
          <form className={styles.signupForm} onSubmit={formik.handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="email">
                Email
              </label>
              <div className={styles.inputWrapper}>
                <input
                  className={`${styles.formInput} ${formik.touched.email && formik.errors.email ? styles.errorInput : ""}`}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
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
                  className={`${styles.formInput} ${styles.passwordInput} ${formik.touched.password && formik.errors.password ? styles.errorInput : ""}`}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className={styles.errorText}>
                  ⚠ {formik.errors.password}
                </div>
              ) : null}
            </div>

            <div className={styles.optionsRow}>
              <label className={styles.rememberLabel}>
                <input
                  type="checkbox"
                  name="remember"
                  className={styles.rememberCheckbox}
                  onChange={formik.handleChange}
                  checked={formik.values.remember}
                />
                Remember me
              </label>
              <a href="#" className={styles.forgotLink}>
                Forget password?
              </a>
            </div>

            <button className={styles.submitBtn} type="submit">
              Log in
            </button>

            <p className={styles.signupLinkText}>
              Don't have an account?{" "}
              <a href="/register" className={styles.signupLinkAnchor}>
                Signup
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
              Login with Google
            </button>

            <button type="button" className={styles.socialBtn}>
              <img
                src="https://www.svgrepo.com/show/448224/facebook.svg"
                alt="Facebook"
                className={styles.socialIcon}
              />
              Login with Facebook
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
