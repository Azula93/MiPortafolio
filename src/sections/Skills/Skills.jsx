import styles from './SkillsStyles.module.css';
import checkmarkIconDark from '../../assets/rosette-discount-check-fill.svg';
import checkmarkIconLigth from '../../assets/rosette-discount-check-white.svg';
import { useTheme } from "../../common/ThemeContext";

import SkillList from '../../common/SkillList';

function Skills() {

  const { theme, toggleTheme } = useTheme();
  const checkmarkIcon = theme === "light" ?  checkmarkIconDark : checkmarkIconLigth;

  return (
    <section id='skills' className={styles.container}>
      <hr  className={styles.separator}/>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
          <SkillList src={checkmarkIcon} skill="JavaScript (ES6+)"/>
          <SkillList src={checkmarkIcon} skill="PHP"/>
          <SkillList src={checkmarkIcon} skill="SQL (MySQL)"/>
          <SkillList src={checkmarkIcon} skill="HTML5 / CSS3"/>
        </div>

        <hr />

        <div className={styles.skillList}>
          <SkillList src={checkmarkIcon} skill="Angular"/>
          <SkillList src={checkmarkIcon} skill="Laravel"/>
          <SkillList src={checkmarkIcon} skill="React"/>
          <SkillList src={checkmarkIcon} skill="Bootstrap"/>
        </div>

        <hr />

        <div className={styles.skillList}>
          <SkillList src={checkmarkIcon} skill="Web Security (API Masking)"/>
          <SkillList src={checkmarkIcon} skill="VPS Hardening & Linux"/>
          <SkillList src={checkmarkIcon} skill="Git & GitHub"/>
          <SkillList src={checkmarkIcon} skill="RESTful API Design"/>
        </div>

    </section>
  )
}

export default Skills