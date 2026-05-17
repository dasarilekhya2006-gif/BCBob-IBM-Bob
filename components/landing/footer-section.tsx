"use client";

import { AnimatedWave } from "./animated-wave";

export function FooterSection() {
  return (
    <footer className="relative border-t border-foreground/10">
      {/* Animated wave background */}
      <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-16 lg:py-24 flex flex-col items-center text-center">
          <a href="#" className="inline-flex items-center gap-3 mb-6">
            <img src="/ibm-bob.png" alt="Bob" className="h-10 w-10 rounded-full object-contain" />
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-display text-ibm-blue">BCBob</span>
              <span className="text-xs text-muted-foreground font-mono">TM</span>
            </div>
          </a>

          <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
            The AI platform that audits, fixes, and verifies code. From unstable prototypes to production-ready software.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            IBM Bob Hackathon
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
