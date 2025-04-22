import React from "react";

import "./Project.scss";

import Button from "../Button/Button";

const projectData = {
  one: {
    name: "Thief Detector",
    imageUrl: "/images/Thief-Detector.png",
    externalLink: "https://thief-detector-aj.vercel.app/",
    content: [
      {
        header: "About the Project",
        paragraphs: [
         "A Thief Detector built using Next.js and TensorFlow—it detects humans in real-time and triggers an alarm 🚨🤖", "This is just V1.0, a working prototype to test the core functionality. There’s a long way to go and tons of potential to expand it further 🔧✨", "With better models, smarter alert systems, and real-world testing, future versions will be even more powerful. This is just the beginning of the journey 🚀🔍"
        ],
      },
    ],
  },
  two: {
    name: "AGNI URL",
    imageUrl: "/images/Agni-url.png",
    externalLink: "https://agniurl.vercel.app/",
    content: [
      {
        header: "About the Project",
        paragraphs: [
         "Ever clicked a link and wondered how many others did the same, or from where in the world?", "AGNI URL isn't just another shortener—it helps you track clicks, locations, device types, and much more. It's built for anyone curious about how their links perform.", "With real-time stats and clear insights, it’s easier than ever to understand your audience and improve your reach. Whether you’re a developer or just getting started, tools like AGNI can level up your workflow!", "You don’t need to be an expert to start using smart tools. Just take the first step, explore, and keep building! 💪"
        ],
      },
    ],
  },
  three: {
    name: "Lamborghini",
    imageUrl: "/images/Lamborghini.png",
    externalLink: "https://lamborghini-aj.vercel.app/",
    content: [
      {
        header: "About the Project",
        paragraphs: [ "Tried to create a 3D showcase experience for a Lamborghini using Three.js and WebGi 🚗💨", "The goal was to bring the car to life on the web with realistic lighting, smooth camera transitions, and an immersive environment—all powered by React Three Fiber and WebGi 🌐⚙️", "It’s an experimental attempt to explore product visualization and real-time 3D rendering in the browser. Still a work in progress, but already a ton of fun to build and iterate on 🚀🎨"
         ],
      },
      {
        header: "Tech Used",
        paragraphs: [" - three.js"," - WebGi"," - GSAP"," - Tweakpane"," - Parcel"," - Blender",],
      },
    ],
  },
  four: {
    name: "Gemini Clone",
    imageUrl: "/images/Gemini.png",
    externalLink: "https://gemini-aj.vercel.app/",
    content: [
      {
        header: "About the Project",
        paragraphs: [
          " - Created a fully functional Gemini Clone using the Gemini 2.0 Flash API 🚀",
          " - Enjoy real-time messaging with message storage and seamless conversation history 💬",
          " - Switch between light and dark themes for a personalized experience 🌙☀️",
          " - Built with React for smooth UI transitions and state management 💻",
          " - Prototype version up and running, with plans to enhance features in future updates 🔥"

        ],
      },
    ],
  },
};

const Project = ({ projectID }) => {
  const project = projectData[projectID];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-container">
      <div className="project-image-wrapper">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="project-image"
        />
      </div>

      <Button href={project.externalLink} type={"link"}>
        Visit {project.name}
      </Button>

      {project.content.map((section, index) => (
        <div key={index} className="project-section">
          <h2 className="project-section-header">{section.header}</h2>
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={`${index}-${pIndex}`} className="section-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Project;
