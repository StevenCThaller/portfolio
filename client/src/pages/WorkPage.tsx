import { useState } from "react";
import { WorkExperience } from "../components";
import { WorkExperiencePropType } from "../components/WorkExperience";

/**
 * TODO: Implement back-end functionality so these jobs aren't
 * statically coded here.
 */
const initialJobs: WorkExperiencePropType[] = [
  {
    isFocused: true,
    company: "Actalent Services",
    startDate: "April",
    endDate: "July 2024",
    titles: [
      {
        title: "Software Development Engineer - Contract",
        description:
          "Conducted a thorough diagnostic analysis of a full stack application to identify performance bottlenecks. Focused on issues arising from excessive logic processing on the front end, which strained JavaScript's single-threaded execution. Engaged directly with the client and their engineering team to gain a deep understanding of the existing code base and architectural setup, and facilitated discussions to gather insights on application usage patterns and pain points.",
      },
    ],
    skills: [
      "TypeScript",
      "C#",
      "React",
      "HTML & CSS",
      ".NET Framework",
      "Entity Framework Core",
    ],
  },
  {
    isFocused: false,
    company: "Kenzie Academy",
    startDate: "2022",
    endDate: "2024",
    titles: [
      {
        title: "Senior Subject Matter Expert - Software Engineering",
        description:
          "Designed and implemented comprehensive curriculum for full stack MERN, integrating industry best practices and real-world scenarios to ensure relevant and up-to-date learning experiences. Led instructional sessions for full stack MERN, delivering engaging and interactive lessons while fostering a collaborative learning environment.",
      },
    ],
    skills: [
      "JavaScript",
      "HTML & CSS",
      "SCSS",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "MySQL",
    ],
  },
  {
    isFocused: false,
    company: "Coding Dojo",
    startDate: "2019",
    endDate: "2022",
    titles: [
      {
        title: "Lead Instructor - Full Stack Engineering",
        description:
          "Develop and deliver instructional content for multiple technology stacks in alignment with industry standards and ensuring learner outcomes. Mentor and support learners by leading daily data structure and algorithm sessions, providing personalized feedback, and encouraging problem-solving. Oversee training of associate instructors and teaching assistants to ensure instructional quality.",
      },
      {
        title: "Instructor - Full Stack Engineering",
        description:
          "Deliver instructional content for multiple technology stacks in alignment with industry standards and ensuring learner outcomes. Mentor and support learners by leading daily data structure and algorithm sessions, providing personalized feedback, and encouraging problem-solving.",
      },
      {
        title: "Teaching Assistant - Full Stack Engineering",
        description:
          "Assist instructors with the management and instruction of learners. Conduct code reviews with learners, and perform clerical duties such as taking attendance.",
      },
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "C#",
      "Python",
      "HTML & CSS",
      "jQuery",
      "Node.js",
      "Express.js",
      "ASP.NET MVC",
      "Django",
      "Flask",
      "MongoDB",
      "MySQL",
      "AWS",
    ],
  },
  {
    isFocused: false,
    company: "Freelance Web Developer",
    startDate: "March",
    endDate: "August 2019",
    titles: [
      {
        title: "Self Employed",
        description:
          "Developed an enterprise-level web application for managing and scheduling various stages of automobile repairs across different mechanics. Employed the MEAN stack to create a scalable, high-performance solution tailored to complex scheduling needs. Engaged with clients to understand their specific scheduling needs and incorporated feedback to refine features.",
      },
    ],
    skills: ["TypeScript", "Node.js", "Express.js", "Angular", "MongoDB"],
  },
];

function WorkPage() {
  const [jobs, setJobs] = useState(initialJobs);

  const handleToggleFocus = (company: string) =>
    setJobs(
      jobs.map((job) =>
        job.company === company
          ? { ...job, isFocused: job.isFocused ? false : true }
          : { ...job, isFocused: false }
      )
    );

  return (
    <main id="work" className="container">
      <h1 className="col-4 col-sm-12">Work Experience</h1>
      <ul className="col-7 col-sm-12" id="work-list">
        {jobs.map(
          ({
            company,
            isFocused,
            startDate,
            endDate,
            titles,
            skills,
          }: WorkExperiencePropType) => (
            <WorkExperience
              key={company}
              isFocused={isFocused}
              setFocus={() => handleToggleFocus(company)}
              company={company}
              startDate={startDate}
              endDate={endDate}
              titles={titles}
              skills={skills}
            />
          )
        )}
      </ul>
    </main>
  );
}

export default WorkPage;
