
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Client-side validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Log the form data (since no backend is specified)
      console.log('Form Submission:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="calibri text-yellow-400">C</span><span className="samarkan">ontac</span><span className="calibri">T</span> <span className="calibri text-yellow-400">U</span><span className="samarkan">s</span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Ready to bridge ancient wisdom with future technology? Let's start a conversation.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-foreground font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/70 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/70 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-foreground font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/70 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-foreground font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell us about your project, questions, or how you'd like to collaborate..."
                className="w-full px-4 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/70 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300 resize-vertical"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 shadow-lg">
            <h3 className="text-xl font-bold text-foreground mb-4">Connect With Us</h3>
            <p className="text-white">
              Join us on this journey where ancient wisdom meets artificial intelligence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
