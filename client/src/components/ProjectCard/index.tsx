import SkillBullet from "../SkillBullet";

type ProjectCardProps = {
  title: string;
  subTitle: string;
  description: string;
  imgUrl: string;
  repoUrl: string;
  skills: string[];
  isFocus: boolean;
  onClick: (title: string) => void;
};

function ProjectCard({
  title,
  subTitle,
  description,
  isFocus,
  repoUrl,
  onClick,
  imgUrl,
  skills,
}: ProjectCardProps) {
  const handleSelectProject = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClick(title);
  };

  return (
    <div
      className={`project-card${isFocus ? " focused" : ""}`}
      onClick={handleSelectProject}
    >
      <img src={imgUrl} alt={title} />
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
      {isFocus && <p className="project-description">{description}</p>}
      <div className="project-skill-list">
        {skills.map((skill: string, i: number) => (
          <SkillBullet key={`${title}_skill_${i}`} skill={skill} />
        ))}
      </div>

      {isFocus && (
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
