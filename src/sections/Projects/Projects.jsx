import React from "react";
import fitdataImg from "../../assets/fitdataImg.webp";
import aluraImg from "../../assets/Muñeco.png";
import kodiquettImg from "../../assets/logoKodiquett.png";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={fitdataImg}
          link={"https://www.fitdata.online/"}
          title="Fit Data"
          paragraph=" track your fitness progress."
        />

          <ProjectCard
          src={kodiquettImg}
          link={"https://kodiquett.com"}
          title="Kodiquett"
          paragraph="The digital solution you need."
        />

        <ProjectCard
          src={aluraImg}
          link={"https://github.com/Azula93/Challenge-Alura"}
          title="Alura Challenge"
          paragraph="Encryption and decryption system."
        />

      

        {/* <ProjectCard
          src={ReactCard}
          link={"github.com/Azula93/interactive-rating-component-main"}
          title="Interactive Rating Component"
          paragraph="A rating component that allows users to rate their experience with a product or service."
        /> */}
      </div>
    </section>
  );
}

export default Projects;
