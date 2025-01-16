import React, { useState } from 'react';
import { auth } from '../firebase'; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styles from "../Styles/Home.module.css";

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [createAcc, setCreateAcc] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login Successful!');
    } catch (error) {
      alert('Error logging in: ' + error.message);
    }
  };

  const handleSignUp = async () => {
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created successfully!');
      setCreateAcc(false); // Close modal after success
      navigate('/User'); // Redirect to /User
    } catch (error) {
      alert('Error creating account: ' + error.message);
    }
  };

  const handleResetPassword = async () => {
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent!');
    } catch (error) {
      alert('Error sending reset email: ' + error.message);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.loginWrapper}>
          <form>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </form>
          <button onClick={handleLogin}>Login</button>
          <button onClick={() => setCreateAcc(true)}>Create Account</button>
          <button onClick={handleResetPassword}>Forget Password?</button>
        </div>
      </div>
      {createAcc && (
        <div className={styles.AccCreateModal}>
          <div className={styles.modalForm}>
            <form>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <label>
                Confirm Password:
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </label>
            </form>
            <button onClick={handleSignUp}>Submit</button>
            <button onClick={() => setCreateAcc(false)}>Close Modal</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
