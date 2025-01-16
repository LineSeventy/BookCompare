import React, { useState } from 'react';
import { auth } from '../firebase'; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styles from "../Styles/Login.module.css";
import { doc, setDoc } from 'firebase/firestore'; 
import { db } from '../firebase';
function Home() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState(''); // Added state for username
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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  

      await setDoc(doc(db, "users", user.uid), {
        username: username, 
        email: email,
        createdAt: new Date(),
      });
  
      alert('Account created successfully!');
      setCreateAcc(false);
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.loginWrapper}>
          <form onSubmit={handleFormSubmit}>
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
            <form onSubmit={handleFormSubmit}>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
