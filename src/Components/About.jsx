import React from 'react'
import  "../Styles/About.css";
import styles from "../Styles/About.module.css";
function About() {
  return (
    <>
    <div className={styles.container}>
    <div className={styles.card}>
    <h1>Title Name</h1>
    <p>Welcome to [Project Name]! This platform is designed to help users 
        easily compare prices for books across multiple online and offline
         retailers, ensuring they get the best deals</p>
         </div>
   
    <div  className={styles.others}>
      <div>
    <h2>Purpose</h2>
    <p>The purpose of this project is to simplify the process of 
        finding affordable books for students, avid readers, and researchers 
        by consolidating price information from various sources into one 
        convenient place.</p>
    </div> 
    <div>
    <h2>Inspiration</h2>
    <p>
    This project was inspired by the challenges students often face in finding 
    affordable books for their studies. By leveraging technology, 
    we aim to make this process more efficient and accessible.
    </p>
    </div>
    <div>
    <h2>Team Info</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Minus quaerat cum possimus molestias nobis doloribus provident
         veniam voluptas reprehenderit, saepe vero cumque iusto consequatur 
         laborum. Laboriosam officia autem modi iste.</p>
    </div>
    </div>
     </div>
    </>
  )
}

export default About