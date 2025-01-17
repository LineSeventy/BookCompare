import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { db } from '../firebase'; // Firestore import
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import styles from "../Styles/UserHome.module.css";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [newDescription, setNewDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          email: currentUser.email,
          displayName: currentUser.displayName || 'Anonymous',
          photoURL: currentUser.photoURL || null,
        });

        const fetchUserData = async () => {
          const userRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setUsername(data.username);
            setDescription(data.description || '');
          } else {
            console.log("No such document!");
          }
        };

        fetchUserData();
      } else {
        setUser(null);
        setUsername('');
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  const handleSaveDescription = async () => {
    if (!user) return;

    try {
      const userRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(userRef, { description: newDescription }, { merge: true });
      setDescription(newDescription);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating description:", error);
    }
  };

  if (!user) return null;

  return (
    <div className={`${styles.profileContainer} ${editMode ? styles.editMode : ''}`}>
      <h1 className={styles.welcomeMessage}>Welcome, {username || user.displayName}!</h1>
      <p className={styles.email}><strong>Email:</strong> {user.email}</p>
      {user.photoURL && <img className={styles.avatar} src={user.photoURL} alt="User Avatar" />}
      <p className={styles.description}>
        <strong>About Myself:</strong> {description || "No description set."}
      </p>

      {editMode ? (
        <div className={styles.editModeControls}>
          <textarea
            className={styles.textarea}
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Enter your description"
          />
          <button className={styles.saveButton} onClick={handleSaveDescription}>Save</button>
          <button className={styles.cancelButton} onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      ) : (
        <button className={styles.editButton} onClick={() => setEditMode(true)}>Edit Description</button>
      )}

      <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserProfile;
