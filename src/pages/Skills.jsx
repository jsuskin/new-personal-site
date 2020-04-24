import React from "react";

export default function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Node",
    "Express",
    "Ruby",
    "Ruby on Rails",
    "MySQL",
    "SQLite",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "HTML",
    "CSS",
    "CLI",
    "Jest",
  ];

  return (
    <div>
      <h1 className='page-header'>Skills</h1>
      <hr />
      <div className='skills-container'>
        <ul className='skills-list'>
          {skills.map((skill, idx) => (
            <li key={idx} className='skill'>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
