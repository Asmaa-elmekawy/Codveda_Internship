import React from 'react';
import { Search, Loader2 } from 'lucide-react';

const SearchBar = ({ value, onChange, isLoading }) => {
  return (
    <div className="fade-in" style={{ maxWidth: '600px', margin: '3rem auto', width: '90%' }}>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}>
          {isLoading ? <Loader2 className="animate-spin" size={20} color="var(--primary)" /> : <Search size={20} />}
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search repositories (e.g. react, tensorflow)..."
          className="glass"
          style={{
            width: '100%',
            padding: '1rem 1rem 1rem 3.5rem',
            fontSize: '1rem',
            color: 'var(--text-primary)',
            outline: 'none',
            transition: 'var(--transition)',
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
