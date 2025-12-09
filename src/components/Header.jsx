import logoImage from '../assets/logo.png';
import profileImage from '../assets/profile.png';
import styles from './Header.module.css';


function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logoImage} alt="" />
      <span>자유게시판</span>
      <span>중고마켓</span>
      <img className={styles.profile} src={profileImage} alt="" />
    </div>
  );


}

export default Header;