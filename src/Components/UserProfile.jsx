import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged ,signOut} from 'firebase/auth';
import { db } from '../firebase'; // Firestore import
import { doc, getDoc } from 'firebase/firestore'; // Firestore methods
import { useNavigate } from 'react-router-dom';
import styles from "../Styles/UserHome.module.css";
function UserProfile() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          email: currentUser.email,
          displayName: currentUser.displayName || 'Anonymous',
          photoURL: currentUser.photoURL || null,
        });

        // Fetch the username from Firestore using the current user's uid
        const fetchUsername = async () => {
          const userRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
            setUsername(docSnap.data().username); // Store the username
          } else {
            console.log("No such document!");
          }
        };

        fetchUsername();
      } else {
        setUser(null);
        setUsername('');
        navigate('/'); // Redirect to login if not logged in
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  if (!user) return null;

  return (
    <div className={styles}>
      <h1>Welcome, {username || user.displayName}!</h1>
      <p><strong>Email:</strong> {user.email}</p>
      {user.photoURL && <img src={user.photoURL} alt="User Avatar" />}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserProfile;
