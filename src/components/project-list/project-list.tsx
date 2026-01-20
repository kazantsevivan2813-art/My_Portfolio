import Image, { ImageProps } from 'next/image';
import { Button, Chip, ChipGroup, ChipLabel, Link } from '@/lib/ui';
import NextLink from 'next/link';

export type ProjectListProps = {
  url: string;
  title: string;
  excerpt: string;
  coverImage: ImageProps['src'];
  stack?: string[];
};

export function ProjectList({
  url,
  title,
  excerpt,
  coverImage,
  stack,
}: ProjectListProps) {
  return (
    <NextLink
      href={url}
      className="group basis-1/2 rounded-xl border border-base-border"
    >
      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-center gap-4">
          <Image
            className=" h-32 w-40 rounded-full border border-base-border max-sm:hidden"
            src={coverImage}
            quality={80}
            width={1200}
            height={800}
            alt={`Cover image of ${title}`}
          />

          <div className="">
            <p className="mb-3 text-lg font-bold">{title}</p>
            <p className="text-base-text-weak">{excerpt}</p>
          </div>
        </div>
        {stack && stack.length > 0 && (
          <ChipGroup>
            {stack.map(item => (
              <Chip key={item}>
                <ChipLabel>{item}</ChipLabel>
              </Chip>
            ))}
          </ChipGroup>
        )}
      </div>
    </NextLink>
  );
}
