import React from "react";
import "./About.scss";
import Button from "../Button/Button";

const aboutMeData = {
  one: {
    name: "Aashish Jha",
    imageUrl: "/images/thumbnail-me.jpeg",
    externalLink: "https://github.com/Aashish-Jha-11",
    content: [
      {
        header: "About Me",
        paragraphs: [
          "Yo! Glad you dropped in 😄 Let’s make this visit worth it!",
          "My name is Aashish Jha and I'm just a guy who’s passionate about tech and fitness.",
          "As much as I love building cool stuff with code, I also enjoy staying active. Whether it's lifting weights or going for long walks, movement keeps me going.",
          "When I'm not working out or coding something new, I’m usually chilling in my space. My favorite hobbies are designing UIs, working out, experimenting with apps, exploring photography, and learning new tools."
        ],
      },
      {
        header: "Fun Facts",
        paragraphs: [
          " - I'm not there yet, but I’m definitely working on building my physique. It’s all about progress, not perfection. Every small win counts 💪",
          " - I love building things—whether it’s a fitness routine or a cool app. From front-end designs, workouts, prototypes, to random Blender scenes, I enjoy it all, even if I’m not a master at each one haha.",
          " - I enjoy sharing what I learn. Whether it’s tech tips or fitness form corrections, helping someone grow lights me up. The ripple effect of knowledge is pretty cool.",
          " - I have this thing for exploring. I’ll often take unplanned walks just to clear my head—sometimes through quiet alleys, sometimes into new neighborhoods or nature spots.,"
        ],
      },
    ],
  },
};

const About = () => {
  const data = aboutMeData["one"];

  if (!data) {
    return <div>Data not found</div>;
  }

  return (
    <div className="data-container">
      <div className="image-wrapper">
        <img src={data.imageUrl} alt={data.name} className="data-image" />
      </div>

      <Button href={data.externalLink} type={"link"}>
        View my Profile!
      </Button>

      {data.content.map((section, index) => (
        <div key={index} className="data-section">
          <h2 className="about-section-header">{section.header}</h2>
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={`${index}-${pIndex}`} className="section-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      ))}

      <div className="image-wrapper-one">
        <img
          src="/images/aj.jpg"
          alt={"AJ"}
          className="data-image-two"
        />
      </div>
      <p className="section-paragraph">
        - - Aashish Jha - -
      </p>

      <div className="image-wrapper-two">
        <img
          src="/images/thumbnail-me3.jpg"
          alt={"AJ"}
          className="data-image-two"
        />
      </div>
      <p className="section-paragraph">- - Mr. AJ (In Progress) - -</p>

      <div className="image-wrapper-3">
        <img
          src="/images/Ram.jpeg"
          alt={"Ram Ji"}
          className="data-image"
        />
      </div>
      <p className="section-paragraph">- - My partner of all time - -</p>
    </div>
  );
};

export default About;