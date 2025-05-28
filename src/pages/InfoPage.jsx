import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, MessageSquare, Laptop, Languages, Award, HeartHandshake as Handshake, CheckSquare, Star } from 'lucide-react';

const skillsData = [
  {
    category: "Soft Skills",
    icon: <Users className="h-8 w-8 text-primary" />,
    items: [
      { name: "Communication", level: 5, icon: <MessageSquare className="h-5 w-5 mr-2 text-blue-400" /> },
      { name: "Teamwork & Collaboration", level: 5, icon: <Handshake className="h-5 w-5 mr-2 text-green-400" /> },
      { name: "Leadership & Management", level: 4, icon: <Star className="h-5 w-5 mr-2 text-yellow-400" /> },
      { name: "Problem Solving", level: 4, icon: <CheckSquare className="h-5 w-5 mr-2 text-purple-400" /> },
      { name: "Adaptability", level: 5, icon: <Brain className="h-5 w-5 mr-2 text-orange-400" /> },
    ]
  },
  {
    category: "Computer Proficiency",
    icon: <Laptop className="h-8 w-8 text-primary" />,
    items: [
      { name: "AutoCAD", level: 5, icon: <Laptop className="h-5 w-5 mr-2 text-red-400" /> },
      { name: "Revit", level: 5, icon: <Laptop className="h-5 w-5 mr-2 text-sky-400" /> },
      { name: "Photoshop", level: 4, icon: <Laptop className="h-5 w-5 mr-2 text-blue-500" /> },
      { name: "3Ds Max", level: 4, icon: <Laptop className="h-5 w-5 mr-2 text-orange-500" /> },
      { name: "GIS Software", level: 3, icon: <Laptop className="h-5 w-5 mr-2 text-green-500" /> },
    ]
  },
  {
    category: "Languages",
    icon: <Languages className="h-8 w-8 text-primary" />,
    items: [
      { name: "English", level: 5, icon: <Languages className="h-5 w-5 mr-2 text-indigo-400" /> },
      { name: "Urdu", level: 5, icon: <Languages className="h-5 w-5 mr-2 text-teal-400" /> },
      { name: "Arabic", level: 3, icon: <Languages className="h-5 w-5 mr-2 text-amber-400" /> },
    ]
  },
  {
    category: "Professional Affiliations",
    icon: <Award className="h-8 w-8 text-primary" />,
    items: [
      { name: "SBCA Karachi License", icon: <Award className="h-5 w-5 mr-2 text-gold-400" /> },
      { name: "PCATP Life Member", icon: <Award className="h-5 w-5 mr-2 text-silver-400" /> },
      { name: "Member – Saudi Engineering Council (Jeddah)", icon: <Award className="h-5 w-5 mr-2 text-bronze-400" /> },
      { name: "Associate – Institute of Architects Pakistan", icon: <Award className="h-5 w-5 mr-2 text-cyan-400" /> },
    ]
  }
];

const SkillBar = ({ level }) => (
  <div className="w-full bg-muted rounded-full h-2.5">
    <motion.div 
      className="bg-primary h-2.5 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${level * 20}%`}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    />
  </div>
);


const InfoPage = () => {
  return (
    <motion.div
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      data-page-bg-light="false" // To keep logo white
    >
      <header className="text-center mb-10 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-primary drop-shadow-md">Additional Information</h1>
        <p className="text-lg sm:text-xl text-muted-foreground drop-shadow-sm">Skills, Proficiencies, and Affiliations</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10">
        {skillsData.map((skillCategory, catIndex) => (
          <motion.div
            key={skillCategory.category}
            className="bg-secondary/70 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-xl border border-border/70 hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: catIndex * 0.1 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-lg mr-4">{skillCategory.icon}</div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-primary-foreground">{skillCategory.category}</h2>
            </div>
            <ul className="space-y-5">
              {skillCategory.items.map((item, itemIndex) => (
                <motion.li 
                  key={item.name}
                  className="flex flex-col"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: catIndex * 0.1 + itemIndex * 0.05 }}
                >
                  <div className="flex items-center text-base sm:text-lg text-muted-foreground mb-1.5">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                  {item.level && <SkillBar level={item.level} />}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
       <p className="text-center text-muted-foreground mt-16 text-sm">
        This page highlights key skills and professional background. For detailed project history, please visit the Portfolio and Timeline sections.
      </p>
    </motion.div>
  );
};

export default InfoPage;