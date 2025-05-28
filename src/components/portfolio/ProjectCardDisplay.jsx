import React from 'react';
import { motion } from 'framer-motion';
import { Building } from 'lucide-react'; // Added missing import

const ProjectCardDisplay = ({ project, index, categoryIcons, onClick, onHoverStart, onHoverEnd }) => {
  return (
    <motion.div
      key={project.id}
      className="bg-secondary/70 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-border/60 hover:border-accent/80 transition-all duration-300 flex flex-col group cursor-pointer"
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onClick={onClick}
      layout // Enables smooth layout animations if grid changes
    >
      <div className="h-48 sm:h-56 w-full bg-muted overflow-hidden relative">
        <img  
          alt={project.imageAlt || `Image for ${project.title}`} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400 ease-in-out" 
          src={project.heroImage || `https://images.unsplash.com/photo-1582063289852-62e1583c6521?pid=${project.id}`} 
        />
        {/* Removed overlay text on hover as per new requirement */}
      </div>
      <div className="p-4 sm:p-5 flex-grow flex flex-col">
        <h3 className="text-lg sm:text-xl font-semibold text-primary-foreground mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-2">{project.title}</h3>
        <p className="text-xs text-muted-foreground mb-1 line-clamp-1">{project.company} - <span className="font-medium">{project.role}</span></p>
        <div className="flex items-center text-xs text-muted-foreground mb-2">
          {categoryIcons[project.category] || React.createElement(Building, {className: "h-4 w-4 mr-1"})}
          {project.category}
        </div>
        <p className="text-sm text-muted-foreground flex-grow line-clamp-3 group-hover:text-foreground/80 transition-colors duration-200">{project.description}</p>
        {/* "Explore Project" button removed as click on card opens modal */}
      </div>
    </motion.div>
  );
};

export default ProjectCardDisplay;