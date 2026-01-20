import {
  PageHeading,
  ProjectList,
  ProjectPreview,
  Section,
} from '@/components';

import { getProjects } from '@/content';
import { getMetadata } from '@/metadata';
import { to } from '@/routing';

export const metadata = getMetadata({
  title: 'Projects',
  description: "A list of side-projects I've worked on.",
});

export default function Projects() {
  const projects = getProjects();

  return (
    <>
      <Section className="flex gap-4 pb-3 pt-9 sm:pb-5">
        <PageHeading>Projects</PageHeading>
      </Section>

      <Section>
        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-1 sm:gap-8">
          {projects.map(project => (
            <ProjectList
              key={project.slug}
              url={to.project(project.slug)}
              title={project.title}
              excerpt={project.excerpt}
              coverImage={project.cover}
              stack={project.stack}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
