// @flow strict

import { personalData } from "@/utils/data/personal-data";
import ProjectCard from "../components/homepage/projects/project-card";
import { projectsData } from '@/utils/data/projects-data';

async function getProjects() {
  return projectsData;
};

async function page() {
  const projects = await getProjects();

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Project
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="box-border flex flex-col items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
        {
          projects.map((project, i) => (
            <ProjectCard project={project} key={i} all={true}/>
          ))
        }
      </div>
    </div>
  );
};

export default page;