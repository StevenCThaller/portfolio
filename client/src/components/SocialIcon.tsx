import { useState } from "react";

export type SocialIconProps = {
  url: string;
  src: string;
  alt: string;
  text: string;
};

function SocialIcon({ url, src, alt, text }: SocialIconProps) {
  const [hideText, setHideText] = useState(true);

  const handleMouseEnter = () => setHideText(false);

  const handleMouseLeave = () => setHideText(true);

  return (
    <a
      className="social-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="social-icon" src={src} alt={alt} />
      <span className={`social-text${hideText ? " hidden" : ""}`}>{text}</span>
    </a>
  );
}

export default SocialIcon;
