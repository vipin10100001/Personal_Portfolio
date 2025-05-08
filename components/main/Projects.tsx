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
          <img className="w-full" src="/npm.png" alt="Crypto-Currency Finance Tracker" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Income-Tax-Amount-Deduction-India--NPM-package</div>
            <p className="text-white text-base">NPM package-Income tax amount Deduction FY 2024-25 slab as a package published in npmjs.com which 200+ downloads.</p>
           
          </div>
        </div>
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/text.png" alt="MiniStudyMate" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Real-Time Text Analysis and String Replacement</div>
            <p className="text-white text-base"> React-based web application that allows users to type text into a textarea and get real-time statistics, including the count of unique words, the number of characters (excluding spaces and punctuation), and the ability to dynamically replace text strings.</p>
            
          </div>
        </div>
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/pokedex.png" alt="Expense Tracker" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Pokedex</div>
            <p className="text-white text-base">A state-of-the-art Pokedex application that allows users to retrieve, search, and dissect different Pokemon by their statistics. Integrate the application with the Pokemon API to gather necessary data.</p>
          
          </div>
        </div>
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <img className="w-full" src="/mini.png" alt="Weather App" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">MiniStudyMate</div>
            <p className="text-white text-base"> A React-based web application that provides a platform for students to create and manage study groups. Users can create study groups, invite friends, and share resources.</p>
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
