'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Users, Zap, Brain, MessageCircle, TrendingUp, Mic, Target, Award, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const WelcomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    // Rotate features every 3 seconds
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Mic, text: "Voice-Powered Tutoring" },
    { icon: Target, text: "Interview Preparation" },
    { icon: Award, text: "Exam Excellence" },
    { icon: Clock, text: "Learn Quickly" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cta-gold/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            
            {/* Logo Animation */}
            <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-pulse"></div>
                  <Image
                    src="/images/logo.png"
                    alt="Cogniva Logo"
                    width={120}
                    height={120}
                    className="relative rounded-4xl shadow-lg hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Opening Introduction */}
            <div className={`transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white/90 backdrop-blur-sm rounded-4xl p-6 border border-primary/20 shadow-lg max-w-4xl mx-auto mb-8">
                <p className="text-lg text-foreground leading-relaxed">
                  <span className="font-semibold text-primary">Cogniva</span> - an AI learning app where students get instant voice tutors for interviews, exams, and learning any subject quickly. 
                  Built by <span className="font-semibold text-cta">IBS Dev World</span>, a development studio that turns complex ideas into simple, user-friendly apps.
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-7xl font-bold text-foreground max-sm:text-4xl leading-tight">
                <span className="bg-gradient-to-r from-primary via-cta-gold to-primary bg-clip-text text-transparent animate-pulse">
                  Cogniva
                </span>
                <span className="block text-4xl max-sm:text-2xl mt-4 text-muted-foreground">
                  Your AI Learning Revolution
                </span>
              </h1>
              
              {/* Rotating Feature Display */}
              <div className="h-20 flex items-center justify-center">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`absolute flex items-center gap-3 px-6 py-3 rounded-4xl border-2 border-primary/20 bg-white/80 backdrop-blur-sm transition-all duration-500 ${
                      currentFeature === index
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 scale-95 translate-y-2'
                    }`}
                  >
                    <feature.icon className="w-6 h-6 text-primary" />
                    <span className="text-lg font-semibold text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Get instant voice tutors for <span className="text-primary font-semibold">interviews</span>, <span className="text-primary font-semibold">exams</span>, and learning any subject quickly. 
                Experience the future of AI-powered education.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex items-center justify-center gap-6 max-sm:flex-col transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Link 
                href="/" 
                className="group bg-primary text-white rounded-4xl px-10 py-5 text-xl font-semibold flex items-center gap-3 hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Enter Cogniva
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                href="#features" 
                className="group border-2 border-primary text-primary rounded-4xl px-10 py-5 text-xl font-semibold hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>

            {/* Floating Animation Cards */}
            <div className="relative mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  { icon: Brain, title: "AI-Powered", desc: "Smart tutors that adapt", delay: "delay-700" },
                  { icon: Mic, title: "Voice-First", desc: "Natural conversations", delay: "delay-1000" },
                  { icon: Zap, title: "Instant Help", desc: "24/7 availability", delay: "delay-1300" }
                ].map((card, index) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} ${card.delay} hover:scale-105 hover:-translate-y-2`}
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-4xl p-6 border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="w-16 h-16 bg-primary/10 rounded-4xl flex items-center justify-center mb-4 mx-auto">
                        <card.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{card.title}</h3>
                      <p className="text-muted-foreground">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-foreground mb-6">
                Why Students Choose Cogniva
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform your learning experience with AI tutors designed for modern education
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Interview Ready",
                  description: "Practice with AI interviewers for job interviews, college admissions, and professional certifications",
                  gradient: "from-primary/20 to-primary/5"
                },
                {
                  icon: Award,
                  title: "Exam Excellence",
                  description: "Master any subject with personalized study sessions and instant feedback on your progress",
                  gradient: "from-cta-gold/20 to-cta-gold/5"
                },
                {
                  icon: Clock,
                  title: "Learn Quickly",
                  description: "Accelerate your learning with AI that adapts to your pace and learning style",
                  gradient: "from-cta/20 to-cta/5"
                },
                {
                  icon: MessageCircle,
                  title: "Voice Conversations",
                  description: "Natural voice interactions make learning feel like talking with a knowledgeable friend",
                  gradient: "from-primary/20 to-primary/5"
                },
                {
                  icon: BookOpen,
                  title: "Any Subject",
                  description: "From mathematics to literature, coding to history - we cover everything you need to learn",
                  gradient: "from-cta-gold/20 to-cta-gold/5"
                },
                {
                  icon: TrendingUp,
                  title: "Track Progress",
                  description: "Visual analytics show your improvement over time and identify areas for growth",
                  gradient: "from-cta/20 to-cta/5"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-4xl p-8 border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-4xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About IBS Dev World Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cta/5 to-primary/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-foreground mb-6">
                About IBS Dev World
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                IBS Dev World creates cutting-edge digital solutions as part of their innovative project series. 
                We transform complex ideas into user-friendly applications that solve real-world problems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Innovation Through Simplicity
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At IBS Dev World, we believe that the most powerful solutions are often the simplest ones. 
                  Our development philosophy centers on creating intuitive, accessible applications that anyone can use effectively.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-4xl p-4 border border-primary/10 shadow-sm">
                    <h4 className="font-semibold text-primary mb-2">User-Centric Design</h4>
                    <p className="text-sm text-muted-foreground">Every app designed with the user in mind</p>
                  </div>
                  <div className="bg-white rounded-4xl p-4 border border-cta/10 shadow-sm">
                    <h4 className="font-semibold text-cta mb-2">Cutting-Edge Tech</h4>
                    <p className="text-sm text-muted-foreground">Latest technologies for best performance</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-4xl p-8 border border-border shadow-lg">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-cta-gold/20 rounded-4xl flex items-center justify-center mx-auto">
                    <Brain className="w-12 h-12 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground">Our Mission</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    To democratize access to advanced technology by creating applications that bridge the gap between 
                    complex functionality and simple user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cta via-cta to-primary text-white rounded-4xl px-12 py-16 text-center relative overflow-hidden">
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-cta-gold/20 animate-pulse"></div>
              
              <div className="relative z-10 space-y-8">
                <div className="inline-flex items-center px-6 py-3 bg-cta-gold rounded-4xl text-cta text-lg font-semibold animate-bounce">
                  <Zap className="w-5 h-5 mr-2" />
                  Ready to Transform Your Learning?
                </div>
                
                <h2 className="text-6xl font-bold max-sm:text-4xl">
                  Start Your Journey
                  <span className="block text-cta-gold">With Cogniva Today</span>
                </h2>
                
                <p className="text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
                  Join thousands of students who are already accelerating their learning with AI-powered tutors
                </p>
                
                <div className="flex items-center justify-center gap-6 max-sm:flex-col">
                  <Link 
                    href="/" 
                    className="group bg-white text-cta rounded-4xl px-12 py-6 text-2xl font-bold flex items-center gap-3 hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    Enter Cogniva Now
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-border/20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/logo.png"
                  alt="Cogniva Logo"
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Cogniva</h3>
                  <p className="text-sm text-muted-foreground">AI Learning Revolution</p>
                </div>
              </div>
              
              <div className="text-center max-sm:text-left">
                <p className="text-muted-foreground text-lg mb-2">
                  Built with ❤️ by <span className="text-primary font-semibold">IBS Dev World</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Turning complex ideas into simple, user-friendly apps
                </p>
              </div>
              
              <div className="text-right max-sm:text-center">
                <p className="text-muted-foreground">
                  © 2024 Cogniva & IBS Dev World
                </p>
                <p className="text-sm text-muted-foreground">
                  Empowering learning through AI
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default WelcomePage;
