import React from "react";
import {Button} from '../components/Button';
import {AnimatedBorderButton} from'../components/AnimatedBorderButton';
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Image"
          className="opacity-40 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background"></div>
      </div>

      {/*green dots */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1 h-1 rounded-full opacity-60"
            style={{
              backgroundColor: "#20b2a6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s `,
            }}
          />
        ))}
      </div>

        {/*content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}

          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full" />FrontEnd Developer - React Developer
              </span>
            </div>

            {/*headline*/}
            <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Pedro Machado — a software engineer specializing in
                React, Next.js, and TypeScript. I build scalable, performant web
                applications that users love.
              </p>
            </div>

             {/* CTAs */}
             <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
            Contact Me <ArrowRight className="w-4 h-4" />
              </Button>
               <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

              {/* Social Links */}

          </div>
          {/* Right column */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
