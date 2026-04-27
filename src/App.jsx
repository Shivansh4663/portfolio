import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function App() {

  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="bg-slate-900 text-white">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <motion.h1 
          initial={{opacity:0, y:-50}} 
          animate={{opacity:1, y:0}}
          className="text-5xl font-bold">
          Hi, I'm <span className="text-sky-400">Shivansh Chaudhary</span>
        </motion.h1>

        <p className="mt-4 text-lg">Cloud & Web Developer</p>

        <div className="flex gap-4 mt-6">
          <a href="#" className="bg-sky-400 text-black px-4 py-2 rounded">Resume</a>
          <a href="#projects" className="border px-4 py-2 rounded">Projects</a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="p-10 max-w-4xl mx-auto">
        <h2 className="text-3xl mb-4">About Me</h2>
        <p>
          I am a B.Tech CSE student passionate about cloud computing,
          web development, and building scalable applications.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="p-10 bg-slate-800">
        <h2 className="text-3xl mb-6">Projects</h2>

        {/* DualCodeX */}
        <div 
          className="bg-slate-700 p-5 rounded mb-4 cursor-pointer hover:scale-105 transition"
          onClick={() => toggle(1)}
        >
          <h3 className="text-xl font-semibold">🔹 DualCodeX</h3>

          {open === 1 && (
            <p className="mt-3 text-gray-300">
              DualCodeX is a real-time collaborative coding platform where multiple users can write 
              and edit code together simultaneously. It features live synchronization, enabling 
              seamless teamwork, coding interviews, and peer learning. The platform improves developer 
              productivity by allowing real-time interaction and instant updates.
            </p>
          )}
        </div>

        {/* Stock Project */}
        <div 
          className="bg-slate-700 p-5 rounded cursor-pointer hover:scale-105 transition"
          onClick={() => toggle(2)}
        >
          <h3 className="text-xl font-semibold">
            🔹 Stock Price Prediction Dashboard
          </h3>

          {open === 2 && (
            <p className="mt-3 text-gray-300">
              This project is a machine learning-based dashboard designed to predict stock prices 
              using historical data. Built with React, it visualizes trends and future predictions 
              through interactive charts. It helps users understand market behavior and supports 
              better decision-making using data-driven insights.
            </p>
          )}
        </div>
      </section>

      {/* SKILLS */}
      <section className="p-10">
        <h2 className="text-3xl mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["HTML","CSS","JavaScript","React","AWS","SQL"].map(skill => (
            <span key={skill} className="bg-slate-700 px-3 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section className="p-10 bg-slate-800">
        <h2 className="text-3xl mb-4">Blog</h2>

        <div className="bg-slate-700 p-5 rounded mb-4">
          <h3>Cloud Computing Basics</h3>
          <p>Understanding AWS fundamentals and cloud architecture.</p>
        </div>

        <div className="bg-slate-700 p-5 rounded">
          <h3>Frontend vs Backend</h3>
          <p>Complete beginner guide to web development roles.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="p-10">
        <h2 className="text-3xl mb-4">Contact</h2>

        <form className="flex flex-col gap-3 max-w-md">
          <input className="p-2 rounded text-black" placeholder="Name"/>
          <input className="p-2 rounded text-black" placeholder="Email"/>
          <textarea className="p-2 rounded text-black" placeholder="Message"/>
          <button className="bg-sky-400 text-black p-2 rounded">
            Send
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-center p-5 bg-black">
        <div className="flex justify-center gap-4 mb-2">
          <FaGithub />
          <FaLinkedin />
        </div>
        © 2026 Shivansh
      </footer>

    </div>
  );
}