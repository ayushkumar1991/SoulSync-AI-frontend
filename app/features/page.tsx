"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import {
  Brain,
  Shield,
  Fingerprint,
  Activity,
  Bot,
  LineChart,
  Wifi,
  Heart,
  ArrowRight,
  ChevronDown,
  Zap,
  Lock,
} from 'lucide-react';

const features = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Neural Therapy Engine",
    description: "Advanced AI models trained on clinical datasets provide evidence-based therapeutic interventions with real-time adaptation to patient responses.",
    category: "AI Intelligence",
    metrics: "99.7% Accuracy",
    color: "from-indigo-600 via-blue-600 to-cyan-600",
    shadowColor: "shadow-indigo-500/20",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Zero-Trust Architecture",
    description: "Military-grade encryption with distributed blockchain verification ensures data integrity and complete patient confidentiality.",
    category: "Security",
    metrics: "AES-256 Encryption",
    color: "from-emerald-600 via-teal-600 to-green-600",
    shadowColor: "shadow-emerald-500/20",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Cognitive Pattern Analysis",
    description: "Multi-modal sentiment analysis and behavioral pattern recognition provide deep insights into mental health trajectories.",
    category: "Analytics",
    metrics: "12+ Data Points",
    color: "from-purple-600 via-violet-600 to-indigo-600",
    shadowColor: "shadow-purple-500/20",
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Predictive Crisis Intervention",
    description: "Machine learning algorithms detect early warning signs and automatically trigger appropriate support protocols.",
    category: "Safety",
    metrics: "24/7 Monitoring",
    color: "from-red-600 via-rose-600 to-pink-600",
    shadowColor: "shadow-red-500/20",
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "Ambient Intelligence",
    description: "Seamless integration with IoT ecosystems creates responsive therapeutic environments that adapt to physiological states.",
    category: "Integration",
    metrics: "500+ Devices",
    color: "from-orange-600 via-amber-600 to-yellow-600",
    shadowColor: "shadow-orange-500/20",
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Clinical Intelligence Platform",
    description: "Advanced analytics dashboard with predictive modeling and outcome forecasting for evidence-based treatment optimization.",
    category: "Insights",
    metrics: "Real-time Analytics",
    color: "from-green-600 via-emerald-600 to-teal-600",
    shadowColor: "shadow-green-500/20",
  },
  {
    icon: <Fingerprint className="w-8 h-8" />,
    title: "Biometric Privacy Layer",
    description: "Advanced biometric authentication combined with zero-knowledge proofs ensures identity verification without data exposure.",
    category: "Privacy",
    metrics: "Zero-Knowledge",
    color: "from-slate-600 via-gray-600 to-zinc-600",
    shadowColor: "shadow-slate-500/20",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Holistic Health Orchestration",
    description: "Comprehensive integration with healthcare providers and wearable devices for complete mental wellness coordination.",
    category: "Wellness",
    metrics: "360° Coverage",
    color: "from-rose-600 via-pink-600 to-red-600",
    shadowColor: "shadow-rose-500/20",
  },
];

// Updated MatrixRain to fix 'window is not defined' error
const MatrixRain = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  const characters = Array.from({ length: 50 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute text-green-400/20 font-mono text-sm select-none"
      style={{
        left: `${Math.random() * 100}%`,
        top: '-20px',
      }}
      animate={{
        y: [0, windowHeight + 100], // now safe to use because windowHeight is set on client side
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        delay: Math.random() * 5,
        ease: "linear",
      }}
    >
      {Math.random() > 0.5 ? '1' : '0'}
    </motion.div>
  ));

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      {characters}
    </div>
  );
};

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/10 overflow-hidden"
        whileHover={{ 
          scale: 1.02,
          rotateX: 2,
          rotateY: 2,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `linear-gradient(135deg, ${feature.color.replace(/from-|via-|to-/g, '')})`,
            padding: '1px',
          }}
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 0.3 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-full bg-black/40 backdrop-blur-xl rounded-3xl" />
        </motion.div>

        {/* Subtle background glow */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 rounded-3xl`}
          animate={isHovered ? { opacity: 0.1 } : { opacity: 0.05 }}
          transition={{ duration: 0.4 }}
        />

        {/* Category badge */}
        <div className="relative z-10 mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20">
            {feature.category}
          </span>
        </div>

        {/* Icon and title section */}
        <div className="relative z-10 mb-6">
          <motion.div
            className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${feature.color} mb-4 shadow-lg`}
            animate={isHovered ? { scale: 1.1, rotateZ: 5 } : { scale: 1, rotateZ: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          >
            <div className="text-white">
              {feature.icon}
            </div>
          </motion.div>
          
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
            {feature.title}
          </h3>
          
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">
              {feature.metrics}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="relative z-10 text-gray-300 text-sm leading-relaxed mb-6">
          {feature.description}
        </p>

        {/* Action indicator */}
        <motion.div
          className="relative z-10 flex items-center text-white/60 text-sm font-medium"
          animate={isHovered ? { x: 5, opacity: 1 } : { x: 0, opacity: 0.6 }}
          transition={{ duration: 0.3 }}
        >
          <span>Learn more</span>
          <ArrowRight className="ml-2 w-4 h-4" />
        </motion.div>

        {/* Hover effect overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-3xl"
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

const AnimatedBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <div className="fixed inset-0 -z-10">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      
      {/* Matrix rain effect */}
      <MatrixRain />
      
      {/* Animated geometric shapes */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="min-h-screen relative bg-black text-white">
      <AnimatedBackground />
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 pt-32 pb-24"
      >
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center mb-8">
              <motion.div
                className="p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl"
                animate={{ 
                  boxShadow: [
                    "0 20px 40px rgba(59, 130, 246, 0.3)",
                    "0 20px 40px rgba(147, 51, 234, 0.3)",
                    "0 20px 40px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Lock className="w-12 h-12 text-white" />
              </motion.div>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Enterprise
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                Advanced AI-driven mental health infrastructure with enterprise-grade security, 
                clinical intelligence, and seamless healthcare integration.
              </p>
              
              <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span>SOC 2 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span>HIPAA Certified</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16"
          >
            <ChevronDown className="w-6 h-6 text-white/40 mx-auto" />
          </motion.div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Advanced Capabilities
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Comprehensive suite of advanced features designed for enterprise-scale mental health solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 py-32"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            className="relative bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-16 border border-white/10 max-w-5xl mx-auto overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Ready to Deploy?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Transform your organization's mental health infrastructure with our enterprise-grade platform. 
                Built for scale, security, and clinical excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-2xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center">
                    Request Demo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
                
                <motion.button
                  className="px-8 py-4 rounded-2xl border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Technical Documentation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
        style={{ scaleX: smoothProgress }}
      />
    </div>
  );
}

export default App;
