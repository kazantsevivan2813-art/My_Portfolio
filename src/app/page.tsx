import NextLink from 'next/link';
import * as R from 'remeda';

import { Button, Link } from '@/lib/ui';
import {
  PageHeading,
  ProjectGrid,
  ProjectPreview,
  Section,
  SectionHeading,
  WritingGroup,
  WritingGroupTitle,
  WritingList,
  WritingPreview,
} from '../components';
import { EMAIL, EXPERIENCE_YEARS, FULL_NAME, RESUME } from '../config';
import { getPinnedProjects, getPosts, groupPostsByYear } from '../content';
import { to } from '../routing';

const POSTS_PREVIEWS_COUNT = 3;
const PROJECTS_PREVIEWS_COUNT = 2;

export default function Home() {
  const postsByYear = R.pipe(
    getPosts({ limit: POSTS_PREVIEWS_COUNT }),
    groupPostsByYear,
    R.toPairs,
    R.sortBy([([year]) => Number.parseInt(year), 'desc']),
  );

  const projects = getPinnedProjects({ limit: PROJECTS_PREVIEWS_COUNT });

  return (
    <>
      <Section className="pb-3 pt-9 sm:pb-5">
        <PageHeading>{FULL_NAME}</PageHeading>
      </Section>

      <Section className="gap-7">
        <p className="text-base text-base-text-weak sm:text-lg">
          Hello! I am a dedicated Full-Stack Web Developer with a strong passion
          for AI and Blockchain technologies. With {EXPERIENCE_YEARS} years of
          programming experience, I specialize in crafting sophisticated web
          applications. I am deeply engaged in researching new technologies,
          continually advancing my skills to deliver innovative AI and
          blockchain applications that optimize user experiences and operational
          efficiency. I am available to commit over 40 hours per week and
          operate within the EST time zone, ensuring more than 6 to 8 hours of
          overlapping time each day.
        </p>

        <Button as={NextLink} href={to.aboutMe()}>
          About me
        </Button>
      </Section>

      <Section className="gap-9">
        <SectionHeading>Writing</SectionHeading>

        {postsByYear.map(([year, posts]) => (
          <WritingGroup key={year}>
            <WritingGroupTitle>{year}</WritingGroupTitle>

            <WritingList>
              {posts.map(post => (
                <WritingPreview
                  key={post.slug}
                  url={to.blogPost(post.slug)}
                  date={post.date}
                  title={post.title}
                />
              ))}
            </WritingList>
          </WritingGroup>
        ))}

        <Button as={NextLink} href={to.blog()} variant="outlined">
          Read all
        </Button>
      </Section>

      <Section className="gap-9">
        <SectionHeading>Projects</SectionHeading>

        <ProjectGrid>
          {projects.map(project => (
            <ProjectPreview
              key={project.slug}
              url={to.project(project.slug)}
              title={project.title}
              excerpt={project.excerpt}
              coverImage={project.cover}
            />
          ))}
        </ProjectGrid>

        <Button as={NextLink} href={to.projects()} variant="outlined">
          View all
        </Button>
      </Section>

      <Section className="gap-4">
        <SectionHeading>Connect</SectionHeading>

        <p className="text-base-text-weak">
          Email me at{' '}
          <Link href={`mailto:${EMAIL}`} variant="underline">
            {EMAIL}
          </Link>
        </p>
        <p className="text-base-text-weak">
          <Link href={`${RESUME}`} target="_blank" variant="underline">
            Download Resume
          </Link>
        </p>
      </Section>
    </>
  );
}
