import React from "react";

function ProjectCard({src, link, title, paragraph}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <img className="hover" src={src} alt={`${title} logo`} />
      <h3> {title} </h3>
      <p> {paragraph} </p>
    </a>
  );
}

export default ProjectCard;
