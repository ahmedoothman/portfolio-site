import React from 'react';
import ProjectItem from './project-item';

const Projects = (props) => {
  return (
    <div data-section id='projects' className='mb-16'>
      <h2 className='mb-8 visible lg:invisible font-medium tracking-widest'>
        Projects
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {props.data.map(function (project, index) {
          return (
            <ProjectItem
              key={project.id}
              id={project.id}
              name={project.name}
              stars={project.stars}
              framework={project.framework}
              shortDescription={project.shortDescription}
              mainImage={project.mainImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
