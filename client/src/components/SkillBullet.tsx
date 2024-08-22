type SkillBulletProp = {
  skill: string;
};

function SkillBullet({ skill }: SkillBulletProp) {
  return <li className="skill-bullet">{skill}</li>;
}

export default SkillBullet;
