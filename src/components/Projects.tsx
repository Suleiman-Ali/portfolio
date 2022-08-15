import ProjectLink from './ProjectLink';
import { FaGithubAlt, FaLink } from 'react-icons/fa';
import { createElement } from 'react';
import {
  animateProjects,
  builtWhileInViewAnimation,
  projects,
} from '../data/index';
import { m, LazyMotion, domAnimation } from 'framer-motion';

function Projects(): JSX.Element {
  return (
    <LazyMotion features={domAnimation}>
      <div className="projects" id="projects">
        <m.h2
          className="projects__heading"
          {...builtWhileInViewAnimation('y', 25, 0.25)}
        >
          {'<Projects />'}
        </m.h2>
        <div className="projects__box">
          {projects.map((project) => {
            const animation = animateProjects();
            return (
              <m.a
                initial={{
                  opacity: 0,
                  [animation.x_y]: [animation.start],
                }}
                whileInView={{ opacity: 1, [animation.x_y]: 0 }}
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
                  {createElement(project.icon)}
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
                    <ProjectLink href={project.githubLink}>
                      <FaGithubAlt />
                    </ProjectLink>
                    <ProjectLink href={project.liveLink}>
                      <FaLink />
                    </ProjectLink>
                  </div>
                </div>
              </m.a>
            );
          })}
        </div>
      </div>
    </LazyMotion>
  );
}

export default Projects;
