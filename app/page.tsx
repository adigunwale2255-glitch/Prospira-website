"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  Globe,
  Layout,
  Smartphone,
  Gamepad2,
  Bot,
  Palette,
} from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import Counter from "@/components/Counter";
import { getPlaceholder } from "@/lib/placeholders";

const marqueeLogos = [
  "GOOGLE",
  "META",
  "VERCEL",
  "STRIPE",
  "LINEAR",
  "AWS",
  "MICROSOFT",
  "ADOBE",
];

const expertiseList = [
  {
    id: "01",
    title: "Web Development",
    icon: <Globe className="w-8 h-8" />,
    desc: "Modern, high-performance websites built with React, Next.js, and cutting-edge tech stacks.",
    tags: ["React", "Next.js", "Headless CMS"],
  },
  {
    id: "02",
    title: "Web Applications",
    icon: <Layout className="w-8 h-8" />,
    desc: "Complex SaaS platforms and enterprise applications designed for scale and security.",
    tags: ["SaaS", "Full Stack", "Dashboard"],
  },
  {
    id: "03",
    title: "Mobile Apps",
    icon: <Smartphone className="w-8 h-8" />,
    desc: "Native-quality mobile experiences for iOS and Android using Flutter and React Native.",
    tags: ["Flutter", "React Native", "iOS/Android"],
  },
  {
    id: "04",
    title: "Game Development",
    icon: <Gamepad2 className="w-8 h-8" />,
    desc: "Immersive 2D and 3D digital experiences and games for web and mobile platforms.",
    tags: ["Unity", "Three.js", "2D/3D"],
  },
  {
    id: "05",
    title: "AI Automation",
    icon: <Bot className="w-8 h-8" />,
    desc: "Integrating intelligent AI agents and automation workflows to streamline your business.",
    tags: ["OpenAI", "LLMs", "Automation"],
  },
  {
    id: "06",
    title: "UI/UX Design",
    icon: <Palette className="w-8 h-8" />,
    desc: "Strategic design that blends aesthetic beauty with world-class user experience.",
    tags: ["Figma", "Research", "Prototyping"],
  },
];

export default function HomePage() {
  const heroImage = getPlaceholder("hero-main");

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#233038] to-[#075056] py-20 px-6">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.15 }}
            className="text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white text-xs font-bold mb-6 tracking-widest uppercase"
            >
              Team Prospira Modern Agency
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-black text-white font-headline leading-[0.9] tracking-tighter mb-8 bg-gradient-to-b from-white to-[#F4D47C] bg-clip-text text-transparent"
            >
              We Build Digital <br /> Products That <br /> Grow Businesses
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-white/70 max-w-xl mb-12 font-body leading-relaxed"
            >
              Custom websites, scalable applications, mobile experiences, and
              immersive digital products built for ambitious businesses ready to
              lead their industries.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link href="/services">
                <MagneticButton variant="primary">
                  Start Your Project <ArrowRight size={18} />
                </MagneticButton>
              </Link>
              <Link href="/portfolio">
                <MagneticButton
                  variant="outline"
                  className="text-white border-white/20 hover:bg-white/10"
                >
                  Explore Our Work
                </MagneticButton>
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating 3D Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative perspective-1000 hidden lg:block"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateX: [0, 5, 0],
                rotateY: [0, -5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="relative w-full aspect-square bg-gradient-to-tr from-white/10 to-white/5 rounded-3xl border border-white/10 p-8 backdrop-blur-sm overflow-hidden group">
                <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative z-10 h-full w-full flex items-center justify-center">
                  {heroImage && (
                    <Image
                      src={heroImage.imageUrl}
                      alt={heroImage.description}
                      width={800}
                      height={800}
                      className="rounded-xl shadow-2xl rotate-3 object-cover"
                      priority
                    />
                  )}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-0 right-0 p-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md"
                  >
                    <div className="w-12 h-1 bg-primary rounded-full mb-2" />
                    <div className="w-8 h-1 bg-accent rounded-full" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-20 bg-background relative z-10 -mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#FDF6E3] border border-border rounded-[3rem] p-12 shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              <Counter value={300} label="Projects Delivered" suffix="+" />
              <Counter value={10} label="Years Experience" suffix="+" />
              <Counter value={20} label="Technologies" suffix="+" />
              <Counter value={100} label="Client Focused" suffix="%" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. MARQUEE SECTION */}
      <section className="py-12 bg-background overflow-hidden border-y border-border">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex gap-20 items-center justify-around min-w-full px-10">
            {marqueeLogos.map((logo, idx) => (
              <span
                key={`m1-${idx}`}
                className="text-3xl font-black font-headline text-muted-foreground/30 hover:text-primary transition-colors cursor-default select-none"
              >
                {logo}
              </span>
            ))}
          </div>
          <div className="flex gap-20 items-center justify-around min-w-full px-10">
            {marqueeLogos.map((logo, idx) => (
              <span
                key={`m2-${idx}`}
                className="text-3xl font-black font-headline text-muted-foreground/30 hover:text-primary transition-colors cursor-default select-none"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERTISE SECTION */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
              >
                Our Expertise
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-black font-headline tracking-tighter"
              >
                Building The Infrastructure <br /> Of The Future
              </motion.h2>
            </div>
            <Link
              href="/services"
              className="group flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm interactive"
            >
              View All Services{" "}
              <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border overflow-hidden rounded-3xl border border-border">
            {expertiseList.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="group relative bg-background p-10 flex flex-col min-h-[400px] transition-colors hover:bg-secondary interactive overflow-hidden"
              >
                <div className="text-secondary group-hover:text-primary transition-colors mb-8">
                  {item.icon}
                </div>
                <span className="text-muted-foreground group-hover:text-white/50 text-sm font-black mb-2 transition-colors">
                  {item.id}
                </span>
                <h3 className="text-3xl font-black font-headline mb-4 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-white/70 mb-8 transition-colors">
                  {item.desc}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-full border border-border group-hover:border-white/20 group-hover:text-white/70 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 px-6 bg-secondary text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-8 leading-[0.9]">
              Ready to Build Something <br /> Exceptional?
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-lg">
              We help visionary companies design and develop premium digital
              products. Whether you&apos;re a startup or an enterprise, we bring your
              ideas to life.
            </p>
            <div className="flex gap-6">
              <Link href="/contact">
                <MagneticButton
                  variant="primary"
                  className="shadow-2xl shadow-primary/20"
                >
                  Start Project <ArrowRight size={20} />
                </MagneticButton>
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-primary blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80"
                alt="Digital Craftsmanship"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

