import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

import traumaInformedImg from "../../assets/images_home/trauma-informed-therapy.webp";
import writingImg from "../../assets/images_home/mental-health-writing.webp";
import researchImg from "../../assets/images_home/research.jpeg";
import collaborationImg from "../../assets/images_home/Professional Collaboration & Recognition.png";

function GetSkillSvg(props) {
  switch (props.fileName) {
    case "TherapyImg":
      return (
        <img
          src={traumaInformedImg}
          alt="Trauma-Informed Therapy"
          style={{ width: "100%", borderRadius: "10px" }}
        />
      );
    case "WritingImg":
      return (
        <img
          src={writingImg}
          alt="Mental Health Writing"
          style={{ width: "100%", borderRadius: "10px" }}
        />
      );
    case "ResearchImg":
      return (
        <img
          src={researchImg}
          alt="Research & Academic Excellence"
          style={{ width: "100%", borderRadius: "10px" }}
        />
      );
    case "CollaborationImg":
      return (
        <img
          src={collaborationImg}
          alt="Professional Collaboration & Recognition"
          style={{ width: "100%", borderRadius: "10px" }}
        />
      );
    default:
      return null;
  }
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
