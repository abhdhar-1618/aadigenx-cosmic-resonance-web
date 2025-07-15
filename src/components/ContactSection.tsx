
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
    <div className="min-h-screen pt-32 pb-24 px-4 flex items-center justify-center">
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="samarkan text-amber-700">C</span><span className="calibri text-amber-800">ontact </span><span className="samarkan text-amber-700">U</span><span className="calibri text-amber-800">s</span>
          </h1>
          <p className="text-lg text-amber-700 max-w-xl mx-auto">
            Ready to bridge ancient wisdom with future technology? Let's start a conversation.
          </p>
        </div>

        <div className="bg-amber-50/95 backdrop-blur-md rounded-lg p-6 border border-amber-200/50 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-amber-900 font-medium mb-2">
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
                  className="w-full px-3 py-2 bg-white/90 backdrop-blur-md border border-amber-300/50 rounded-md text-amber-900 placeholder-amber-700/70 focus:border-amber-500/70 focus:outline-none focus:ring-2 focus:ring-amber-400/30 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-amber-900 font-medium mb-2">
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
                  className="w-full px-3 py-2 bg-white/90 backdrop-blur-md border border-amber-300/50 rounded-md text-amber-900 placeholder-amber-700/70 focus:border-amber-500/70 focus:outline-none focus:ring-2 focus:ring-amber-400/30 transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-amber-900 font-medium mb-2">
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
                className="w-full px-3 py-2 bg-white/90 backdrop-blur-md border border-amber-300/50 rounded-md text-amber-900 placeholder-amber-700/70 focus:border-amber-500/70 focus:outline-none focus:ring-2 focus:ring-amber-400/30 transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-amber-900 font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell us about your project, questions, or how you'd like to collaborate..."
                className="w-full px-3 py-2 bg-white/90 backdrop-blur-md border border-amber-300/50 rounded-md text-amber-900 placeholder-amber-700/70 focus:border-amber-500/70 focus:outline-none focus:ring-2 focus:ring-amber-400/30 transition-all duration-300 resize-vertical"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-md hover:from-amber-700 hover:to-amber-800 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-6 text-center">
          <div className="bg-amber-50/95 backdrop-blur-md rounded-lg p-4 border border-amber-200/50 shadow-xl">
            <h3 className="text-lg font-bold text-amber-900 mb-2">Connect With Us</h3>
            <p className="text-amber-800 text-sm">
              Join us on this journey where ancient wisdom meets artificial intelligence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
