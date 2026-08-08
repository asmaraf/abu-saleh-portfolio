"use client";

import * as React from "react";
import { personalInfo } from "@/data/personalInfo";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Feel free to reach out for collaborations or just a friendly hello" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-card border border-card-border p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a 
                  href={`mailto:${personalInfo.contact.email}`}
                  className="flex items-start p-4 -ml-4 rounded-xl hover:bg-muted/10 transition-colors group"
                >
                  <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted mb-1">Email</h4>
                    <p className="text-foreground font-medium">{personalInfo.contact.email}</p>
                  </div>
                </a>
                
                <a 
                  href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-start p-4 -ml-4 rounded-xl hover:bg-muted/10 transition-colors group"
                >
                  <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted mb-1">Phone</h4>
                    <p className="text-foreground font-medium">{personalInfo.contact.phone}</p>
                  </div>
                </a>
                
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form UI Only */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="bg-card border border-card-border p-8 rounded-2xl shadow-sm h-full" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Me a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-card-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-card-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    placeholder="Your message here..."
                    className="w-full px-4 py-3 rounded-lg border border-card-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                
                <Button type="button" className="w-full flex items-center justify-center py-6">
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
