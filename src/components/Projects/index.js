import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";


const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>My Projects</Title>
        <Desc>
          Over the years, I’ve had the opportunity to work on a variety of
          exciting projects that blend creativity, problem-solving, and
          technical expertise. Below are some of my standout works that I’m
          incredibly proud of. Take a look and see how I bring ideas to life!
        </Desc>

        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton 
            active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButton
              active
              value="web app"
              onClick={() => setToggle("web app")}
            >
              WEB APP'S
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle("web app")}>
              WEB APP'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Cybersecurity" ? (
            <ToggleButton
              active
              value="Cybersecurity"
              onClick={() => setToggle("Cybersecurity")}
            >
              CYBERSECURITY
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Cybersecurity"
              onClick={() => setToggle("Cybersecurity")}
            >
              CYBERSECURITY
            </ToggleButton>
          )}
          {/* <Divider /> */}
          {/* {toggle === "UI/UX" ? (
            <ToggleButton
              active
              value="UI/UX"
              onClick={() => setToggle("UI/UX")}
            >
              UI/UX
            </ToggleButton>
          ) : (
            <ToggleButton value="UI/UX" onClick={() => setToggle("UI/UX")}>
              UI/UX
            </ToggleButton>
          )} */}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
