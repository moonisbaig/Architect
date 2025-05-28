import React, { useState, useEffect, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Home, Landmark, Globe, History, LayoutGrid, CalendarDays, UserCircle, X as CloseIcon } from 'lucide-react';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import ProjectCardDisplay from '@/components/portfolio/ProjectCardDisplay'; // Renamed for clarity
import { projectsByYearData } from '@/data/projectsData'; 
import { cn } from '@/lib/utils';

const PortfolioPage = () => {
  const [projectsData] = useState(projectsByYearData);
  const years = Object.keys(projectsData).sort((a, b) => {
    const yearA = parseInt(a.match(/\d{4}/)?.[0] || "0");
    const yearB = parseInt(b.match(/\d{4}/)?.[0] || "0");
    return yearB - yearA;
  });

  const [activeYear, setActiveYear] = useState(years[0]);
  const [selectedProjectForModal, setSelectedProjectForModal] = useState(null); // For modal on click
  const [hoveredProjectForBackground, setHoveredProjectForBackground] = useState(null); // For background change on hover
  const pageContainerRef = useRef(null);


  const handleProjectClick = (project) => {
    setSelectedProjectForModal(project);
  };
  
  const handleCloseModal = () => {
    setSelectedProjectForModal(null);
  };

  const handleProjectHover = (project) => {
    setHoveredProjectForBackground(project);
  };

  const backgroundImageUrl = hoveredProjectForBackground?.heroImage || null;
  
  useEffect(() => {
    if (pageContainerRef.current) {
      if (selectedProjectForModal) {
        pageContainerRef.current.style.filter = 'blur(6px)';
        pageContainerRef.current.style.pointerEvents = 'none';
      } else {
        pageContainerRef.current.style.filter = 'none';
        pageContainerRef.current.style.pointerEvents = 'auto';
      }
    }
  }, [selectedProjectForModal]);


  const categoryIcons = {
    Residential: <Home className="h-4 w-4 mr-1.5" />,
    Commercial: <Building className="h-4 w-4 mr-1.5" />,
    Civic: <Landmark className="h-4 w-4 mr-1.5" />,
    Institutional: <Landmark className="h-4 w-4 mr-1.5" />,
    International: <Globe className="h-4 w-4 mr-1.5" />,
    Heritage: <History className="h-4 w-4 mr-1.5" />,
    "Mixed-Use": <LayoutGrid className="h-4 w-4 mr-1.5" />,
    "Urban Planning": <Globe className="h-4 w-4 mr-1.5" />,
    "Construction Management": <Building className="h-4 w-4 mr-1.5" />,
    "Project Architecture": <Home className="h-4 w-4 mr-1.5" />,
    "Civic & Sustainability": <Landmark className="h-4 w-4 mr-1.5" />,
  };

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {backgroundImageUrl && (
          <motion.div
            key={backgroundImageUrl}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.15 }}
            transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }} // Parallax-like zoom
            className="fixed inset-0 z-0"
          >
            <img  
              src={backgroundImageUrl} 
              alt="Dynamic portfolio background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div ref={pageContainerRef} className="transition-filter duration-300">
        <motion.div 
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          data-page-bg-light="false"
        >
          <header className="text-center mb-10 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-primary drop-shadow-md">Portfolio</h1>
            <p className="text-lg sm:text-xl text-muted-foreground drop-shadow-sm">A Showcase of Architectural Endeavors</p>
          </header>

          <div className="mb-12 sm:mb-16 relative py-4 overflow-x-auto scrollbar-thin scrollbar-thumb-muted-foreground/50 scrollbar-track-secondary/50">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-border/50 -translate-y-1/2 min-w-max"></div>
            <div className="relative flex justify-start sm:justify-center items-center space-x-8 sm:space-x-12 px-4 min-w-max">
              {years.map((year, index) => (
                <motion.div
                  key={year}
                  className="relative flex flex-col items-center group cursor-pointer py-2 shrink-0"
                  onClick={() => setActiveYear(year)}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`w-3.5 h-3.5 rounded-full transition-all duration-300 border-2 ${activeYear === year ? 'bg-primary border-primary scale-125' : 'bg-muted-foreground border-muted-foreground group-hover:bg-primary group-hover:border-primary'}`}></div>
                  <motion.span 
                    className={`mt-2.5 text-xs sm:text-sm font-medium transition-colors duration-300 whitespace-nowrap ${activeYear === year ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {year}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>

          <Tabs value={activeYear} onValueChange={setActiveYear} className="w-full">
            {years.map(year => (
              <TabsContent key={year} value={year} forceMount={true} className={activeYear === year ? 'block' : 'hidden'}>
                <AnimatePresence mode="wait">
                  {activeYear === year && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    >
                      {projectsData[year] && projectsData[year].length > 0 ? (
                        projectsData[year].map((project, index) => (
                          <ProjectCardDisplay 
                            key={project.id}
                            project={project}
                            index={index}
                            categoryIcons={categoryIcons}
                            onClick={() => handleProjectClick(project)}
                            onHoverStart={() => handleProjectHover(project)}
                            onHoverEnd={() => handleProjectHover(null)}
                          />
                        ))
                      ) : (
                        <p className="text-muted-foreground col-span-full text-center py-8">No projects listed for this period yet.</p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
      
      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedProjectForModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 card-open"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
              onClick={handleCloseModal} // Close on overlay click
            ></div>
            <div className="relative bg-secondary/90 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-2xl border border-border max-w-lg w-full max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-muted-foreground/50 scrollbar-track-secondary/50">
              <button 
                onClick={handleCloseModal} 
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors z-10"
                aria-label="Close project details"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
              
              <div className="mb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-1">{selectedProjectForModal.company || selectedProjectForModal.title}</h2>
                <p className="text-md sm:text-lg text-accent-foreground mb-1 flex items-center">
                  <UserCircle className="h-5 w-5 mr-2 text-muted-foreground" />
                  {selectedProjectForModal.role}
                </p>
                <p className="text-sm text-muted-foreground flex items-center">
                  <CalendarDays className="h-4 w-4 mr-2 text-muted-foreground" />
                  {selectedProjectForModal.details?.timeline || selectedProjectForModal.id.split('-')[1]} {/* Fallback for period if not in details.timeline */}
                </p>
              </div>
              
              <div className="prose prose-sm prose-invert max-w-none text-muted-foreground leading-relaxed">
                <p>{selectedProjectForModal.description}</p>
              </div>

              {selectedProjectForModal.details?.responsibilities && selectedProjectForModal.details.responsibilities.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-primary-foreground mb-1.5">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground pl-2">
                    {selectedProjectForModal.details.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPage;