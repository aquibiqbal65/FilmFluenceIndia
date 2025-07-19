import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Instagram, Send, User, Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    userType: 'brand' // 'brand' or 'influencer'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', message: '', userType: 'brand' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-animated">
      <div className="bg-floating-particles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Let's Create </span>
              <span className="text-gradient">Together</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your brand story? Get in touch with our team of creative storytellers 
              and let's bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-right">
              <Card className="card-gradient border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl text-gradient">Get Started</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* User Type Selection */}
                    <div>
                      <label className="text-sm font-medium text-foreground mb-3 block">
                        I am a:
                      </label>
                      <div className="flex space-x-4">
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, userType: 'brand' }))}
                          className={`flex-1 p-3 rounded-lg border transition-smooth ${
                            formData.userType === 'brand'
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <Building className="w-5 h-5 mx-auto mb-1" />
                          <span className="text-sm">Brand/Company</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, userType: 'influencer' }))}
                          className={`flex-1 p-3 rounded-lg border transition-smooth ${
                            formData.userType === 'influencer'
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <User className="w-5 h-5 mx-auto mb-1" />
                          <span className="text-sm">Influencer/Creator</span>
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="bg-background/50 border-border focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="bg-background/50 border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="text-sm font-medium text-foreground mb-2 block">
                        {formData.userType === 'brand' ? 'Company Name' : 'Social Media Handle'}
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder={formData.userType === 'brand' ? 'Your company name' : '@yourusername'}
                        className="bg-background/50 border-border focus:border-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={
                          formData.userType === 'brand' 
                            ? 'Tell us about your brand, campaign goals, and what you\'re looking to achieve...'
                            : 'Tell us about your content style, audience, and what collaborations you\'re interested in...'
                        }
                        rows={5}
                        required
                        className="bg-background/50 border-border focus:border-primary"
                      />
                    </div>

                    <Button type="submit" className="btn-hero w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-left">
              <div className="space-y-8">
                {/* Contact Details */}
                <Card className="card-gradient border-0 shadow-elegant">
                  <CardHeader>
                    <CardTitle className="text-xl text-gradient">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground">hello@filmfluence.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Location</h3>
                        <p className="text-muted-foreground">Los Angeles, CA</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                        <Instagram className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Social</h3>
                        <a 
                          href="https://instagram.com/filmfluence"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          @filmfluence
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <Card className="card-gradient border-0 shadow-elegant">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground mb-3">Response Time</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We typically respond to all inquiries within 24 hours during business days. 
                      For urgent matters, feel free to give us a call directly.
                    </p>
                  </CardContent>
                </Card>

                {/* CTA for Influencers */}
                <Card className="card-gradient border-0 shadow-elegant">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-gradient mb-3">Are you an influencer?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Join our network of creative storytellers and get access to exclusive brand partnerships.
                    </p>
                    <Button className="btn-influencer w-full">
                      Join Our Creator Network
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;