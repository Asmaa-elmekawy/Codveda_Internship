import React from 'react';
import { Github } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass" style={{ margin: '1rem', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: '1rem', zIndex: 100 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ background: 'var(--primary)', padding: '0.5rem', borderRadius: '0.75rem', display: 'flex' }}>
          <Github size={24} color="#fff" />
        </div>
        <span style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.025em' }}>RepoExplorer</span>
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>Features</a>
        <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>About</a>
      </div>
    </nav>
  );
};

export default Navbar;
