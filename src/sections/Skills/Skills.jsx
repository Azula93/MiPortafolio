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
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkmarkIcon} skill= "HTML"/>
            <SkillList src={checkmarkIcon} skill= "CSS"/>
            <SkillList src={checkmarkIcon} skill= "Javascript"/>
            <SkillList src={checkmarkIcon} skill= "Node"/>
        </div>

        <hr />

        <div className={styles.skillList}>
            <SkillList src={checkmarkIcon} skill= "React"/>
            <SkillList src={checkmarkIcon} skill= "Bootstrap"/>
            <SkillList src={checkmarkIcon} skill= "Git"/>
            <SkillList src={checkmarkIcon} skill= "SQL"/>

            
        </div>
    </section>
  )
}

export default Skills