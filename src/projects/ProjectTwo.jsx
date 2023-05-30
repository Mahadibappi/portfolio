import React from "react";

const ProjectTwo = () => {
  return (
    <div
      className="text-lg text-center "
      style={{
        backgroundImage: `url(${"../assets/project-02.png"})`,
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
          href="https://inventory-client-flame.vercel.app/dashboard"
          rel="noreferrer"
        >
          Project Url
        </a>
      </button>
    </div>
  );
};

export default ProjectTwo;
