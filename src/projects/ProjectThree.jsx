import React from "react";

const ProjectThree = () => {
  return (
    <div
      className="text-lg text-center "
      style={{
        backgroundImage: `url(${"../assets/project-03.png"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "400px",
        width: "400px",
      }}
    >
      <div className="mb-40"></div>

      <button class="bg-red hover:bg-rose-500 text-green-500 font-bold py-2 px-4 border border-red rounded">
        <a
          target="_blank"
          href="https://pinvent-app.vercel.app/"
          rel="noreferrer"
        >
          Project Url
        </a>
      </button>
    </div>
  );
};

export default ProjectThree;
