"use client";

import * as React from "react";
import { personalInfo } from "@/data/personalInfo";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Mail, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export function Contact() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all fields before sending.");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const templateParams = {
        name: formData.name,
        from_name: formData.name,
        user_name: formData.name,
        email: formData.email,
        reply_to: formData.email,
        user_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        "service_bsc3zaj",
        "template_12e6rbw",
        templateParams,
        "0XEe0aNZ4E4dxdTTw"
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setErrorMessage(
        error?.text || "Failed to send message. Please try again or email directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-5 md:px-6">
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
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a 
                  href={`mailto:${personalInfo.contact.email}`}
                  className="flex items-start p-4 -ml-4 rounded-xl hover:bg-muted/10 transition-colors group"
                >
                  <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
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
                  <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
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
          
          {/* Contact Form with EmailJS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form 
              ref={formRef}
              className="bg-card border border-card-border p-8 rounded-2xl shadow-sm h-full flex flex-col justify-between" 
              onSubmit={handleSubmit}
            >
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Send Me a Message</h3>
                
                {/* Status Messages */}
                {status === "success" && (
                  <div className="mb-6 p-4 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-teal-400" />
                    <div>
                      <p className="font-semibold text-foreground">Message Sent Successfully!</p>
                      <p className="text-muted mt-0.5">Thank you for reaching out. I will get back to you as soon as possible.</p>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-start gap-3 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
                    <div>
                      <p className="font-semibold text-foreground">Failed to Send</p>
                      <p className="text-muted mt-0.5">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-card-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-card-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message here..."
                      className="w-full px-4 py-3 rounded-lg border border-card-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center py-6 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
