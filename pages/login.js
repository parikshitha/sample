// pages/login.js

import Head from 'next/head';
import styles from '../styles/login.module.css';

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
    // Add your authentication logic here
  };

  return (
    <div className={styles.loginContainer}>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.loginBox}>
        <h2 className={styles.loginTitle}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" className={styles.formControl} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className={styles.formControl} required />
          </div>
          <button type="submit" className={styles.loginButton}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
