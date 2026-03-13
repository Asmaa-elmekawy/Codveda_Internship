import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Layers, MousePointer2, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.5 }
    )
      .fromTo(subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      )
      .fromTo(ctaRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        "-=0.6"
      );

    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to(".parallax-bg", {
        x: xPos,
        y: yPos,
        duration: 2,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="parallax-bg" style={{ position: 'absolute', top: '-10%', left: '-10%', width: '120%', height: '120%', background: 'radial-gradient(circle at 50% 50%, hsla(263, 70%, 50%, 0.1) 0%, transparent 50%)', zIndex: -1 }}></div>

      <div style={{ textAlign: 'center', maxWidth: '900px', padding: '0 2rem' }}>
        <h1 ref={titleRef} style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
          Elevate Your <span className="gradient-text">Experience</span>
        </h1>
        <p ref={subtitleRef} style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', marginInline: 'auto' }}>
          Crafting fluid transitions and immersive interactions that bring your digital vision to life.
        </p>
        <div ref={ctaRef}>
          <button className="btn-primary" style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginInline: 'auto' }}>
            Exploration <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', bottom: '2rem', color: 'var(--text-muted)', cursor: 'pointer' }}
      >
        <span style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          Scroll to explore <MousePointer2 size={16} />
        </span>
      </motion.div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, desc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass-card"
      style={{ cursor: 'pointer' }}
    >
      <div style={{ background: 'var(--accent-primary)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <Icon size={24} color="white" />
      </div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{desc}</p>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".project-card");

    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: '8rem 2rem', maxWidth: '1200px', marginInline: 'auto' }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Featured <span className="gradient-text">Projects</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {[1, 2, 3].map((i) => (
          <div key={i} className="project-card glass-card" style={{ height: '400px', display: 'flex', alignItems: 'flex-end', background: `linear-gradient(to bottom, transparent, rgba(0,0,0,0.8)), url('https://picsum.photos/seed/${i + 10}/800/800') center/cover` }}>
            <div style={{ padding: '1.5rem' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Project Innovation {i}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Exploring the boundaries of motion and design.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  return (
    <main>
      <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100, backdropFilter: 'blur(8px)' }}>
        <div style={{ fontWeight: 800, fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>
          GEN<span style={{ color: 'var(--accent-primary)' }}>SIS</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>
          <span style={{ cursor: 'pointer' }}>Work</span>
          <span style={{ cursor: 'pointer' }}>Services</span>
          <span style={{ cursor: 'pointer' }}>Process</span>
          <span className="gradient-text" style={{ cursor: 'pointer', fontWeight: 700 }}>Contact</span>
        </div>
      </nav>

      <Hero />

      <section style={{ padding: '8rem 2rem', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', marginInline: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our <span className="gradient-text">Core</span> Capabilities</h2>
            <p style={{ color: 'var(--text-muted)' }}>Advanced solutions for modern digital challenges.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <FeatureCard
              icon={Sparkles}
              title="Visual Magic"
              desc="Breathtaking animations that capture attention and guide user flow seamlessly."
              delay={0.1}
            />
            <FeatureCard
              icon={Zap}
              title="Hyper Performant"
              desc="Optimized animation engines ensuring 60fps across all modern devices and browsers."
              delay={0.2}
            />
            <FeatureCard
              icon={Layers}
              title="Layered Depth"
              desc="Immersive parallax and depth effects that create a multi-dimensional browsing experience."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      <Projects />

      <footer style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>© 2026 Genesis Creative Studio. Built with GSAP & Framer Motion.</p>
      </footer>
    </main>
  );
};

export default App;
