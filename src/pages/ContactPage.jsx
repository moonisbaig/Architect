import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button'; 
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils'; 
import * as LabelPrimitive from '@radix-ui/react-label';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., send data to a backend)
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your inquiry. Architect Baig will respond to you shortly.",
      variant: "default", 
    });
    e.target.reset();
  };

  return (
    <motion.div 
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="text-center mb-10 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-primary">Get in Touch</h1>
        <p className="text-lg sm:text-xl text-muted-foreground">Let's Discuss Your Next Project</p>
      </header>

      <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-start max-w-5xl mx-auto">
        <motion.div 
          className="space-y-8 bg-secondary p-6 sm:p-8 rounded-xl shadow-xl border border-border"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary-foreground mb-6">Contact Information</h2>
          
          <div className="flex items-start space-x-4 group">
            <Mail className="h-7 w-7 text-primary mt-1 group-hover:text-accent-foreground transition-colors" />
            <div>
              <h3 className="text-lg font-medium text-primary-foreground">Email</h3>
              <a href="mailto:architectbaig@hotmail.com" className="text-muted-foreground hover:text-accent-foreground transition-colors">architectbaig@hotmail.com</a>
            </div>
          </div>

          <div className="flex items-start space-x-4 group">
            <Phone className="h-7 w-7 text-primary mt-1 group-hover:text-accent-foreground transition-colors" />
            <div>
              <h3 className="text-lg font-medium text-primary-foreground">Phone</h3>
              <p className="text-muted-foreground">+92 303 289 8180</p>
              <p className="text-muted-foreground">+92 333 024 7959</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 group">
            <MapPin className="h-7 w-7 text-primary mt-1 group-hover:text-accent-foreground transition-colors" />
            <div>
              <h3 className="text-lg font-medium text-primary-foreground">Location</h3>
              <p className="text-muted-foreground">Karachi, Pakistan</p>
            </div>
          </div>
          
          <div className="pt-4 border-t border-border/50">
             <h3 className="text-lg font-medium text-primary-foreground mb-2">Office Hours</h3>
             <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
             <p className="text-sm text-muted-foreground">Saturday: 10:00 AM - 2:00 PM (By Appointment)</p>
             <p className="text-sm text-muted-foreground">Sunday: Closed</p>
           </div>
        </motion.div>

        <motion.div
          className="bg-secondary p-6 sm:p-8 rounded-xl shadow-xl border border-border"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary-foreground mb-6">Send a Message or Schedule a Consultation</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-primary-foreground">Full Name</Label>
              <Input id="name" type="text" placeholder="e.g., John Doe" required className="mt-1"/>
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-primary-foreground">Email Address</Label>
              <Input id="email" type="email" placeholder="e.g., your@email.com" required className="mt-1"/>
            </div>
             <div>
              <Label htmlFor="phone" className="text-sm font-medium text-primary-foreground">Phone Number (Optional)</Label>
              <Input id="phone" type="tel" placeholder="e.g., +1 234 567 8900" className="mt-1"/>
            </div>
            <div>
              <Label htmlFor="subject" className="text-sm font-medium text-primary-foreground">Subject / Project Type</Label>
              <Input id="subject" type="text" placeholder="e.g., Residential Design Inquiry, Consultation Request" required className="mt-1"/>
            </div>
            <div>
              <Label htmlFor="message" className="text-sm font-medium text-primary-foreground">Message / Project Details</Label>
              <Textarea id="message" placeholder="Briefly describe your project requirements or inquiry..." rows={5} required className="mt-1"/>
            </div>
            <Button type="submit" className="w-full py-3 text-base hover:bg-primary/90">
              Send Message <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </motion.div>
      </div>
      
      <div className="mt-16 sm:mt-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-primary-foreground">Find Us On The Map</h2>
        <div className="aspect-w-16 aspect-h-9 bg-muted rounded-lg shadow-lg overflow-hidden border border-border">
          <iframe 
            src="https://www.openstreetmap.org/export/embed.html?bbox=66.9939%2C24.7942%2C67.1901%2C24.9247&layer=mapnik&marker=24.85945,67.092" 
            className="w-full h-full border-0"
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          ></iframe>
        </div>
      </div>

    </motion.div>
  );
};

export default ContactPage;