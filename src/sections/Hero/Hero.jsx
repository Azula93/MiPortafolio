import styles from "./HeroStyles.module.css";
import heroImage from "../../assets/profile-picture-2.jpeg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubIconLigth from "../../assets/github-light.svg";
import linkedinIconLigth from "../../assets/linkedin-light.svg";
import githubIconDark from "../../assets/github-dark.svg";
import linkedinIconDark from "../../assets/linkedin-dark.svg";
import cv from "../../assets/SilviaRiquett.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  // Cambia los iconos según el tema actual (light o dark)
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubIconLigth : githubIconDark;
  const linkedinIcon = theme === "light" ? linkedinIconLigth : linkedinIconDark;
  

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImage} alt="profile picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          onClick={toggleTheme}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Silvia <br /> Riquett
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://github.com/Azula93" target="blank">
            <img src={githubIcon} alt="github icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/patricia-riquett/"
            target="blank"
          >
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        I transform ideas 🧠 into impactful digital experiences by combining creativity and performance 🚀 to take each project to the next level 🔝.
        </p>
        <a href={cv} target="blank" download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
