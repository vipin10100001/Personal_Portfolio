import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects

        Check on my Github for more projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/crypto.png" alt="Crypto-Currency Finance Tracker" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Crypto-Currency Finance Tracker</div>
            <p className="text-white text-base">A Website that displays live crypto currency details using React.Js and implementation of CoinGecko API</p>
           
          </div>
        </div>
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/ministudymate.png" alt="MiniStudyMate" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">MiniStudyMate</div>
            <p className="text-white text-base">Web based Study Material Retrieval System • React, JavaScript, npm, SerpAPI, Firebase</p>
            
          </div>
        </div>
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/expense.png" alt="Expense Tracker" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Expense Tracker</div>
            <p className="text-white text-base">A react-Web App that allows user to Track Expenses.</p>
          
          </div>
        </div>
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/spotify.png" alt="Spotify-Artist-searcher" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Spotify-Artist-searcher</div>
            <p className="text-white text-base">A React based Web App that displays Artist details using Spotify API</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
