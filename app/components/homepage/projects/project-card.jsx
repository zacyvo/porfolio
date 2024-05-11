// @flow strict

import * as React from 'react';

function ProjectCard({ project, all = false }) {  

  return (
    <div className={`${all ? 'mb-5 w-full' : ''} from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full"`}>
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className={`${!all ? "overflow-y-scroll max-h-96 " : ''} border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8"`}>
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">description:</span>
            <span className="text-cyan-400">{' ' + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-green-400">{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">teamSize:</span>
            <span className="text-green-400">{project.teamSize}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">technologies:</span>
            <span className="text-gray-400">{` {'`}</span>
            {
              project.technologies &&
              Object.keys(project.technologies).map((category, i) => (
                <div className='ml-4 lg:ml-8 mr-2' key={i}>
                  <span className="text-orange-400">{category}</span>
                  <span className="text-gray-400">{`: ['`}</span>
                  {
                    project.technologies[category].map((value, index) => (
                      <React.Fragment key={index}>
                        <span className="text-amber-300">{value}</span>
                        {index !== project.technologies[category].length - 1 && (
                          <span className="text-gray-400">{`', '`}</span>
                        )}
                      </React.Fragment>
                    ))
                  }
                  <span className="text-gray-400">{"']"}</span>
                </div>
              ))            
            }
            <span className="text-gray-400">{"},"}</span>
          </div>
          {
            project.responsibilities && 
            <div className="ml-4 lg:ml-8 mr-2">
              <span className=" text-white">responsibilities:</span>
              <span className="text-gray-400">{` [`}</span>
              {
                project.responsibilities.map((tag, i) => (
                  <div  className='ml-4 lg:ml-8 mr-2' key={i}>
                    <span className="text-amber-300">{tag}</span>
                  </div>
                ))
              }
              <span className="text-gray-400">{`] ${project.ref ? ',' : ''}`}</span>
            </div>
          }
          {
            project.ref && 
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">reference:</span>
              <span className="text-green-400"><a href={project.ref} target='_blank'>{project.ref}</a></span>
            </div>
          }
          <div><span className="text-gray-400">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;