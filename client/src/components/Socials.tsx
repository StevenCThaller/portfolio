import SocialIcon from "./SocialIcon";
import githubLogo from "../assets/github.jpg";
import linkedinLogo from "../assets/linkedin.jpg";

function Socials() {
  return (
    <div id="socials">
      <SocialIcon
        url="https://linkedin.com/in/steven-thaller"
        src={linkedinLogo}
        alt="LinkedIn Logo"
        text="Linkedin"
      />
      <SocialIcon
        url="https://github.com/stevencthaller"
        src={githubLogo}
        alt="Github Logo"
        text="GitHub"
      />
    </div>
  );
}

export default Socials;
