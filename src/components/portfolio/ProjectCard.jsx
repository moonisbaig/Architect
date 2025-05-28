import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Building } from 'lucide-react';

const ProjectCard = ({ project, index, categoryIcons, onViewDetails, onHover }) => {
  return (
    <motion.div
      key={project.id}
      className="bg-secondary/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-border/70 hover:shadow-2xl transition-all duration-300 flex flex-col group cursor-pointer"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onHoverStart={() => onHover(project)}
      onHoverEnd={() => onHover(null)}
      onClick={() => onViewDetails(project)}
    >
      <div className="h-48 sm:h-56 w-full bg-muted overflow-hidden relative">
        <img  
          alt={project.imageAlt} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400 ease-in-out" 
          src={project.heroImage || `https://images.unsplash.com/photo-1697256200022-f61abccad430?pid=${project.id}`} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h4 className="text-lg font-semibold text-white drop-shadow-md">{project.title}</h4>
          <p className="text-xs text-gray-300 drop-shadow-sm">{project.role}</p>
        </div>
      </div>
      <div className="p-5 sm:p-6 flex-grow flex flex-col">
        <h3 className="text-xl sm:text-2xl font-semibold text-primary-foreground mb-1 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-1">{project.company} - <span className="font-medium">{project.role}</span></p>
        <div className="flex items-center text-xs text-muted-foreground mb-3">
          {categoryIcons[project.category] || <Building className="h-4 w-4 mr-1" />}
          {project.category}
        </div>
        <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">{project.description}</p>
        <Button 
            variant="outline" 
            className="w-full mt-auto bg-transparent border-accent text-accent-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300"
            aria-label={`View details for ${project.title}`}
        >
          Explore Project <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;