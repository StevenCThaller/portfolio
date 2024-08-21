import React from "react";

export type SocialIconProps = {
  url: string;
  src: string;
  alt: string;
};

function SocialIcon({ url, src, alt }: SocialIconProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} />
    </a>
  );
}

export default SocialIcon;
