import Link from "next/link";
import React from "react";
import styles from "@/app/styles/login-signup.module.css"

const SignUp = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Signup</h1>
      <form action="" className={styles.form}>
        <input required type="text" placeholder="username" name="name" />
        <input required type="email" placeholder="email" name="email" />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
        />
        <button className={styles.button}>Signup</button>

        <span className={styles.error}>Error!</span>

        <span>
          Already have an Account? <Link href={"/login"}>Login now</Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
