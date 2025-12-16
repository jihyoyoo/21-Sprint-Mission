import logoImage from '../assets/logo.png';
import profileImage from '../assets/profile.png';
import styles from './Header.module.css';


function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <img className={styles.logo} src={logoImage} alt="" />
        <div className={styles.textBox}>
          <span className={styles.text}>자유게시판</span>
          <span className={styles.text}>중고마켓</span>
        </div>

      </div>
   
      <img className={styles.profile} src={profileImage} alt="" />
    </div>
  );


}

export default Header;