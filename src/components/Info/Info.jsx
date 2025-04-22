import React from "react";

import "./Info.scss";
import Button from "../Button/Button";

const infoMeData = {
  one: {
    content: [
      {
        header: "💭 'About this Portfolio",
        paragraphs: [
          "If you liked this project, please consider starring my repo on GitHub. Thank you! Although inspired by the incredible work of Andrew Woan, this portfolio was built entirely from scratch—from modeling and texturing every 3D asset to writing each line of code. Every animation, interaction, and visual detail reflects my own process, experimentation, and dedication to blending technology with creativity.",

        ],
      },
      {
        header: "🎉 Special Thanks, Credits, & Inspiration",
        paragraphs: [
          " - A big thanks to Sheryians Coding School for the awesome guidance with three.js.",
          " - Shoutout to Wawa Sensei for the amazing R3F course and resources.",
          " - Special thanks to Sketchfab for the fantastic models.",
          " - Lastly, a huge thanks to Andrew Woan for teaching me and helping with shaders and baking.",


        ],
      },
      {
        header: "🤖 Tools, Technologies, & More",
        paragraphs: [
          " - Entire project was spanned over two months, some days I spent 12 hours and some days I spent like 30 minutes, so I don't even remember how long it took me (at least 100 hours), but it was really fun!!!",
          " - *Blender* was used for all 3D stuff (driver animations, baking, modeling, rigging etc.). Notable plugins include MCprep, SimpleBake, and UVPackMaster 3",
          " - *Audacity* was used to convert mp3 files into ogg files for smaller file sizes and retaining quality.",
          " - *Figma* was used to edit baked textures and create custom SVGs.",
          " - *Poly Haven* was used for the HDRI.",
          " - Global state management stores were handled with *zustand*.",
          " - *SCSS* was the choice for the website styles.",
          " - React three fiber and lot's of react three drei helpers were used to speed up the 3D web development process.",
          " - Notable command line tools like *gltf-transform* and *gltfjsx* were used to optimize models for the web and code.",
          " - All meshes utilized *KTX textures* and were created using KTX Software on GitHub.",
          " - Read a lot of documentation. A lot. I really appreciate all of those who spent so much time on the documentation for their tools it really helps out a ton. The react three drei docs are incredible.",
          " - *ChatGPT* helped out with some of the redundant code really well.",
          " - Online viewers like *sandbox.babylonjs.com*, *gltf-viewer.donmccurdy.com*, and *gltf-report.com* were incredibly helpful for quickly reviewing model animations and textures, saving a lot of time.",
          " - I'm sure I'm forgetting a lot of things at the moment, but will come back here to update this list. Feel free to reach out to me at *aashishjha1107@gmail.com* if you have any questions!",
        ],
      },
    ],
  },
};

const Info = () => {
  const data = infoMeData["one"];

  if (!data) {
    return <div>Data not found</div>;
  }

  const parseText = (text) => {
    const parts = text.split(/(\*[^*]+\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        const content = part.slice(1, -1);
        return (
          <span key={index} className="yellow-text">
            {content}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <>
      <div className="data-container">
        <Button href="https://github.com/Aashish-Jha-11" type={"link"}>
          Visit My GitHub Profile
        </Button>

        {data.content.map((section, index) => (
          <div key={index} className="data-section">
            <h2 className="info-section-header">{section.header}</h2>
            {section.paragraphs.map((paragraph, pIndex) => (
              <p key={`${index}-${pIndex}`} className="section-paragraph">
                {parseText(paragraph)}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Info;
