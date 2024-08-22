import { Divider, Socials } from "../components";

function LandingPage() {
  return (
    <div id="landing" className="container row">
      <section id="info">
        <h1 id="my-name">
          <span id="steven">(steven)</span> Cody Thaller
        </h1>
        <p>
          Software Engineer <Divider /> Teacher <Divider /> Nerd
        </p>
        <p>Currently seeking opportunities as a full stack engineer.</p>
      </section>
      <Socials />
    </div>
  );
}

export default LandingPage;
