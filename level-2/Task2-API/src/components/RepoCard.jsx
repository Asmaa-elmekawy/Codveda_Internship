import React from 'react';
import { Star, GitFork, ExternalLink, Code } from 'lucide-react';

const RepoCard = ({ repo }) => {
  return (
    <div className="glass fade-in" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'var(--transition)', cursor: 'default' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '80%' }}>
          {repo.name}
        </h3>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'var(--transition)' }}>
          <ExternalLink size={18} />
        </a>
      </div>
      
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', height: '3rem', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
        {repo.description || 'No description available'}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}>
        {repo.language && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
            <Code size={14} />
            <span>{repo.language}</span>
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
          <Star size={14} fill="currentColor" />
          <span>{repo.stargazers_count.toLocaleString()}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
          <GitFork size={14} />
          <span>{repo.forks_count.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
