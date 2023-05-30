import React from "react";

const ProjectSix = () => {
  return (
    <div
      className="text-lg text-center "
      style={{
        backgroundImage: `url(${"../assets/project-06.png"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "400px",
        width: "400px",
      }}
    >
      <div className="mb-40"></div>

      <button class="bg-red hover:bg-rose-500 text-white font-semibold py-2 px-4 border border-red rounded">
        <a
          target="_blank"
          href="https://react-expense-tracker-opal.vercel.app/"
          rel="noreferrer"
        >
          Project Url
        </a>
      </button>
    </div>
  );
};

export default ProjectSix;
