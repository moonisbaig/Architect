import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, CalendarDays, CheckCircle, X as CloseIcon, Info } from 'lucide-react';
import { timelineData as initialTimelineData } from '@/data/timelinePageData'; 
import { cn } from '@/lib/utils';

const TimelinePage = () => {
  const [timelineData] = useState(initialTimelineData);
  const [hoveredEntryId, setHoveredEntryId] = useState(null);
  const [selectedEntry, setSelectedEntry] = useState(null); // For mobile modal
  const [backgroundUrl, setBackgroundUrl] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const pageRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let newBgUrl = null;
    const entry = timelineData.find(item => item.id === hoveredEntryId);
    if (!isMobile && entry && entry.heroImage) {
      newBgUrl = entry.heroImage;
    }
    setBackgroundUrl(newBgUrl);
  }, [hoveredEntryId, isMobile, timelineData]);

  useEffect(() => {
    if (pageRef.current) {
      if (selectedEntry && isMobile) {
        pageRef.current.classList.add('blur-sm', 'pointer-events-none');
        pageRef.current.style.filter = 'blur(6px)';
      } else {
        pageRef.current.classList.remove('blur-sm', 'pointer-events-none');
        pageRef.current.style.filter = 'none';
      }
    }
  }, [selectedEntry, isMobile]);

  const handleEntryInteraction = (entry) => {
    if (isMobile) {
      setSelectedEntry(selectedEntry && selectedEntry.id === entry.id ? null : entry);
    } else {
      setHoveredEntryId(entry.id);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredEntryId(null);
    }
  };

  const closeMobileModal = () => {
    setSelectedEntry(null);
  };

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {backgroundUrl && !isMobile && (
          <motion.div
            key={backgroundUrl}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-0"
          >
            <img  
              src={backgroundUrl} 
              alt="Dynamic career background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={pageRef} className="transition-filter duration-300">
        <motion.div 
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          data-page-bg-light="false"
        >
          <header className="text-center mb-10 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-primary drop-shadow-md">Career Timeline</h1>
            <p className="text-lg sm:text-xl text-muted-foreground drop-shadow-sm">A Journey Through Architectural Milestones</p>
          </header>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/70 transform -translate-x-1/2"></div>
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-border/70"></div>
            
            {timelineData.map((item, index) => {
              const IconDisplay = item.icon || Briefcase;
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={item.id}
                  className={cn(
                    "mb-8 md:mb-0 flex group",
                    isEven ? "md:flex-row-reverse" : "md:flex-row",
                    "md:items-center" 
                  )}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onMouseEnter={!isMobile ? () => handleEntryInteraction(item) : undefined}
                  onMouseLeave={!isMobile ? handleMouseLeave : undefined}
                  onClick={isMobile ? () => handleEntryInteraction(item) : undefined}
                >
                  <div className={cn(
                      "hidden md:flex w-1/2",
                      isEven ? "justify-start" : "justify-end"
                  )}>
                    {!isMobile && (
                      <div className={cn("w-1/2 p-4", isEven ? "text-left" : "text-right")}>
                        {/* Placeholder for potential future content on desktop */}
                      </div>
                    )}
                  </div>

                  <div className="relative md:w-auto">
                    <div className={cn(
                      "absolute top-1/2 md:left-1/2 z-10 w-10 h-10 rounded-full border-4 border-background transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center shadow-lg transition-all duration-300",
                      "left-4 -translate-x-1/2 md:left-1/2",
                      selectedEntry?.id === item.id && isMobile ? 'bg-primary scale-110' : 'bg-secondary group-hover:bg-accent'
                    )}>
                      <IconDisplay className={cn(
                        "h-5 w-5 transition-colors duration-300",
                        selectedEntry?.id === item.id && isMobile ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-accent-foreground'
                      )} />
                    </div>
                  </div>
                  
                  <div className={cn(
                      "w-full md:w-1/2 p-4 pl-12 md:p-4",
                      isEven ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"
                  )}>
                    <div className={cn(
                      "p-4 rounded-lg shadow-md transition-all duration-300 border cursor-pointer",
                      selectedEntry?.id === item.id && isMobile ? 'bg-secondary border-accent shadow-xl' : 'bg-secondary/70 border-border hover:border-accent/70 group-hover:border-accent/70'
                    )}>
                      <h3 className={cn(
                        "text-lg font-semibold mb-0.5",
                        selectedEntry?.id === item.id && isMobile ? 'text-primary' : 'text-primary-foreground group-hover:text-primary'
                      )}>{item.role}</h3>
                      <p className={cn(
                        "text-sm font-medium mb-0.5",
                        selectedEntry?.id === item.id && isMobile ? 'text-accent-foreground' : 'text-muted-foreground group-hover:text-accent-foreground'
                      )}>{item.company}</p>
                      <div className={cn(
                        "flex items-center text-xs text-muted-foreground/80",
                        isEven ? "md:justify-start" : "md:justify-end",
                        "justify-start"
                      )}>
                        <CalendarDays className="h-3 w-3 mr-1" /> {item.period}
                        <MapPin className="h-3 w-3 mr-1 ml-2" /> {item.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Mobile Modal */}
      <AnimatePresence>
        {selectedEntry && isMobile && (
          <motion.div
            className="fixed inset-x-0 top-10 sm:top-1/4 z-50 p-4 card-open"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="bg-secondary/90 backdrop-blur-md p-6 rounded-xl shadow-2xl border border-border max-w-md mx-auto">
              <button 
                onClick={closeMobileModal} 
                className="absolute top-3 right-3 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Close details"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
              <div className="flex items-start mb-3">
                {(selectedEntry.icon || Briefcase) && React.createElement(selectedEntry.icon || Briefcase, {className: "h-8 w-8 text-primary mr-3 mt-1 flex-shrink-0"})}
                <div>
                  <h2 className="text-xl font-bold text-primary">{selectedEntry.role}</h2>
                  <p className="text-md text-accent-foreground">{selectedEntry.company}</p>
                </div>
              </div>
              <div className="flex items-center text-xs text-muted-foreground mb-1">
                <CalendarDays className="h-4 w-4 mr-2" /> {selectedEntry.period}
              </div>
              <div className="flex items-center text-xs text-muted-foreground mb-3">
                <MapPin className="h-4 w-4 mr-2" /> {selectedEntry.location}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-muted-foreground/50 scrollbar-track-secondary/50">
                {selectedEntry.description}
              </p>
              {selectedEntry.keyPoints && selectedEntry.keyPoints.length > 0 && (
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-primary-foreground mb-1 flex items-center"><CheckCircle className="h-4 w-4 mr-1.5 text-green-400"/>Key Highlights</h4>
                  <ul className="list-none space-y-1 text-xs text-muted-foreground pl-1 max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-muted-foreground/50 scrollbar-track-secondary/50">
                    {selectedEntry.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-1.5 mt-0.5 text-green-500">&bull;</span>
                        {point}
                      </li>
                    ))}
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

export default TimelinePage;