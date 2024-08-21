import SocialIcon from "./SocialIcon";

function Socials() {
  return (
    <div id="socials" className="container">
      <SocialIcon
        url="https://linkedin.com/in/steven-thaller"
        src="/linkedin.jpg"
        alt="LinkedIn Logo"
      />
      <SocialIcon
        url="https://github.com/stevencthaller"
        src="/github.jpg"
        alt="Github Logo"
      />
    </div>
  );
}

export default Socials;
