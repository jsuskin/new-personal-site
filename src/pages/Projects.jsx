import React from "react";
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';

export default function Projects() {
  return (
    <ul className='projects'>
      <h1 className="page-header">Projects</h1>
      <hr />
      {projects.map((project, idx) => {
        return <ProjectCard key={idx} project={project} idx={idx} />
      })}
    </ul>
  );
}
