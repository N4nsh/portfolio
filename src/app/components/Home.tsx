import { Code, Zap, Database, Cpu, Hammer, PanelTopDashed, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Home() {
  const skills = [
    { icon: Code, name: "Luau/Lua Scripting", level: "Intermediate", color: "from-blue-400 to-blue-600" },
    { icon: Zap, name: "Game Mechanics", level: "Intermediate", color: "from-yellow-400 to-orange-500" },
    { icon: Database, name: "DataStore & Saving", level: "Intermediate", color: "from-green-400 to-emerald-600" },
    { icon: Cpu, name: "Performance Optimization", level: "Intermediate", color: "from-purple-400 to-purple-600" },
    { icon: Hammer, name: "Building", level: "Beginner", color: "from-pink-400 to-rose-600" },
    { icon: PanelTopDashed, name: "UI", level: "Beginner", color: "from-cyan-400 to-blue-600" },
  ];

  const pastGames = [
    {
      title: "Attempt on delivery",
      role: "Lead Scripter",
      description: "Developed most of them systems, inventory management, quest framework and more",
      image: "https://tr.rbxcdn.com/180DAY-ae38f1d88c41e8e66dc5b13e073df91e/768/432/Image/Webp/noFilter",
    },
    {
      title: "The Backrooms | ASYNC",
      role: "Scripter",
      description: "Implemented crafting system, data persistence, bug fixes and more",
      image: "https://tr.rbxcdn.com/180DAY-1d3c84d360a6bf4c6d2e1f60c54f5cb4/768/432/Image/Webp/noFilter",
    },
    {
      title: "The Voice",
      role: "Lead Scripter",
      description: "Created all existing systems, made and scripted most of the UIs",
      image: "https://tr.rbxcdn.com/180DAY-416f6f2c8bf545b0617847fb3250d7cb/768/432/Image/Webp/noFilter",
    },
    {
      title: "Yours",
      role: "?",
      description: "This could be yours.",
      image: "https://images.unsplash.com/photo-1706804653497-1b43f7cc68ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZ2FtZSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzI4MTc1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-block mb-6">
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-full px-6 py-2 shadow-lg transform hover:scale-105 transition-transform">
            <span className="text-white font-bold">✨ Available for Hire</span>
          </div>
        </div>
        <h1 className="text-6xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Roblox Scripter
          </span>
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Passionate game developer with 5+ years of experience creating engaging Roblox experiences. 
          I specialize in building robust game systems, optimizing performance, and bringing creative 
          visions to life through clean, efficient code.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-3">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-8">The tools I use to build amazing games</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:-rotate-1 border-4 border-transparent hover:border-blue-200"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 bg-gradient-to-br ${skill.color} rounded-xl shadow-md`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-1">{skill.name}</h3>
                  <span className={`text-sm font-semibold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                    {skill.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

       {/* Why Working With Me Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-3">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Why Working With Me
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-8">What makes collaboration smooth and effective</p>
        <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-purple-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200">
              <div className="p-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-md flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">Clean and Reusable Code</h3>
                <p className="text-gray-600 text-sm">Well-structured scripts that are easy to maintain and expand</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200">
              <div className="p-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl shadow-md flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">Fast and Dedicated Worker</h3>
                <p className="text-gray-600 text-sm">Committed to delivering quality results within deadlines</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl border-2 border-pink-200">
              <div className="p-3 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl shadow-md flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">Showcases of Progress</h3>
                <p className="text-gray-600 text-sm">Regular updates and demos to keep you informed every step</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Past Games Section */}
      <div>
        <h2 className="text-4xl font-bold text-center mb-3">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Games I've Worked On
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-8">Check out some of my favorite projects!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pastGames.map((game, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border-4 border-blue-100"
            >
              <div className="aspect-video overflow-hidden border-b-4 border-blue-200">
                <ImageWithFallback
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-800">{game.title}</h3>
                  <span className="text-sm font-bold text-white px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md">
                    {game.role}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center bg-white rounded-3xl p-12 shadow-xl border-4 border-blue-200">
        <h2 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Work Together
          </span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Looking for a dedicated scripter to bring your Roblox game to the next level? 
          I'm here to help turn your vision into reality.
        </p>
        <div className="flex gap-4 justify-center">
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
          <a
            href="/past-works"
            className="px-8 py-4 bg-gray-100 text-gray-700 rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
}