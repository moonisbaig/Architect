import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Briefcase, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certifications = [
  "SBCA License (Sindh Building Control Authority)",
  "PCATP Life Member (Pakistan Council of Architects and Town Planners)",
  "Saudi Engineering Council Registered",
  "Additional relevant certifications can be listed here"
];

const AboutPage = () => {
  const cvPath = "/Arshad_Baig_CV.pdf"; // Path to CV in public folder

  return (
    <motion.div 
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      data-page-bg-light="false" 
    >
      <header className="text-center mb-10 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-primary">About Muhammad Arshad Baig</h1>
        <p className="text-lg sm:text-xl text-muted-foreground">A Journey of Architectural Excellence</p>
      </header>

      <div className="max-w-4xl mx-auto space-y-10">
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-secondary p-6 sm:p-8 rounded-xl shadow-xl border border-border"
        >
          <div className="flex items-start space-x-4">
            <Award className="h-10 w-10 text-primary mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-primary-foreground">25+ Years of Experience</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over two and a half decades in the architectural field, Muhammad Arshad Baig brings a wealth of knowledge and a rich portfolio of diverse projects. His experience spans residential, commercial, institutional, and landscape architecture, marked by a commitment to innovation and quality.
              </p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-transparent text-primary-foreground border-primary hover:bg-primary/10 hover:text-primary rounded-lg group"
                  asChild
                >
                  <a href={cvPath} download="Muhammad_Arshad_Baig_CV.pdf">
                    <Download className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:animate-bounce" />
                    Download CV
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-secondary p-6 sm:p-8 rounded-xl shadow-xl border border-border"
        >
          <div className="flex items-start space-x-4">
            <Briefcase className="h-10 w-10 text-primary mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-primary-foreground">Design Philosophy</h2>
              <p className="text-muted-foreground leading-relaxed">
                My design approach is rooted in creating spaces that are not only visually compelling but also deeply functional and contextually relevant. I believe in a collaborative process, working closely with clients to translate their visions into tangible realities. Sustainability, efficiency, and timeless aesthetics are astdCertificationss of every project.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-secondary p-6 sm:p-8 rounded-xl shadow-xl border border-border"
        >
          <div className="flex items-start space-x-4">
            <ShieldCheck className="h-10 w-10 text-primary mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-primary-foreground">Certifications & Affiliations</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default AboutPage;