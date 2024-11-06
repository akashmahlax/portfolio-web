import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => (
  <motion.div
    className="bg-white shadow-lg rounded-lg p-5 hover:shadow-2xl transition-shadow duration-300"
    whileHover={{ scale: 1.05 }}
  >
    <h2 className="text-xl font-bold">{project.title}</h2>
    <p className="text-gray-700">{project.description}</p>
  </motion.div>
);

export default ProjectCard;