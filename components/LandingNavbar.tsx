'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const LandingNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt="Cogniva Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-foreground">
                <span className="text-primary">Cogniva</span>
              </div>
              <span className="text-sm text-muted-foreground hidden sm:block">
                by IBS Dev World
              </span>
            </div>
          </div>
          
          <Link 
            href="/dashboard"
            className="group bg-primary text-white rounded-2xl px-6 py-2 font-semibold flex items-center gap-2 hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
          >
            Enter Cogniva
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
