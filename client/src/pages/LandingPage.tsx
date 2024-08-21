import { Divider, Socials } from "../components";

function LandingPage() {
  return (
    <div id="landing" className="container row">
      <section id="info">
        <h1 id="my-name">
          <span id="steven">(steven)</span> Cody Thaller
        </h1>
        <p>
          Software Engineer <Divider /> Instructor <Divider /> Nerd
        </p>
      </section>
      <Socials />
    </div>
  );
}

export default LandingPage;
