import NextLink from 'next/link';

import {
  PageHeading,
  ProjectGrid,
  ProjectPreview,
  Property,
  PropertyLabel,
  PropertyValue,
  Section,
  SectionHeading,
  WorkExperienceJob,
} from '@/components';
import {
  DESCRIPTION,
  EMAIL,
  EXPERIENCE_YEARS,
  GITHUB_URL,
  GITHUB_USERNAME,
  INTERESTS,
  RESUME,
  STACK,
  TELEGRAM_URL,
  TELEGRAM_USERNAME,
  TIME_ZONE,
  WORK_EXPERIENCE,
} from '@/config';
import { getPinnedProjects } from '@/content';
import { getMetadata } from '@/metadata';
import { Button, Chip, ChipGroup, ChipLabel, Link, tclsx } from '@/lib/ui';
import { to } from '@/routing';
import { DetailsGroup, DetailsGroupTitle, FlipTiltImage } from './_components';
import css from './page.module.css';

const PROJECTS_PREVIEWS_COUNT = 2;

export const metadata = getMetadata({
  title: 'About',
  description: DESCRIPTION,
});

export default function AboutMe() {
  const projects = getPinnedProjects({ limit: PROJECTS_PREVIEWS_COUNT });

  return (
    <>
      <Section className="gap-4 pb-3 pt-9 sm:pb-5">
        <PageHeading>About Me</PageHeading>
      </Section>

      <Section className="gap-4">
        <div className={tclsx(css.profileGrid, 'gap-8 md:gap-y-6 lg:gap-x-10')}>
          <div className={tclsx(css.profileGridTitle, 'text-3xl lg:text-4xl')}>
            I ❤️ to build things
          </div>
          <FlipTiltImage />

          <p
            className={tclsx(
              css.profileGridDescription,
              'text-base text-base-text-weak sm:text-lg',
            )}
          >
            I am a proficient full-stack web developer specializing in
            blockchain and artificial intelligence (AI) with {EXPERIENCE_YEARS}{' '}
            years of experience. I excel in crafting secure, scalable web
            applications that leverage blockchain for decentralized solutions. I
            integrate AI technologies for advanced analytics and machine
            learning, enhancing user interaction and operational efficiency. My
            passion lies in delivering innovative, cutting-edge solutions that
            drive technological advancement and business success.
          </p>
        </div>
        <div>
          {' '}

        </div>
      </Section>

      <Section className="gap-9">
        <SectionHeading>Details</SectionHeading>

        <div className="flex flex-col flex-wrap gap-7 min-[794px]:flex-row min-[794px]:gap-11">
          <div className="flex flex-1 flex-col gap-7 min-[794px]:max-w-[21.5rem]">
            <div className="flex w-full shrink-0 flex-col gap-5 rounded-xl border border-base-border p-5 sm:gap-6 sm:p-6">
              <Property>
                <PropertyLabel>Experience</PropertyLabel>
                <PropertyValue>{EXPERIENCE_YEARS} years</PropertyValue>
              </Property>

              <Property>
                <PropertyLabel>Time zone</PropertyLabel>
                <PropertyValue>{TIME_ZONE}</PropertyValue>
              </Property>

              <Property>
                <PropertyLabel>Email</PropertyLabel>
                <PropertyValue
                  as={Link}
                  href={`mailto:${EMAIL}`}
                  variant="underline"
                >
                  {EMAIL}
                </PropertyValue>
              </Property>

              <Property>
                <PropertyLabel>GitHub</PropertyLabel>
                <PropertyValue
                  as={Link}
                  href={GITHUB_URL}
                  target="_blank"
                  variant="underline"
                >
                  {GITHUB_USERNAME}
                </PropertyValue>
              </Property>

              <Property>
                <PropertyLabel>Telegram</PropertyLabel>
                <PropertyValue
                  as={Link}
                  href={TELEGRAM_URL}
                  target="_blank"
                  variant="underline"
                >
                  {TELEGRAM_USERNAME}
                </PropertyValue>
              </Property>
            </div>

            <DetailsGroup>
              <DetailsGroupTitle>Stack</DetailsGroupTitle>
              <ChipGroup>
                {STACK.map(item => (
                  <Chip key={item}>
                    <ChipLabel>{item}</ChipLabel>
                  </Chip>
                ))}
              </ChipGroup>
            </DetailsGroup>

            <DetailsGroup>
              <DetailsGroupTitle>Interests</DetailsGroupTitle>
              <ChipGroup>
                {INTERESTS.map(item => (
                  <Chip key={item}>
                    <ChipLabel>{item}</ChipLabel>
                  </Chip>
                ))}
              </ChipGroup>
            </DetailsGroup>
          </div>

          <div className="flex-1 min-[794px]:min-w-[23.75rem]">
            <DetailsGroup>
              <DetailsGroupTitle>Experience</DetailsGroupTitle>

              <div className="flex flex-col gap-6">
                {WORK_EXPERIENCE.map(job => (
                  <WorkExperienceJob
                    key={job.company}
                    company={job.company}
                    companyImage={job.image}
                    position={job.position}
                    startDate={job.startDate}
                    endDate={job.endDate}
                    description={job.description}
                  />
                ))}
              </div>
            </DetailsGroup>
          </div>
        </div>
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
    </>
  );
}
