import React, { useState } from "react";
import ProjectDemo from "../components/ProjectDemo";
import { GoMarkGithub } from "react-icons/go";

export default function ProjectCard({ project, idx }) {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <li className='project-card' key={idx}>
      <h3>{project.name}</h3>
      <hr />
      {project.screenshot.length ? (
        <div className='project-screenshot'>
          <a href={project.url} target='_blank' rel='noreferrer noopener'>
            <img
              src={project.screenshot}
              alt={`${project.name} screenshot`}
              style={{ width: "66.6%", height: "auto" }}
            />
          </a>
        </div>
      ) : <></>}

      <p className='description'>{project.description}</p>
      {project.url.length ? (
        <p style={{ fontSize: "1.1em" }}>
          <a href={project.url} target='_blank' rel='noreferrer noopener'>
            {project.url}
          </a>
        </p>
      ) : null}
      {typeof project.github === "string" ? (
        <p>
          <a href={project.github} target='_blank' rel='noreferrer noopener'>
            {project.github}&nbsp;
            <GoMarkGithub style={{ margin: 0, padding: "0 2px" }} />
          </a>
        </p>
      ) : (
        <>
          <p>
            Frontend:&nbsp;
            <a
              href={project.github.frontend}
              target='_blank'
              rel='noreferrer noopener'
            >
              {project.github.frontend}&nbsp;
              <GoMarkGithub style={{ margin: 0, padding: "0 2px" }} />
            </a>
          </p>
          <p>
            Backend:&nbsp;
            <a
              href={project.github.backend}
              target='_blank'
              rel='noreferrer noopener'
            >
              {project.github.backend}&nbsp;
              <GoMarkGithub style={{ margin: 0, padding: "0 2px" }} />
            </a>
          </p>
        </>
      )}
      {project.demo ? (
        <ProjectDemo
          url={project.demo}
          demoOpen={demoOpen}
          setDemoOpen={setDemoOpen}
        />
      ) : null}
    </li>
  );
}
