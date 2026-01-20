import Image, { ImageProps } from 'next/image';
import { Button, Chip, ChipGroup, ChipLabel, Link } from '@/lib/ui';
import NextLink from 'next/link';

export type ProjectPreviewProps = {
  url: string;
  title: string;
  excerpt: string;
  coverImage?: ImageProps['src'];
  stack?: string[];
};

export function ProjectPreview({
  url,
  title,
  excerpt,
  coverImage,
  stack,
}: ProjectPreviewProps) {
  return (
    <NextLink
      href={url}
      className="group basis-1/2 rounded-xl border border-base-border"
    >
      {coverImage && (
        <div className="bg-neutral-300 relative rounded-t-[inherit] pt-[56.4706%]">
          <Image
            className="absolute inset-0 rounded-[inherit] object-cover grayscale transition-all group-hover:grayscale-0"
            src={coverImage}
            sizes="31.25rem"
            quality={80}
            fill
            alt={`Cover image of ${title}`}
          />
        </div>
      )}

      <div className="flex flex-col gap-2 p-5">
        <div className="mb-3 text-lg font-bold">{title}</div>
        <p className="text-base-text-weak">{excerpt}</p>
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
