import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface SocialMediaLinkProps {
  href: string;
  iconSrc: string | StaticImageData;
  alt?: string;
  className?: string;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  href,
  iconSrc,
  alt = 'Social Media Icon',
  className = 'w-12 h-12 xl:w-14 xl:h-14',
}) => {
  return (
    <Link href={href} target="_blank" passHref>
      <div
        className={`rounded-xl p-3 group hover:bg-muted hover:brightness-125 scale-75 ease-in-out duration-500 ${className}`}
      >
        <Image
          src={iconSrc}
          alt={alt}
          placeholder="empty"
          quality={100}
          priority
          className="group-hover:scale-110 group-hover:mix-blend-color-dodge transition-all duration-300 ease-in-out"
        />
      </div>
    </Link>
  );
};

export default SocialMediaLink;
