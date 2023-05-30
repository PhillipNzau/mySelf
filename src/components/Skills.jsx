import React from "react";

const Skills = ({ skill }) => {
  return (
    <div className="border py-2 px-4 w-52 text-center rounded-md border-slate-500 transition-all duration-300 hover:border-slate-100 hover:cursor-pointer">
      {skill.name}
    </div>
  );
};

export default Skills;
