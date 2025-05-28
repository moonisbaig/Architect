import React from 'react';
import { motion } from 'framer-motion';
import { Building, Home as HomeIcon, Trees, Users, HardHat, Zap, DraftingCompass, CheckSquare, Wind } from 'lucide-react'; // Added Wind for Farmhouse/Villa

const services = [
  { name: "Residential Architecture", icon: HomeIcon, description: "Designing bespoke homes that blend aesthetics with functionality, tailored to individual lifestyles." },
  { name: "Commercial Architecture", icon: Building, description: "Creating innovative and efficient commercial spaces, from office buildings to retail outlets." },
  { name: "Interior Design", icon: DraftingCompass, description: "Crafting inspiring and harmonious interior environments that reflect client vision and brand identity." },
  { name: "Landscape Design", icon: Trees, description: "Designing sustainable and captivating outdoor spaces that integrate seamlessly with architecture." },
  { name: "Farmhouse/Villa Planning", icon: Wind, description: "Specialized design for luxurious farmhouses and villas, focusing on expansive layouts and natural integration." },
  { name: "Site Supervision", icon: HardHat, description: "Providing meticulous on-site management to ensure projects are executed to the highest standards and specifications." },
  { name: "Energy Efficiency Consulting", icon: Zap, description: "Advising on green building practices and energy-saving solutions for sustainable architectural design." },
  { name: "BIM Modeling (Revit, 3D Max)", icon: Users, description: "Utilizing Building Information Modeling for precise design, visualization, and collaborative project management." },
];

const ServicesPage = () => {
  return (
    <motion.div 
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="text-center mb-10 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-primary">Our Services</h1>
        <p className="text-lg sm:text-xl text-muted-foreground">Comprehensive Architectural Solutions</p>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            className="bg-secondary p-6 rounded-xl shadow-lg border border-border flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div className="p-4 bg-accent/30 rounded-full mb-5 group-hover:bg-accent transition-colors duration-300">
              <service.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary group-hover:text-accent-foreground transition-colors duration-300" />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-primary-foreground mb-2">{service.name}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesPage;