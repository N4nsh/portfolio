import { Play, Github, ExternalLink, BotIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PastWorks() {
  const projects = [
    {
      title: "Anticheat",
      type: "Personal Project",
      description: "A lightweight anti-cheat system designed to detect and prevent common exploits in Roblox games. Features server-side validation, suspicious behavior detection, and automatic flagging or kicking of players who attempt to manipulate gameplay.",
      images: [
        "/images/anticheat.png",
      ],
      video: "https://youtu.be/MlEpg21EYNM",
      tags: ["Security", "Validations", "Exploit Protection"],
      tagColor: "from-red-400 to-orange-500",
      url: "https://www.roblox.com/games/97934658067310/The-Voice"
    },
    {
      title: "Skid Game",
      type: "Personal Project",
      description: "Competitive survival minigame system inspired by Squid Game, featuring multiple elimination rounds, player tracking, and win-condition management. Includes round transitions, fairness checks, and dynamic player elimination until a single winner remains.",
      images: [
        "/images/skidgame.png",
      ],
      video: "https://youtu.be/CDg-GzLwCjg",
      tags: ["Survival", "Minigames", "Competitives"],
      tagColor: "from-purple-400 to-purple-600",
    },
    {
      title: "Clicker Simulator",
      type: "Commission",
      description: "Progression-based clicker simulator where players collect coins and open chests to earn currency. Features a rebirth system, collectible pets that boost earnings, and scalable upgrades that accelerate progression as players build their wealth.",
      images: [
        "/images/clicker.png",
      ],
      video: "https://youtu.be/Wr06wYovK1A",
      tags: ["Clicker", "Simulator", "Progression"],
      tagColor: "from-blue-400 to-cyan-500",
    },
    {
      title: "Economy & Shop System",
      type: "Personal Project",
      description: "Robust economy framework with currency management, shop interface, item inventory, and trading system. Includes server-side validation and anti-exploit measures.",
      images: [
        "/images/banking.png",
      ],
      video: "https://youtu.be/lJJ9FH56Gyc",
      tags: ["Economy", "DataStore", "Security"],
      tagColor: "from-green-400 to-emerald-600",
    },
    {
      title: "Backrooms Line",
      type: "Personal Project",
      description: "Endless queue survival game set in the eerie world inspired by the Backrooms, where players must patiently wait in line to reach the end. Skip ahead by paying to move past other players or test your patience and slowly progress through the line.",
      images: [
        "/images/backroomsline.png",
      ],
      video: "https://youtu.be/eMe-5alec4k",
      tags: ["Social", "Waiting", "Strategy"],
      tagColor: "from-yellow-400 to-orange-500",
    },
    {
      title: "Crafting System & more",
      type: "Commission",
      description: "Immersive backrooms experience inspired by the Backrooms, featuring a deep crafting system along with exploration, survival mechanics, and interactive gameplay systems. Discover resources, craft useful items, and navigate the eerie environment while creating your own story in the endless maze.",
      images: [
        "images/backrooms.png",
      ],
      video: "https://youtu.be/e45Tfpqjm10",
      tags: ["Roleplay", "Horror", "Exploration"],
      tagColor: "from-pink-400 to-rose-600",
      url: "https://www.roblox.com/games/10720776665/The-Backrooms-ASYNC"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Past Works & Projects
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A collection of games I've worked on and personal projects showcasing my scripting capabilities
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-4 border-blue-100 hover:border-blue-300"
          >
            <div className="grid md:grid-cols-2 gap-6 p-6">
              {/* Images/Video Section */}
              <div className="space-y-4">
                {project.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="rounded-2xl overflow-hidden shadow-lg border-4 border-blue-100"
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${project.title} screenshot ${imgIndex + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
                {project.video && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-full hover:shadow-lg transition-all text-white font-bold transform hover:scale-105"
                  >
                    <Play className="w-5 h-5" />
                    Watch Video Demo
                  </a>
                )}
              </div>

              {/* Info Section */}
              <div className="flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-2">{project.title}</h2>
                    <span className={`inline-block px-4 py-2 bg-gradient-to-r ${project.tagColor} text-white rounded-full font-bold shadow-md`}>
                      {project.type}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold border-2 border-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>


                {project.url && (
                <div className="mt-auto flex gap-3">
                   <a href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold hover:shadow-lg transition-all transform hover:scale-105"><ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center bg-white rounded-3xl p-12 shadow-xl border-4 border-blue-200">
        <h2 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Interested in Working Together?
          </span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
          I'm always open to new opportunities and exciting projects. Let's create something amazing!
        </p>
         <button
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold hover:shadow-lg transition-all transform hover:scale-105"
        >
          <span className="flex items-center gap-2">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            N4nsh
          </span>
        </button>
      </div>

       {/* More Content Available */}
      <div className="mt-12 text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 shadow-lg border-4 border-purple-200">
        <p className="text-xl text-gray-700 font-semibold">
          📷 I have more videos and photos available if you need more examples of my work!
        </p>
        <p className="text-gray-600 mt-2">
          Feel free to reach out and I'll be happy to share additional showcases
        </p>
      </div>
    </div>
  );
}