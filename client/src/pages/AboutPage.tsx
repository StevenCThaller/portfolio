import codyPhoto from "../assets/cody.jpg";

function AboutPage() {
  return (
    <main id="about" className="container">
      <img id="thats-me" src={codyPhoto} alt="Cody himself" />
      <div className="content">
        <h1>About me</h1>
        <section>
          <h2>I'm Cody, and I've always been an engineer at heart.</h2>
          <p>
            It all started when a young Cody found himself sitting on the floor
            with a box of LEGO bricks and no instructions. The idea of putting
            things together to build something new has always been fascinating,
            and something that I would gravitate towards at every stage of life.
          </p>
          <p>
            In high school, I took to engineering like a moth to the flame. Not
            just building, but designing solutions to problems, both real and
            hypothetical, was exciting. Pair this with my lifetime love of
            computers, and software engineering was a match made in heaven.
          </p>
          <p>
            After receiving a bachelors degree in Computer Engineering, I dove
            head first into the world of web development. Nearly six years
            later, I've added a myriad of tools to my digital toolbelt (but I'll
            never put away the LEGO bricks).
          </p>
        </section>
        <h2>Technologies</h2>
        <div id="technologies-lists" className="row gap-1">
          <section className="col-4">
            <h3>Languages</h3>
            <p>JavaScript, TypeScript, C#, Python, HTML5, CSS</p>
          </section>
          <section className="col-4">
            <h3>Front-End</h3>
            <p>jQuery, React, Angular</p>
          </section>
          <section className="col-4">
            <h3>Back-End</h3>
            <p>Express, ASP.NET MVC, Django, Flask</p>
          </section>
          <section className="col-4">
            <h3>Database</h3>
            <p>MongoDB, MySQL, Postgres, SQLite</p>
          </section>
          <section className="col-4">
            <h3>Developer Operations</h3>
            <p>Amazon Web Services (AWS)</p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
