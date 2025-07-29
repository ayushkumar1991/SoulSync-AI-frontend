"use client";

import Link from "next/link";
import { 
  Brain, 
  Heart, 
  Shield, 
  Zap, 
  Users, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin,
  ArrowUp,
  Sparkles,
  Bot,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-t">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-green-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container relative px-4 md:px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Aura 3.0
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Advanced AI-powered therapeutic assistance with multi-agent coordination 
              and real-time crisis detection for comprehensive mental health support.
            </p>
            <div className="flex space-x-3">
              <div className="flex items-center space-x-1 text-xs text-green-600 dark:text-green-400">
                <Activity className="h-3 w-3" />
                <span>Active 24/7</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-blue-600 dark:text-blue-400">
                <Shield className="h-3 w-3" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
          </div>

          {/* AI Features */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground flex items-center space-x-2">
              <Bot className="h-4 w-4 text-blue-500" />
              <span>AI Capabilities</span>
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2 hover:text-foreground transition-colors">
                <Sparkles className="h-3 w-3 text-purple-500" />
                <span>GPT-4 Powered Therapy</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-foreground transition-colors">
                <Users className="h-3 w-3 text-green-500" />
                <span>Multi-Agent Coordination</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-foreground transition-colors">
                <Heart className="h-3 w-3 text-red-500" />
                <span>Adaptive Personality</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-foreground transition-colors">
                <Zap className="h-3 w-3 text-yellow-500" />
                <span>Crisis Detection</span>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground flex items-center space-x-2">
              <MessageCircle className="h-4 w-4 text-green-500" />
              <span>Support</span>
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-2">
                  <span>Help Center</span>
                </Link>
              </li>
              <li>
                <Link href="/crisis" className="text-muted-foreground hover:text-red-500 transition-colors flex items-center space-x-2">
                  <Shield className="h-3 w-3" />
                  <span>Crisis Support</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 text-blue-500" />
                <span>+91 (725) 111 990</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 text-green-500" />
                <span>support@aura3.ai</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-3 w-3 text-red-500" />
                <span>India, Asia</span>
              </div>
              <div className="pt-2">
                <div className="flex items-center space-x-1 text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse "></div>
                  <span>Emergency line available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>© 2025 Aura 3.0 • All rights reserved</span>
            <div className="hidden md:flex items-center space-x-2 text-xs">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>System Operational</span>
              </div>
              <span>•</span>
              <span>Version 3.2.1</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Scroll to top button */}
            {showScrollTop && (
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            )}
            
            {/* AI Status indicator */}
            <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-3 py-2 rounded-full">
              <Brain className="h-4 w-4 text-blue-600 dark:text-blue-400 animate-pulse" />
              <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
                Zerepy Agent Online
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}