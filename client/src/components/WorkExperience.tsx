import SkillBullet from "./SkillBullet";

export type JobTitle = {
  title: string;
  description: string;
};

export type WorkExperiencePropType = {
  isFocused: boolean;
  setFocus?: () => void;
  company: string;
  startDate: string;
  endDate: string;
  titles: JobTitle[];
  skills: string[];
};

function WorkExperience({
  isFocused,
  setFocus,
  company,
  startDate,
  endDate,
  titles,
  skills,
}: WorkExperiencePropType) {
  return (
    <li
      className={`work-experience${isFocused ? " expand-work" : ""}`}
      onClick={setFocus}
    >
      <h2 className="company">
        <span className="date-range">
          {startDate} - {endDate}
        </span>{" "}
        <span className="company-name">{company}</span>
      </h2>
      <div className="job-description">
        <div
          className={`expand-contract ${isFocused ? "expanded" : "contracted"}`}
        >
          {titles.map((job: JobTitle) => (
            <section key={`${company}_${job.title}`}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
            </section>
          ))}
          <ul className="work-skill-list">
            {skills.map((skill: string, i: number) => (
              <SkillBullet key={`${company}_skill_${i}`} skill={skill} />
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default WorkExperience;
