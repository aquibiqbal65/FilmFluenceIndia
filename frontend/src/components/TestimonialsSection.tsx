import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow",
      rating: 5,
      content: "FilmFluence transformed our brand presence completely. Their cinematic approach to influencer marketing resulted in a 340% increase in engagement and 180% boost in conversions. The quality of content was beyond our expectations.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612f932?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO", 
      company: "Urban Lifestyle",
      rating: 5,
      content: "Working with FilmFluence was a game-changer. They didn't just find influencers—they found storytellers who truly understood our brand. The campaign reached 2.5M people and generated our highest ROI to date.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Watson",
      role: "Brand Manager",
      company: "Wellness Co",
      rating: 5,
      content: "The attention to detail and creative excellence is unmatched. FilmFluence created authentic connections between our brand and audiences we never thought we could reach. Every piece of content felt like a mini-movie.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Founder",
      company: "Eco Fashion",
      rating: 5,
      content: "FilmFluence understands that influence marketing is about storytelling, not just posting. They helped us build genuine relationships with creators who shared our values, resulting in long-term brand ambassadorships.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">What Our </span>
            <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what leading brands say about their experience with FilmFluence.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="card-gradient p-8 lg:p-12 text-center card-hover animate-scale-in">
            {/* Quote Icon */}
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-8">
              <Quote className="w-8 h-8 text-white" />
            </div>

            {/* Stars */}
            <div className="flex justify-center space-x-1 mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-current" />
              ))}
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-xl lg:text-2xl text-foreground mb-8 leading-relaxed font-medium">
              "{testimonials[currentTestimonial].content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full border-2 border-primary"
              />
              <div className="text-left">
                <div className="font-semibold text-foreground text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card hover:bg-muted transition-smooth"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-card hover:bg-muted transition-smooth"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-smooth ${
                index === currentTestimonial 
                  ? 'bg-primary shadow-glow' 
                  : 'bg-border hover:bg-muted'
              }`}
            />
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="card-gradient p-6 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                "{testimonial.content.slice(0, 120)}..."
              </p>
              
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-medium text-foreground text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Campaigns Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;