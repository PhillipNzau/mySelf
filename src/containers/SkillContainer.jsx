import React, { useEffect, useState } from "react";
import Skills from "../components/Skills";

const SkillContainer = () => {
  const mySkills = [
    { id: 1, name: "HTML5" },
    { id: 2, name: "Angular" },
    { id: 3, name: "TypeScript" },
    { id: 4, name: "Vite" },
    { id: 5, name: "React" },
    { id: 6, name: "CSS3" },
    { id: 7, name: "JavaScript" },
    { id: 8, name: "TailwindCss" },
    { id: 9, name: "Git / Github" },
    { id: 10, name: "Agile Development" },
    { id: 11, name: "Responsive design" },
  ];
  const [skills, setSkills] = useState(mySkills);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-center w-52 font-bold text-xl">My Skills</p>
      {skills.map((skill) => (
        <Skills key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

export default SkillContainer;
