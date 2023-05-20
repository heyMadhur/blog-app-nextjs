import React from "react";
import Link from "next/link";
import styles from "@/app/styles/login-signup.module.css"

const Login = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Login</h1>
      <form action="" className={styles.form} >
        <input required type="text" placeholder="username" name="name" />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
        />
        <button className={styles.button}>Login</button>

        <span className={styles.error}>Error!</span>

        <span>
          Don&lsquo;t have an Account yet?{" "}
          <Link href={"/signup"}>SignUp now</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
