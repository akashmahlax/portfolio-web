import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  { id: 1, title: 'Project One', description: 'Description for project one.' },
  { id: 2, title: 'Project Two', description: 'Description for project two.' },
];

const Projects = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map(project => <ProjectCard key={project.id} project={project} />)}
    </div>
  </div>
);

export default Projects;