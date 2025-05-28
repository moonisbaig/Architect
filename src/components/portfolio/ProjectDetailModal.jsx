import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Users, Settings, FileText, Palette, Image as ImageIcon, CalendarDays, UserCircle as RoleIcon } from 'lucide-react';

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;
  
  // Use project.details if available, otherwise fallback to top-level project properties
  const company = project.company || "N/A";
  const role = project.role || "N/A";
  const timeline = project.details?.timeline || project.id.split('-')[1] || "N/A"; // Basic fallback for period
  const description = project.description || "No description available.";
  const responsibilities = project.details?.responsibilities || [];
  const techUsed = project.details?.techUsed || [];
  const style = project.details?.style || "N/A";
  const associations = project.details?.associations || "N/A";
  const gallery = project.details?.gallery || [];


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl md:max-w-3xl lg:max-w-4xl bg-background/95 backdrop-blur-lg border-border text-foreground max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-4 border-b border-border sticky top-0 bg-background/95 z-10">
          <DialogTitle className="text-2xl sm:text-3xl text-primary font-playfair">{project.title}</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            <span className="font-semibold">{company}</span>
            <div className="flex items-center text-sm mt-1">
                <RoleIcon className="h-4 w-4 mr-2 text-muted-foreground" /> {role}
            </div>
            <div className="flex items-center text-sm mt-1">
                <CalendarDays className="h-4 w-4 mr-2 text-muted-foreground" /> {timeline}
            </div>
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-6 space-y-6 overflow-y-auto flex-grow scrollbar-thin scrollbar-thumb-muted-foreground/50 scrollbar-track-secondary/50">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-primary-foreground flex items-center"><FileText className="h-5 w-5 mr-2 text-primary"/>Description</h3>
            <p className="text-sm text-muted-foreground whitespace-pre-line">{description}</p>
          </div>

          {responsibilities.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary-foreground flex items-center"><FileText className="h-5 w-5 mr-2 text-primary"/>Responsibilities</h3>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground pl-4">
                {responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
              </ul>
            </div>
          )}

          {techUsed.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary-foreground flex items-center"><Settings className="h-5 w-5 mr-2 text-primary"/>Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {techUsed.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs bg-accent text-accent-foreground rounded-full shadow-sm">{tech}</span>
                ))}
              </div>
            </div>
          )}
          
          {style !== "N/A" && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary-foreground flex items-center"><Palette className="h-5 w-5 mr-2 text-primary"/>Architectural Style</h3>
              <p className="text-sm text-muted-foreground">{style}</p>
            </div>
          )}

          {associations !== "N/A" && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-primary-foreground flex items-center"><Users className="h-5 w-5 mr-2 text-primary"/>Key Collaborations/Clients</h3>
              <p className="text-sm text-muted-foreground">{associations}</p>
            </div>
          )}
          
          {gallery.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mt-4 mb-3 text-primary-foreground flex items-center"><ImageIcon className="h-5 w-5 mr-2 text-primary"/>Gallery</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {gallery.map((item, index) => (
                  <div key={index} className="bg-muted/70 aspect-video rounded-lg flex items-center justify-center text-xs text-muted-foreground p-2 shadow-md overflow-hidden">
                    <img  
                      alt={`${project.title} - Gallery Image ${index + 1}: ${item}`} 
                      className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300" 
                      src={`https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60&gid=${project.id}&idx=${index}`} 
                    />
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground/70 mt-2 text-center">Illustrative images. Actual project visuals may vary.</p>
            </div>
          )}
        </div>
        <DialogFooter className="p-6 pt-4 border-t border-border sticky bottom-0 bg-background/95 z-10">
          <Button onClick={onClose} variant="outline" className="hover:bg-accent hover:text-accent-foreground">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;