import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/crypto.png"
          title="Crypto-Currency Finance Tracker"
          description="A Website that displays live crypto currency details using React.Js and implementation of CoinGecko API"
        />
        <ProjectCard
          src="/ministudymate.png"
          title="MiniStudyMate"
          description=" Web based Study Material Retrieval System • React, JavaScript, npm, SerpAPI, Firebase"          
        />
        <ProjectCard
          src="/expense.png"
          title="Expense Tracker"
          description="A react-Web App that allows user to Track Expenses."
        />
         <ProjectCard
          src="/spotify.png"
          title="Spotify-Artist-searcher"
          description="A React based Web App that displays Artist details using Spotify API"
        />
        <ProjectCard
          src="/pokedex.png"
          title="Pokedex"
          description="A React based Web App that displays Pokemon details using PokeAPI"
        />
      </div>
    </div>
  );
};

export default Projects;
