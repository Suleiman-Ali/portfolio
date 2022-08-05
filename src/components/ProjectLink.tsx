import { ReactNode } from 'react';

interface ProjectLinkProps {
  href: string;
  children: ReactNode;
}

function ProjectLink({ children, href }: ProjectLinkProps): JSX.Element {
  return (
    <a
      href={href}
      target="_blank"
      className="projects__projectLink"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default ProjectLink;
