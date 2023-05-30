import React from "react";

const Card = ({ repo }) => {
  const url = repo.homepage;
  console.log(url);
  return (
    <div className="group relative border border-slate-500 rounded-xl p-6 max-w-[382px] min-h-60 md:h-52 flex flex-col justify-between transition-all duration-300 hover:border-slate-100 hover:cursor-pointer">
      <div className="absolute -top-2 -right-4 flex items-center justify-center w-8 h-8 rounded-full bg-white translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="none"
          className="w-6 h-6 stroke-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
      </div>

      <div className="flex items-center gap-x-4 ">
        <img
          className="w-10 h-10 rounded-full"
          src="https://picsum.photos/200/300"
          alt="img"
        />
        <div>
          <p className="text-white font-bold text-lg">{repo.name}</p>
          <p className="text-gray-500 text-sm">
            {url !== null ? url : "coming soon"}
          </p>
        </div>
      </div>
      <p className="text-gray-500 text-sm line-clamp-3">{repo.description}</p>
      <p className="text-gray-500 text-sm">Updated 52 days ago</p>
    </div>
  );
};

export default Card;
