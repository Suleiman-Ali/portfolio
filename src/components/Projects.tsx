import { FaGithubAlt, FaLink } from 'react-icons/fa';
import { projects } from '../data/index';
import * as FontAwesome from 'react-icons/fa';
import React from 'react';
import { motion } from 'framer-motion';

function Projects(): JSX.Element {
  return (
    <div className="projects" id="projects">
      <motion.h2
        className="projects__heading"
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25 }}
        viewport={{ once: true }}
      >
        {'<Projects />'}
      </motion.h2>
      <div className="projects__box">
        {projects.map((project, index) => (
          <motion.a
            initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="projects__project"
            key={project.name}
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
          >
            <i className="projects__folderIcon">
              {/* @ts-ignore */}
              {React.createElement(FontAwesome[project.icon])}
            </i>

            <div className="projects__projectInnerBox">
              <p className="projects__projectName">{project.name}</p>
              <p className="projects__projectDescription">
                {project.description}
              </p>
              <div className="projects__projectTechs">
                {project.builtWith.map((tech) => (
                  <p className="projects__projectTech" key={tech}>
                    {tech}
                  </p>
                ))}
              </div>
              <div className="projects__projectLinks">
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="projects__projectLink"
                  rel="noreferrer"
                >
                  <FaGithubAlt />
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="projects__projectLink"
                  rel="noreferrer"
                >
                  <FaLink />
                </a>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
