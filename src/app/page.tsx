import React from 'react';
import { Rocket, Shield, Zap, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-b from-background to-primary/10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          EpicTech <span className="text-primary">v1</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-10 text-gray-400">
          The next generation of high-performance digital solutions. 
          Built for speed, security, and global scale.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
            Get Started
          </button>
          <button className="px-8 py-3 border border-primary/20 rounded-full font-medium hover:bg-primary/5 transition-all">
            Documentation
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-20 max-w-7xl mx-auto">
        <FeatureCard 
          icon={<Zap className="w-8 h-8 text-yellow-500" />}
          title="Ultra Fast"
          description="Optimized for Vercel Edge networks to deliver content instantly."
        />
        <FeatureCard 
          icon={<Shield className="w-8 h-8 text-blue-500" />}
          title="Secure by Default"
          description="Enterprise-grade protection for your most sensitive data."
        />
        <FeatureCard 
          icon={<Globe className="w-8 h-8 text-green-500" />}
          title="Global Scale"
          description="Deploy to 100+ regions with a single click."
        />
        <FeatureCard 
          icon={<Rocket className="w-8 h-8 text-purple-500" />}
          title="Epic Performance"
          description="Core Web Vitals that keep your users engaged."
        />
      </section>

      {/* Footer */}
      <footer className="mt-auto py-10 border-t border-primary/10 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} EpicTech v1. All rights reserved.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-2xl border border-primary/5 bg-card hover:border-primary/20 transition-all group">
      <div className="mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
