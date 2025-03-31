
import React from 'react';
import { QuoteIcon } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "These stories have become a nightly tradition in our home. My children love the characters and I appreciate the positive messages.",
    name: "Sarah Johnson",
    role: "Parent of two",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    quote: "As a teacher, I've found these stories to be excellent resources for classroom activities and discussions about emotions and values.",
    name: "Michael Chen",
    role: "Elementary Teacher",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    quote: "The audio narration is wonderful - perfect for car rides! My kids stay engaged and actually ask for 'one more story' instead of screen time.",
    name: "Emma Rodriguez",
    role: "Mother of three",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-story-background dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">What Parents & Teachers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md relative"
            >
              <QuoteIcon className="absolute top-4 right-4 h-10 w-10 text-gray-200 dark:text-gray-600" />
              
              <p className="mb-6 text-muted-foreground relative z-10">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4" 
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/testimonials"
            className="text-story-primary hover:text-story-primary/80 transition-colors"
          >
            Read More Testimonials
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
