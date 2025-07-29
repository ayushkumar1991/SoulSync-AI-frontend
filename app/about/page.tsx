"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Heart, 
  Target, 
  Sparkles, 
  Shield, 
  Brain, 
  Users, 
  Globe, 
  Zap,
  ArrowRight,
  Check,
  Star
} from 'lucide-react';

const missions = [
  {
    icon: <Heart className="w-10 h-10" />,
    title: "Our Mission",
    subtitle: "Democratizing Mental Health",
    description: "To democratize access to mental health support through ethical AI and blockchain technology, making quality therapeutic care available to everyone, everywhere, at any time.",
    gradient: "from-rose-600 via-pink-600 to-red-600",
    features: ["24/7 Accessibility", "Ethical AI Framework", "Global Reach"],
    stats: "10M+ Lives Impacted"
  },
  {
    icon: <Target className="w-10 h-10" />,
    title: "Our Vision",
    subtitle: "Future of Mental Wellness",
    description: "A world where mental health support is accessible, private, and personalized, powered by trusted AI agents and secured by blockchain technology.",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    features: ["Privacy-First Design", "Personalized Care", "Blockchain Security"],
    stats: "99.9% Privacy Score"
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "Our Values",
    subtitle: "Core Principles",
    description: "Privacy, Innovation, Empathy, and Trust form the cornerstone of our platform, ensuring the highest standards of care and security.",
    gradient: "from-amber-600 via-orange-600 to-yellow-600",
    features: ["Trust & Transparency", "Continuous Innovation", "Empathetic Design"],
    stats: "4 Core Values"
  },
];

const stats = [
  { label: "Active Users", value: "2.5M+", icon: <Users className="w-6 h-6" /> },
  { label: "Countries", value: "150+", icon: <Globe className="w-6 h-6" /> },
  { label: "AI Models", value: "50+", icon: <Brain className="w-6 h-6" /> },
  { label: "Uptime", value: "99.9%", icon: <Shield className="w-6 h-6" /> },
];

const principles = [
  {
    title: "Privacy by Design",
    description: "Every feature is built with privacy as the foundation, not an afterthought.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Ethical AI",
    description: "Our AI models are trained with strict ethical guidelines and bias mitigation.",
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: "Clinical Excellence",
    description: "Evidence-based approaches validated by mental health professionals.",
    icon: <Heart className="w-6 h-6" />
  },
  {
    title: "Continuous Innovation",
    description: "Constantly evolving technology to better serve mental health needs.",
    icon: <Zap className="w-6 h-6" />
  }
];

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

const MissionCard = ({ mission, index }: { mission: typeof missions[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80, rotateX: -15 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        rotateX: 0 
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group perspective-1000"
    >
      <motion.div
        className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/10 overflow-hidden"
        whileHover={{ 
          scale: 1.02,
          rotateY: 5,
          z: 50
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30"
          style={{
            background: `linear-gradient(135deg, ${mission.gradient.replace('from-', '').replace(' via-', ', ').replace(' to-', ', ')})`,
            padding: '1px',
          }}
          animate={isHovered ? { opacity: 0.3 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-full h-full bg-black/40 backdrop-blur-xl rounded-3xl" />
        </motion.div>

        {/* Background glow */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${mission.gradient} opacity-5 rounded-3xl`}
          animate={isHovered ? { opacity: 0.1 } : { opacity: 0.05 }}
          transition={{ duration: 0.4 }}
        />

        {/* Icon section */}
        <motion.div
          className={`relative z-10 mb-8 inline-flex p-4 rounded-2xl bg-gradient-to-br ${mission.gradient} shadow-2xl`}
          animate={isHovered ? { 
            scale: 1.1, 
            rotateZ: 5,
            boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
          } : { 
            scale: 1, 
            rotateZ: 0,
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
          }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
        >
          <div className="text-white">
            {mission.icon}
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
              {mission.title}
            </h3>
            <p className="text-sm font-medium text-blue-400 mb-4">
              {mission.subtitle}
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6 text-sm">
            {mission.description}
          </p>

          {/* Features list */}
          <div className="mb-6 space-y-2">
            {mission.features.map((feature, idx) => (
              <motion.div
                key={feature}
                className="flex items-center text-sm text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 + idx * 0.1 }}
              >
                <Check className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-emerald-400 font-medium">
              <Star className="w-4 h-4 mr-1" />
              {mission.stats}
            </div>
            
            <motion.div
              className="flex items-center text-white/60 text-sm"
              animate={isHovered ? { x: 5 } : { x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-center group hover:bg-white/10 transition-colors"
    >
      <div className="flex justify-center mb-3 text-blue-400">
        {stat.icon}
      </div>
      <div className="text-3xl font-bold text-white mb-1">
        {stat.value}
      </div>
      <div className="text-sm text-gray-400">
        {stat.label}
      </div>
    </motion.div>
  );
};

const AnimatedBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <FloatingElements />
      
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );
};

export default function AboutPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 pt-32 pb-20"
      >
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isHeroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
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
                <Brain className="w-12 h-12 text-white" />
              </motion.div>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Aura3.0
              </span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We're revolutionizing mental health support by combining cutting-edge 
              AI technology with the security and transparency of blockchain, creating 
              a new paradigm for therapeutic care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center gap-8 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Founded 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>AI-First Approach</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span>Blockchain Secured</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Mission Cards */}
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
              Our Foundation
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Built on principles that prioritize human well-being, technological excellence, and ethical responsibility
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {missions.map((mission, index) => (
              <MissionCard key={mission.title} mission={mission} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Principles Section */}
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
              Guiding Principles
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white group-hover:scale-110 transition-transform">
                    {principle.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
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
            className="relative bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-xl rounded-3xl p-16 border border-white/10 max-w-4xl mx-auto overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Join Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Be part of the revolution in mental health technology. Together, we can create a world where quality care is accessible to all.
              </p>
              
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
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}